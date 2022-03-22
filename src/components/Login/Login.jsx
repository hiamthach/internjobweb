import React from 'react';

import { Link } from 'react-router-dom';
import './login.scss'

import Logo from '../Logo/Logo'
import Button from '../Button/Button'
import { Google } from 'react-bootstrap-icons';

const Login = () => {
    return (
        <div className='form login'>
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
            <h1 className="form-title login-title">Đăng Nhập</h1>
            <div className="input-wrapper login-form">
                <div className='input-group'>
                    <label htmlFor="">Email</label>
                    <input type='email' className='input-group__input' id='' placeholder='Email'/>
                </div>
                <div className='input-group'>
                    <label htmlFor="">Mật khẩu</label>
                    <input type='email' className='input-group__input' id='' placeholder='Mật khẩu'/>
                </div>
                
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
