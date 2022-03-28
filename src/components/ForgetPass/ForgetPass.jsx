import React from 'react';
import {Link} from 'react-router-dom'

import './forget-pass.scss'

import Logo from '../Logo/Logo'
import Button from '../Button/Button'
import ButtonArrow from '../ButtonArrow/ButtonArrow';

const ForgetPass = () => {
    return (
        <div className='form forget-pass'>
            <Logo/>

            <div className="forget-pass__section">
                <h1 className="form-title forget-pass__title">Lấy lại Mật khẩu</h1>
                <div className="input-wrapper">
                    <div className='input-group'>
                        <label htmlFor="">Email</label>
                        <input type='email' className='input-group__input' id='' placeholder='Email'/>
                    </div>
                </div>
                <div className="forget-pass__btns">
                    <ButtonArrow direction='right'>Tiếp theo</ButtonArrow>
                </div>
            </div>

            <div className="forget-pass__section">
                <h1 className="form-title forget-pass__title">Nhập mã xác minh</h1>
                <div className="input-wrapper">
                    <div className='input-group'>
                        <label htmlFor="">Mã xác minh sẽ được gửi qua email</label>
                        <input type='email' className='input-group__input' id='' placeholder=''/>
                    </div>
                </div>

                <h4 className="forget-pass__des">
                    Bạn không nhận được mã?
                    <a href="">Gửi lại</a>
                </h4>

                <h4 className="forget-pass__des">
                    Mã sẽ hết hạn sau 
                    <span>  60</span>s
                </h4>

                <div className="forget-pass__btns">
                    <ButtonArrow direction='left'>Trở lại</ButtonArrow>
                    <ButtonArrow direction='right'>Tiếp theo</ButtonArrow>
                </div>
            </div>

            <div className="forget-pass__section">
                <h1 className="form-title forget-pass__title">Cập nhật Mật khẩu</h1>
                <div className="input-wrapper">
                    <div className='input-group'>
                        <label htmlFor="">Mật khẩu mới</label>
                        <input type='password' className='input-group__input' id='' placeholder=''/>
                    </div>

                    <div className='input-group'>
                        <label htmlFor="">Xác nhận mật khẩu</label>
                        <input type='password' className='input-group__input' id='' placeholder=''/>
                    </div>
                </div>
                
                <div className="forget-pass__btns">
                    <Link to='/login'>
                        <Button>Hoàn tất</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ForgetPass;
