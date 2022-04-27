import { useForm } from 'react-hook-form';
import { useState } from 'react';

import './MortgageCalculator.scss';

const MortgageCalculator = () => {
    const {
        register, handleSubmit, formState: { errors }, reset,
    } = useForm({mode: 'onTouched'});

    const [currentBank, setCurrentBank] = useState('');
    const [startPayment, setStartPayment] = useState();
    const [downPayment, setDownPayment] = useState();
    const [message, setMessage] = useState();

    const {
        0: bankName, 1: interestRate, 2: maximumLoan, 3: minimumDownPayment, 4: loanTerm,
    } = {...currentBank.toString().split(',')};

    const bankInfo = JSON.parse(localStorage.getItem('bank'));

    /*
        monthlyPayment - М: щомісячна оплата
        startPayment - P: сума позики, початковий кредит
        interestRate - r: річна процентна/відсоткова ставка
        loanTerm - n: кількість місячних платежів
    */

    const monthlyPayment = +startPayment * ((+interestRate / 100) / 12) * ((1 + ((+interestRate / 100) / 12)) ** +loanTerm)
                            / (((1 + ((+interestRate / 100) / 12)) ** +loanTerm) - 1)

    const submit = () => {
        if ((startPayment * (minimumDownPayment / 100)) <= downPayment) {
            setMessage(`Банк '${bankName}' може надати Вам позику в розмірі ${+startPayment}$
                             при щомісячній оплаті в розмірі ${+monthlyPayment.toFixed(2)}$
                             на термін ${loanTerm} міс.`)
        } else {
            setMessage(`На жаль банк '${bankName}' не може надати Вам позику, тому що перший внесок
                              є меншим зазначеного даним банком, а саме 
                              ${(startPayment * (minimumDownPayment / 100)).toFixed(2)}$.`)
        }
    }

    return (
        <div className='calculator'>
            <form onSubmit={handleSubmit(submit)}>
                <div>
                    <label>
                        {errors.initialLoan && <span>{errors.initialLoan.message}</span>}
                        <input
                            type='text'
                            placeholder={'Початковий кредит'}
                            {...register('initialLoan', {
                                required: 'Поле не може бути пустим',
                                pattern: {
                                    value: /^[0-9]+$/,
                                    message: 'Поле повинно містити тільки числа',
                                },
                            })}
                            onChange={event => setStartPayment(event.target.value)}/>
                    </label>
                </div>

                <div>
                    <label>
                        {errors.downPayment && <span>{errors.downPayment.message}</span>}
                        <input
                            type='text'
                            placeholder={'Перший внесок'}
                            {...register('downPayment', {
                                required: 'Поле не може бути пустим',
                                pattern: {
                                    value: /^[0-9]+$/,
                                    message: 'Поле повинно містити тільки числа',
                                },
                            })}
                            onChange={event => setDownPayment(event.target.value)}/>
                    </label>
                </div>

                <select {...register('listBank')} onChange={(event => setCurrentBank(event.target.value))}>
                    <option className='title'>Виберіть банк...</option>
                    {
                        bankInfo.map((value) => (
                            <option
                                key={value.id}
                                value={[
                                    value.bankName,
                                    value.interestRate,
                                    value.maximumLoan,
                                    value.minimumDownPayment,
                                    value.loanTerm,
                                ]}
                            >{value.bankName}
                            </option>
                        ))
                    }
                </select>
                <button>Calculate</button>
            </form>

            <div className='result'>
                {message}
            </div>
        </div>
    );
};

export { MortgageCalculator };
