import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss'

import {PlusSquare} from 'react-bootstrap-icons'

import Logo from '../Logo/Logo';

import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/selectors';

import { signOut } from 'firebase/auth'
import { auth } from '../../firebase-config'

const Header = (props) => {

    const user = useSelector(selectUser)

    console.log(user)

    const userSignOut = () => {
        signOut(auth)
    }

    return (
        <div>
            <header className="header">
            <Logo
                type={user.type}
            />
            <div className="header-nav">
                <div className={`header-nav__item ${props.where === 'post-list' ? 'active' : ''}`}>
                    <Link to={`/${props.type}/post-list`} className='header-nav__item--link'>Danh sách bài đăng</Link>
                </div>
                <div className={`header-nav__item ${props.where === 'account' ? 'active' : ''}`}>
                    <Link to={`/${props.type}/account`} className='header-nav__item--link'>{user?.name}</Link>
                    <div className="header-nav__item-dropdown">
                        <Link to='/cty/account/setting' className="header-nav__item-dropdown__item">Cài đặt tài khoản</Link>
                        <Link to='/cty/account/setting' className="header-nav__item-dropdown__item">Danh sách đã lưu</Link>
                        <Link to='/' onClick={userSignOut} className="header-nav__item-dropdown__item">Đăng xuất</Link>
                    </div>
                </div>
                <div className={`header-nav__item ${props.where === 'post' ? 'active' : ''}`}>
                    <Link to={`/${props.type}/post`} className='header-nav__item--link'>
                        <PlusSquare className='header-nav__item--icon'/>
                        Đăng bài
                    </Link>
                </div>
            </div>
        </header>
        </div>
    );
}

export default Header;
