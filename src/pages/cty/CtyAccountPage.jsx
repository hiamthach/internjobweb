import React from 'react';

import CtyAccount from '../../components/Cty/CtyAccount/CtyAccount'
import Header from '../../components/Header/Header'

const CtyAccountPage = () => {
    return (
        <div className='container'>
            <Header
                type='cty'
                where='account'
            />
            <CtyAccount/>
        </div>
    );
}

export default CtyAccountPage;
