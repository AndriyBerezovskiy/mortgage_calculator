import { Route, Routes } from 'react-router';

import { BanksManagement, Layout, MortgageCalculator } from './pages';

function App() {
    return (
        <div className='App'>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'/banks'} element={<BanksManagement/>}/>
                    <Route path={'/calculator'} element={<MortgageCalculator/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
