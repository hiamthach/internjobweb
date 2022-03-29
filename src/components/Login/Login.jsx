import React, {useState, useEffect} from 'react';

import { auth, provider, db } from '../../firebase-config';
import { doc, collection, getDocs, updateDoc } from 'firebase/firestore'
import { signInWithEmailAndPassword,  signInWithPopup } from 'firebase/auth'

import { useNavigate } from 'react-router-dom';


import { Link } from 'react-router-dom';
import './login.scss'

import Logo from '../Logo/Logo'
import Button from '../Button/Button'
import { Google } from 'react-bootstrap-icons';

import UsersSlice from '../../redux/Slice/UsersSlice';
import { useDispatch } from 'react-redux';

const Login = () => {

    let navigate = useNavigate()

    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')


    const loginWithGoogle = async () => {
        await signInWithPopup(auth, provider).then((result) => {
            console.log(result)
        })
    }

    const usersRef = collection(db, "users")

    const [users, setUsers] = useState([])

    useEffect(() => {
        const getUser = async () => {
            const data = await getDocs(usersRef)
            setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }

        getUser()
        
    }, []);
    
    const dispatch = useDispatch()
    const loginWithEmailPassWord = async () => {
        await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
            .then((res) => {
                console.log(res.user.email)
                const userLogin = users.filter((user) => user.email === loginEmail)
                dispatch(UsersSlice.actions.updateUsers(userLogin[0]))
                navigate(`/${userLogin[0].type}`)
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
        </div>
    );
}

export default Login;
