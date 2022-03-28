import React from 'react';

import CtyAccountSetting from '../../components/Cty/CtyAccountSetting/CtyAccountSetting';
import Header from '../../components/Header/Header'

const CtyAccountSettingPage = () => {
    return (
        <div className='container'>
            <Header
                type='cty'
                where='account'
            />
            <CtyAccountSetting/>
        </div>
    );
}

export default CtyAccountSettingPage;
