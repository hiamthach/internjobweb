import React, {useEffect, useState} from 'react';

import './job-list.scss'

import JobCard from '../JobCard/JobCard';

import { db } from '../../firebase-config'
import { collection, getDocs } from 'firebase/firestore'

import CtyPostSlice from '../../redux/Slice/CtyPostSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectCtyPostList } from '../../redux/selectors';

const JobList = (props) => {

    const dispatch = useDispatch()

    const [ctyPost, setCtyPost] = useState([])
    
    useEffect(() => {
        const ctyPostRef = collection(db, "cty-posts")
        const getCtyPost = async () => {
            const data = await getDocs(ctyPostRef)
            setCtyPost(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }

        getCtyPost()
        
    }, []);
    console.log(ctyPost)
    dispatch(CtyPostSlice.actions.updatePosts(ctyPost))

    return (
        <div className="job-list">
            <h1 className="job-list__result">
                <span>{ctyPost?.length} </span>
                kết quả tìm kiếm
            </h1>

            {
                ctyPost?.map((job, index) => {
                    return <JobCard {...job} key={index}/>
                })
            }
        </div>
    );
}

export default JobList;
