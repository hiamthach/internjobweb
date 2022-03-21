import React from 'react';

import Logo from '../components/Logo/Logo';
import Button from '../components/Button/Button';

const HomePage = () => {
    return (
        <div className='container'>
            <Logo/>
            <Button text='Đăng nhập'/>
        </div>
    );
}

export default HomePage;
