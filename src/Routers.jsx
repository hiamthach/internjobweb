import React from 'react';
import { Route, Routes} from 'react-router-dom'


import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage'
import ForgetPassPage from './pages/ForgetPassPage';
import SignupPage from './pages/SignupPage';
import JobInfoPage from './pages/JobInfoPage'

import { CtyHomePage, CtySignupPage, CtyInfoPage, CtyPostListPage, CtyAccountPage, CtyAccountSettingPage, CtyPostPage } from './pages/cty/index'

const Routers = () => {
    return (
        <Routes>
            <Route 
                path='/'
                element={<HomePage/>}
            />
            <Route 
                path='/login'
                element={<LoginPage/>}
            />
            <Route
                path='/forgetpass'
                element={<ForgetPassPage/>}
            />
            <Route
                path='/signup'
                element={<SignupPage/>}
            />
            <Route
                path='/jobinfo'
                element={<JobInfoPage/>}
            />
            

            {/* Cty */}
            <Route 
                path='/cty'
                element={<CtyHomePage/>}
            />
            <Route 
                path='/cty/signup'
                element={<CtySignupPage/>}
            />
            <Route 
                path='/cty/info/:id'
                element={<CtyInfoPage/>}
            />
            <Route 
                path='/cty/post-list'
                element={<CtyPostListPage/>}
            />
            <Route 
                path='/cty/account'
                element={<CtyAccountPage/>}
            />
            <Route 
                path='/cty/account/setting'
                element={<CtyAccountSettingPage/>}
            />
            <Route 
                path='/cty/post'
                element={<CtyPostPage/>}
            />
            {/* Cty */}
            {/* Uni */}

            {/* Uni */}
        </Routes>
    );
}

export default Routers;
