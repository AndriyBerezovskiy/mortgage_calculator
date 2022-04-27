import { useEffect, useState } from 'react';

import { bankService } from '../../services/bank.service';

import './Banks.scss';
import { Bank } from '../Bank/Bank';

const Banks = ({ trigger, update }) => {
    const [banks, setBanks] = useState([]);

    useEffect(() => {
        bankService.getAll().then((value) => setBanks([...value]));
    }, [trigger]);

    localStorage.setItem('bank', JSON.stringify(banks));

    return (
        <div className='banks'>
            <h1>List Banks:</h1>
            {
                banks.map((bank) => <Bank key={bank.id} bank={bank} update={update}/>)
            }
        </div>
    );
};

export { Banks };
