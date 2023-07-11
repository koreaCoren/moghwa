import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Account from './Account';

function App() {
    return (
        <>
            <Routes>
                <Route path="/*" element={<Account />} />
            </Routes>
        </>
    );
}

export default App;
