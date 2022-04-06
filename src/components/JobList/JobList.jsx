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
    
    const [Post, setPost] = useState([])
    const [savedPost, setSavedPost] = useState([])

    useEffect(()=> {
        console.log(currentUser?.savePosts)
        setSavedPost(currentUser?.savePosts)
    }, [currentUser])
    
    useEffect(() => {
        const reference = currentUser?.type === 'cty' ? 'uni-posts' : 'cty-posts' 
        const PostRef = collection(db, reference)
        const getPost = async () => {
            const data = await getDocs(PostRef)
            setPost(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }

        getPost()
        
    }, [currentUser]);
    dispatch(CtyPostSlice.actions.updatePosts(Post))

    return (
        <div className="job-list">
            <h1 className="job-list__result">
                <span>{Post?.length} </span>
                kết quả tìm kiếm
            </h1>

            {
                Post?.map((job, index) => {
                    return <Card {...job} key={index} saved={savedPost?.includes(job.id) ? true : false}/>
                })
            }
        </div>
    );
}

export default JobList;
