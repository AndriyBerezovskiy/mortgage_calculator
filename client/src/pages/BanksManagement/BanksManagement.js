import { useState } from 'react';

import { Banks, Form } from '../../components';

import './BankManagement.scss';

const BanksManagement = () => {
    const [trigger, setTrigger] = useState(null);

    const update = (data) => {
        setTrigger(data);
    };

    return (
        <div>
            <div className='bank'>
                <Form update={update}/>
                <Banks trigger={trigger} update={setTrigger}/>
            </div>
        </div>
    );
};

export { BanksManagement };
