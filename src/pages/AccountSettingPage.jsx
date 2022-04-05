import React from 'react';

import Header from '../components/Header/Header'
import AccountSetting from '../components/AccountSetting/AccountSetting'

const AccountSettingPage = () => {
    return (
        <div className='container'>
            <Header
                where='account'
            />
            <AccountSetting/>
        </div>
    );
}

export default AccountSettingPage;
