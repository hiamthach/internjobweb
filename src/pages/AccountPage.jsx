import React from 'react';

import Account from '../components/Account/Account';
import Header from '../components/Header/Header'

const AccountPage = () => {
    return (
        <div className='container'>
            <Header
                where='account'
            />
            <Account/>
        </div>
    );
}

export default AccountPage;

