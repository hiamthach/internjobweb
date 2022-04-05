import React, {useEffect, useState} from 'react';

import './job-list.scss'

import Card from '../Card/Card';

import { db } from '../../firebase-config'
import { collection, getDocs } from 'firebase/firestore'

import CtyPostSlice from '../../redux/Slice/CtyPostSlice';
import { useDispatch } from 'react-redux';

import { useAuth } from '../../contexts/AuthContext'

const JobList = (props) => {

    const { currentUser } = useAuth()
    const dispatch = useDispatch()
    
    const [ctyPost, setCtyPost] = useState([])
    
    useEffect(() => {
        const reference = currentUser?.type === 'cty' ? 'uni-posts' : 'cty-posts' 
        const ctyPostRef = collection(db, reference)
        const getCtyPost = async () => {
            const data = await getDocs(ctyPostRef)
            setCtyPost(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }

        getCtyPost()
        
    }, [currentUser]);
    dispatch(CtyPostSlice.actions.updatePosts(ctyPost))

    return (
        <div className="job-list">
            <h1 className="job-list__result">
                <span>{ctyPost?.length} </span>
                kết quả tìm kiếm
            </h1>

            {
                ctyPost?.map((job, index) => {
                    return <Card {...job} key={index}/>
                })
            }
        </div>
    );
}

export default JobList;
