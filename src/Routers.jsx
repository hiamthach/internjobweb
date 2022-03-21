import React from 'react';
import { Route, Routes} from 'react-router-dom'


import HomePage from './pages/HomePage';
import Login from './pages/Login'

import { CtyHome, CtySignup, CtyInfo, CtyPostList, CtyAccount, CtyAccountSetting, CtyPost } from './pages/cty/index'

const Routers = () => {
    return (
        <Routes>
            <Route 
                path='/'
                element={<HomePage/>}
            />
            <Route 
                path='/login'
                element={<Login/>}
            />

            {/* Cty */}
            <Route 
                path='/cty'
                element={<CtyHome/>}
            />
            <Route 
                path='/cty/signup'
                element={<CtySignup/>}
            />
            <Route 
                path='/cty/info'
                element={<CtyInfo/>}
            />
            <Route 
                path='/cty/post-list'
                element={<CtyPostList/>}
            />
            <Route 
                path='/cty/account'
                element={<CtyAccount/>}
            />
            <Route 
                path='/cty/account/setting'
                element={<CtyAccountSetting/>}
            />
            <Route 
                path='/cty/post'
                element={<CtyPost/>}
            />
            {/* Cty */}

            {/* Uni */}
            
            {/* Uni */}
        </Routes>
    );
}

export default Routers;
