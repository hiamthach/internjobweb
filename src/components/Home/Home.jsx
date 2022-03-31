import React, {useState, useEffect} from 'react';

import Header from '../Header/Header'
import HomeHeader from '../HomeHeader/HomeHeader';
import SearchJob from '../SearchJob/SearchJob';
import Filters from '../Filters/Filters';
import JobList from '../JobList/JobList'

import { useNavigate } from 'react-router-dom';

import { db, auth } from '../../firebase-config'
import { collection, doc, getDocs, query, where } from 'firebase/firestore'
import { onAuthStateChanged, updateCurrentUser } from 'firebase/auth';

import { useSelector, useDispatch } from 'react-redux';
import { selectUserAuth} from '../../redux/selectors'
import CtyPostSlice from '../../redux/Slice/CtyPostSlice';
import UserAuthSlice from '../../redux/Slice/UserAuthSlice';
import UsersSlice from '../../redux/Slice/UsersSlice';

import './home.scss';
import { stringify } from '@firebase/util';

const Home = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [users, setUsers] = useState()
    const [userAuth, setUserAuth] = useState('')

    const usersRef = collection(db, "users")

    useEffect(() => {
        const getUser = async () => {
            const data = await getDocs(usersRef)
            setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }

        getUser()
        
    }, []);

    onAuthStateChanged(auth, (currentUser) => {
        setUserAuth(currentUser.email)
        if (currentUser) {
            const userLogin = users.filter((user) => user.email === currentUser.email)
            dispatch(UsersSlice.actions.updateUsers(userLogin[0]))
            navigate(`/${userLogin[0].type}`)
        }
    })

    const userEmail = stringify(userAuth)
    console.log(userEmail)
    dispatch(UserAuthSlice.actions.updateUserAuth(userEmail))

    return (
        <div className="home">
            <HomeHeader/>

            <SearchJob/>
            <div className="main">
                <div className="col-4">
                    <Filters/>
                </div>
                <div className="col-8">
                    <JobList/>
                </div>
            </div>
            
        </div>
    );
}

export default Home;
