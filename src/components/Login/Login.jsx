import React from 'react';

import { Link } from 'react-router-dom';
import './login.scss'

import Logo from '../Logo/Logo'
import Button from '../Button/Button'
import InputGroup from '../InputGroup/InputGroup';
import { Google } from 'react-bootstrap-icons';

const Login = () => {
    return (
        <div className='login'>
            <Logo/>
            <div className="login-btn">
                <Button>
                    Đăng nhập với Google
                    <Google className='login-icon'/> 
                </Button>
            </div>
            <div className='login-or'>
                <div className="line"></div>
                <span>Hoặc</span>
                <div className="line"></div>
            </div>
            <h1 className="login-title">Đăng Nhập</h1>
            <div className="login-form">
                {/* <div className="login-form__item">
                    <label htmlFor=".login-form__email">Email</label>
                    <input type="email" className='login-form__item--input login-form__email' id='' placeholder='itinternjob@gmail.com'/>
                </div>

                <div className="login-form__item">
                    <label htmlFor=".login-form__pass">Password</label>
                    <input type="password" className='login-form__item--input login-form__password' placeholder='8-16 ký tự và không có ký tự đặc biệt'/>
                </div> */}
                <InputGroup
                    type='email'
                    text='Email'
                    place=''
                />
                <InputGroup
                    type='password'
                    text='Mật khẩu'
                    place=''
                    // forced
                    // error
                />
            </div>
            <div className="login-remember">
                <input type="checkbox" id='login-remember__check' />
                <label htmlFor="login-remember__check">Lưu mật khẩu</label>
            </div>

            <Button>Đăng nhập</Button>
            <Link to='/forgetpass' className='login-forget'>Quên mật khẩu?</Link>
        </div>
    );
}

export default Login;
