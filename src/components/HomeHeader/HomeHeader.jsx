import React from 'react';

import './home-header.scss'

import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';

const HomeHeader = () => {
    return (
        <header class="home-header">
            <Logo/>
            <div class="home-header-nav">
                <div class="home-header-nav__item">
                    <Link to='/cty'>Doanh nghiệp</Link>
                </div>
                <div class="home-header-nav__item">
                    <Link to='/uni'>Trường Đại học / Cao đẳng</Link>
                </div>
            </div>
            <div class="home-header-btns">
                <Link to='/login'>
                    <button class="home-header-btns__login">đăng nhập</button>
                </Link>
                <Link to='/signup'>
                    <Button>đăng ký</Button>
                </Link>
            </div>
        </header>
    );
}

export default HomeHeader;
