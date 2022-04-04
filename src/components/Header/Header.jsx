import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss'

import {PlusSquare} from 'react-bootstrap-icons'

import Logo from '../Logo/Logo';
import HomeHeader from '../HomeHeader/HomeHeader'

import { useAuth } from '../../contexts/AuthContext';

const Header = (props) => {

    const { currentUser, signOut } = useAuth()

    const userSignOut = () => {
        signOut()
    }

    const setHeader = (currentUser) => {

        if(currentUser) {
            return (
                <header className="header">
                    <Logo
                        type={currentUser.type}
                    />
                    <div className="header-nav">
                        <div className={`header-nav__item ${props.where === 'post-list' ? 'active' : ''}`}>
                            <Link to={`/${currentUser.type}/post-list`} className='header-nav__item--link'>Danh sách bài đăng</Link>
                        </div>
                        <div className={`header-nav__item ${props.where === 'account' ? 'active' : ''}`}>
                            <Link to={`/${currentUser.type}/account`} className='header-nav__item--link'>{currentUser?.name}</Link>
                            <div className="header-nav__item-dropdown">
                                <Link to='/cty/account/setting' className="header-nav__item-dropdown__item">Cài đặt tài khoản</Link>
                                <Link to='/cty/account/setting' className="header-nav__item-dropdown__item">Danh sách đã lưu</Link>
                                <Link to='/login' onClick={userSignOut} className="header-nav__item-dropdown__item">Đăng xuất</Link>
                            </div>
                        </div>
                        <div className={`header-nav__item ${props.where === 'post' ? 'active' : ''}`}>
                            <Link to={`/${currentUser.type}/post`} className='header-nav__item--link'>
                                <PlusSquare className='header-nav__item--icon'/>
                                Đăng bài
                            </Link>
                        </div>
                    </div>
                </header>
            )
        } else {
            return <HomeHeader/>
        }


    }

    return (
        <>
          {setHeader(currentUser)}  
        </>
    );
}

export default Header;
