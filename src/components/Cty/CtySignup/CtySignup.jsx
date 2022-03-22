import React from 'react';

import './ctysignup.scss'

import Logo from '../../Logo/Logo';
import Signup from '../../Signup/Signup';

const CtySignup = () => {
    return (
        <div className='form'>
            <Logo type='cty'/>

            <Signup
                type='cty'
            />
        </div>
    );
}

export default CtySignup;
