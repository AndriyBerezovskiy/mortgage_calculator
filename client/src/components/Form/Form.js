import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';

import { bankService } from '../../services/bank.service';
import { BankValidator } from '../../validators/bank.validator';

import './Form.scss';

const Form = ({ update }) => {
    const {
        register, handleSubmit, formState: { errors }, reset,
    } = useForm({resolver: joiResolver(BankValidator), mode: 'onTouched'});

    const submit = async (bank) => {
        try {
            const newBank = await bankService.create(bank);
            update(newBank);
            reset();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={'create_bank'}>
            <form onSubmit={handleSubmit(submit)}>
                <h1>Create bank:</h1>

                <div>
                    <label>
                        {errors.bankName && <span>{errors.bankName.message}</span>}
                        <input
                            type='text'
                            defaultValue={''}
                            placeholder={'Назва банку ...'}
                            {...register('bankName')}
                        />
                    </label>
                </div>

                <div>
                    <label>
                        {errors.interestRate && <span>{errors.interestRate.message}</span>}
                        <input
                            type='text'
                            defaultValue={''}
                            placeholder={'Відсоткова ставка ...'}
                            {...register('interestRate')}/>
                    </label>
                </div>

                <div>
                    <label>
                        {errors.maximumLoan && <span>{errors.maximumLoan.message}</span>}
                        <input
                            type='text'
                            defaultValue={''}
                            placeholder={'Максимальний кредит ...'}
                            {...register('maximumLoan')}/>
                    </label>
                </div>

                <div>
                    <label>
                        {errors.minimumDownPayment && <span>{errors.minimumDownPayment.message}</span>}
                        <input
                            type='text'
                            defaultValue={''}
                            placeholder={'Мінімальний авансовий внесок ...'}
                            {...register('minimumDownPayment')}/>
                    </label>
                </div>

                <div>
                    <label>
                        {errors.loanTerm && <span>{errors.loanTerm.message}</span>}
                        <input
                            type='text'
                            defaultValue={''}
                            placeholder={'Термін позики ...'}
                            {...register('loanTerm')}/>
                    </label>
                </div>

                <button>Create</button>
            </form>
        </div>
    );
};

export { Form };
