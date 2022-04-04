import React from 'react';
import { Route, Routes, Redirect, useLocation} from 'react-router-dom'


import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage'
import ForgetPassPage from './pages/ForgetPassPage';
import SignupPage from './pages/SignupPage';
import JobInfoPage from './pages/JobInfoPage'
import UpdateInfoPage from './pages/UpdateInfoPage';

import { CtyHomePage, CtySignupPage, CtyInfoPage, CtyPostListPage, CtyAccountPage, CtyAccountSettingPage, CtyPostPage, CtyPostSettingPage } from './pages/cty/index'

import { useAuth } from './contexts/AuthContext';

const Routers = () => {
    return (
        <Routes>
            <ProtectedRoute 
                path='/'
                element={<HomePage/>}
            />
            <ProtectedRoute 
                path='/login'
                element={<LoginPage/>}
            />
            <ProtectedRoute
                path='/forgetpass'
                element={<ForgetPassPage/>}
            />
            <ProtectedRoute
                path='/signup'
                element={<SignupPage/>}
            />
            <ProtectedRoute
                path='/jobinfo'
                element={<JobInfoPage/>}
            />
            <ProtectedRoute 
                path='/update-info'
                element={<UpdateInfoPage/>}
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
            <Route 
                path='/cty/post/setting/:id'
                element={<CtyPostSettingPage/>}
            />
            {/* Cty */}
            {/* Uni */}

            {/* Uni */}
        </Routes>
    );
}

export default Routers;


function ProtectedRoute(props) {
    const {currentUser} = useAuth()
  
    const location = useLocation()
  
    const { path } = props
  
    if (path === '/login' || path === '/register' || path ==='/forgot-password' || path === '/reset-password') {
      return currentUser ? <Redirect to={location.state?.from ?? '/profile'} /> : <Route {...props} />
    }
  
    return currentUser ? <Route {...props}/> : <Redirect to={{
      pathname: '/login',
      state: {from: path}
    }}/>
  }
