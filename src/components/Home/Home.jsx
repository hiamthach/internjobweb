import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../Logo/Logo';
import Button from '../Button/Button'
import SearchJob from '../SearchJob/SearchJob';
import './home.scss';

const Home = () => {
    return (
        <div className="home">
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

            <SearchJob/>
        </div>
    );
}

export default Home;
