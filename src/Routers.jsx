import React from 'react';
import { Route, Routes, useLocation, Navigate} from 'react-router-dom'


import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage'
import ForgetPassPage from './pages/ForgetPassPage';
import SignupPage from './pages/SignupPage';
import JobInfoPage from './pages/JobInfoPage'
import UpdateInfoPage from './pages/UpdateInfoPage';
import PostListPage from './pages/PostListPage';
import AccountPage from './pages/AccountPage'
import AccountSettingPage from './pages/AccountSettingPage';
import PostPage from './pages/PostPage'
import PostSettingPage from './pages/PostSettingPage';
import CandidatesPage from './pages/CandidatesPage';
import SavedPostPage from './pages/SavedPostPage'

import { useAuth } from './contexts/AuthContext';

const Routers = () => {
    return (
        <Routes>
            <Route 
                path='/'
                element={
                        <HomePage/>
                    }
            />
            <Route 
                path='/login'
                element={
                    <LoginPage/>
                }
            />
            <Route
                path='/forgetpass'
                element={
                    <ForgetPassPage/>
                }
            />
            <Route
                path='/signup'
                element={
                    <SignupPage/>
                }
            />
            <Route
                path='/jobinfo'
                element={<JobInfoPage/>}
            />
            <Route 
                path='/update-info'
                element={<UpdateInfoPage/>}
            />

            <Route
                path='/account'
                element={<AccountPage/>}
            />

            <Route 
                path='/account/setting'
                element={<AccountSettingPage/>}
            />

            <Route
                path='/post-list'
                element={<PostListPage/>}
            />

            <Route 
                path='/post'
                element={<PostPage/>}
            />

            <Route 
                path='/post/saved'
                element={<SavedPostPage/>}
            />

            <Route 
                path='/post/setting/:id'
                element={<PostSettingPage/>}
            />

            <Route
                path='/post/candidates/:id'
                element={<CandidatesPage/>}
            />
            
        </Routes>
    );
}

export default Routers;


function ProtectedRoute(props) {
    const {currentUser} = useAuth()
  
    const location = useLocation()
  
    const { path } = props
  
    if (path === '/login' || path === '/signup' || path ==='/forgetpass' || path === '/reset-password') {
      if (currentUser) {
       return <Navigate to={location.state?.from ?? '/'} replace />
        }
    }
  
    if (!currentUser) {
    return <Navigate to={{
            pathname: '/login',
            state: {from: path}
            }} replace/>
    }
  }
