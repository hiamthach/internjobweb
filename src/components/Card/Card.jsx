import React from 'react';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'

import './card.scss'
import {Clock, Bookmark, BookmarkFill} from 'react-bootstrap-icons'

import { doc, getDoc, updateDoc, addDoc, collection} from 'firebase/firestore'
import { db } from '../../firebase-config'

import Button from '../Button/Button';
import JobInfoSlice from '../../redux/Slice/JobInfoSlice'

import { useAuth } from '../../contexts/AuthContext';

const Card = (props) => {
    const { currentUser } = useAuth()

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleJobInfo = () => {
        dispatch(JobInfoSlice.actions.updateJobInfo(props))
        navigate('/jobinfo')
    }
    
    const handleApply = async () => {
        const postRef = doc(db, "cty-posts", props.id)
        const data = (await getDoc(postRef))

        const candidates = data.data().candidates

        if (!candidates.includes(currentUser.id)) {
            candidates.push(currentUser.id)
        }

        updateDoc(postRef, {...data.data(), candidates})
        
    }

    return (
        <div className="card">
            <div className="card__cty">
                <img src="https://www.fpt-software.com/wp-content/uploads/sites/2/2017/04/fpt-software-1.jpg" alt="" />
                <div className="card__cty--in4">
                    <h4 onClick={() => {
                        handleJobInfo()
                    }}>{props.position ? props.position : `Học kỳ thực tập ${props.author.name}`}</h4>
                    <h6>{props.author.name}</h6>
                </div>
            </div>
            <ul className="card__tags">
                {props.type?.map((type, index) => <li key={index}>{type}</li>)}
                
                <li>{props.address ? props.address : props.author.address}</li>
            </ul>
            <p className="card__days">
                <Clock className='card__days--icon'/>
                {props.start} - {props.end}
            </p>
            <div className="card__apply" onClick={handleApply}>
                <Button>Ứng tuyển ngay</Button>
            </div>
            <div className="card__mark">
                <Bookmark className='card__mark--icon'/>
                <BookmarkFill className='card__mark--icon'/>
            </div>  
        </div>
    );
}

export default Card;
