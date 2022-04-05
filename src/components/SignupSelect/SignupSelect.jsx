import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import ButtonArrow from '../ButtonArrow/ButtonArrow';

import './signup-select.scss'

const SignupSelect = ({isSelected}) => {
    return (
        <div className="form SeleSignupSelect-select">
            <Logo/>

            <h1 className="form-title">Đăng ký</h1>

            <div className="signup-select-btns">
                <div className='signup-select-btn' onClick={() => isSelected('cty')}>
                    <Button>Doanh nghiệp</Button>
                </div>
                <div className='signup-select-btn' onClick={()=> isSelected('uni')}>
                    <Button>Trường Đại học / Cao Đẳng</Button>
                </div>
            </div>

            <Link to='/login'>
                <ButtonArrow direction='right'>Đăng nhập</ButtonArrow>
            </Link>
        </div>
    );
}

export default SignupSelect;
