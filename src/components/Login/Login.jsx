import React, {useState} from 'react';

import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';
import './login.scss'

import Logo from '../Logo/Logo'
import Button from '../Button/Button'
import { Google } from 'react-bootstrap-icons';

import { useAuth } from '../../contexts/AuthContext';

const Login = () => {

    const navigate = useNavigate()
    const { login, signInWithGoogle, currentUser } = useAuth()

    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')

    const loginWithGoogle = () => {
        signInWithGoogle()
        navigate('/update-info')
    }
    
    const loginWithEmailPassWord = () => {
        login(loginEmail, loginPassword)
            .then(((res) => {
                console.log(res)
                navigate('/')
            }))
            .catch((err) => {
                alert('Bạn nhập sai mật khẩu hoặc tài khoản')
            })
    }

    return (
        <div className='form login'>
            <Logo/>
            <div className="login-btn" onClick={loginWithGoogle}>
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
            <form className="input-wrapper login-form" onSubmit={(e) => {
                e.preventDefault()
                loginWithEmailPassWord()
            }}>
                <div className='input-group'>
                    <label htmlFor="">Email</label>
                    <input type='email' className='input-group__input' placeholder='Email' onChange={(e) => {
                        setLoginEmail(e.target.value)
                    }}/>
                </div>
                <div className='input-group'>
                    <label htmlFor="">Mật khẩu</label>
                    <input type='password' className='input-group__input' placeholder='Mật khẩu' onChange={(e) => {
                        setLoginPassword(e.target.value)
                    }}/>
                </div>
                <div className="login-remember">
                    <input type="checkbox" id='login-remember__check' />
                    <label htmlFor="login-remember__check">Lưu mật khẩu</label>
                </div>
                <input type="submit" id='login-submit'/>
                <label htmlFor='login-submit' className="login-submit">
                    <Button>Đăng nhập</Button>
                </label>
            </form>

            <Link to='/forgetpass' className='login-forget'>Quên mật khẩu?</Link>
            <p className='login-signup'>
                Bạn chưa có tài khoản? 
                <Link to='/signup'>Đăng ký</Link>
            </p>
        </div>
    );
}

export default Login;
