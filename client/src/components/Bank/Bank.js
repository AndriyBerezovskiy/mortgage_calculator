import { bankService } from '../../services/bank.service';

import './Bank.scss';

function Bank({ bank, update }) {
    const {
        id, bankName, interestRate, maximumLoan, minimumDownPayment, loanTerm,
    } = bank;

    const deleteBank = async () => {
        await bankService.deleteById(id);
        update({});
    }

    return (
        <div className='list_bank'>
            <div className='bank_name'><h2>{bankName}</h2></div>
            <div>{interestRate}% - Відсоткова ставка</div>
            <div>{maximumLoan}$ - Максимальний кредит</div>
            <div>{minimumDownPayment}% - Мінімальний авансовий внесок</div>
            <div>{loanTerm} міс - Термін позики</div>
            <button onClick={() => deleteBank()}>Delete bank</button>
            <hr className='hr'/>
        </div>
    );
}

export { Bank };
