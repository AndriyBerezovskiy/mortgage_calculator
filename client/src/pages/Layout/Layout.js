import { NavLink } from 'react-router-dom';
import {Outlet} from 'react-router';

import './Layout.scss';

const Layout = () => (
    <div className='home'>
        <div className='header'>
            <NavLink to={'/banks'}>Banks management</NavLink>
            <NavLink to={'/calculator'}>Mortgage calculator</NavLink>
        </div>

        <Outlet/>
    </div>
);

export { Layout };
