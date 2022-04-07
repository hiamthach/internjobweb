import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './header.scss'

import {PlusSquare, List, XLg} from 'react-bootstrap-icons'

import Logo from '../Logo/Logo';
import HomeHeader from '../HomeHeader/HomeHeader'

import { useAuth } from '../../contexts/AuthContext';

const Header = (props) => {

    const { currentUser, signOut } = useAuth()

    const [openNav, setOpenNav] = useState(false)

    useEffect(() => {
        console.log(openNav)
    }, [openNav]);

    const setHeader = (currentUser) => {

        if(currentUser) {
            return (
                <header className={`header ${openNav ? 'open' : ''}`}>
                    <Logo
                        type={currentUser.type}
                    />
                    <div className={`header-nav`}>
                        <div className={`header-nav__item ${props.where === 'post-list' ? 'active' : ''}`}>
                            <Link to={`/post-list`} className='header-nav__item--link'>Danh sách bài đăng</Link>
                        </div>
                        <div className={`header-nav__item ${props.where === 'account' ? 'active' : ''}`}>
                            <Link to={`/account`} className='header-nav__item--link'>{currentUser?.name}</Link>
                            <div className="header-nav__item-dropdown">
                                <Link to='/account/setting' className="header-nav__item-dropdown__item">Cài đặt tài khoản</Link>
                                <Link to='/post/saved' className="header-nav__item-dropdown__item">Danh sách đã lưu</Link>
                                <Link to='/login' onClick={signOut} className="header-nav__item-dropdown__item">Đăng xuất</Link>
                            </div>
                        </div>
                        <div className={`header-nav__item ${props.where === 'post' ? 'active' : ''}`}>
                            <Link to={`/post`} className='header-nav__item--link'>
                                <PlusSquare className='header-nav__item--icon'/>
                                Đăng bài
                            </Link>
                        </div>

                        <div className="header-nav__close" onClick={() => setOpenNav(false)}>
                            <XLg className='header-nav__close--icon'/>
                        </div>
                    </div>

                    <div className="header-toggle" onClick={() => setOpenNav(true)}>
                        <List className='header-toggle__icon'/>
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
