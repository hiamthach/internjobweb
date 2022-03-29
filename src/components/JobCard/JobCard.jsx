import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'

import './job-card.scss'
import {Clock, Bookmark, BookmarkFill} from 'react-bootstrap-icons'

import Button from '../Button/Button';
import JobInfoSlice from '../../redux/Slice/JobInfoSlice'

const JobCard = (props) => {


    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleJobInfo = () => {
        dispatch(JobInfoSlice.actions.updateJobInfo(props))
        navigate('/jobinfo')
    }

    return (
        <div className="job-card">
            <div className="job-card__cty">
                <img src="https://www.fpt-software.com/wp-content/uploads/sites/2/2017/04/fpt-software-1.jpg" alt="" />
                <div className="job-card__cty--in4">
                    <h4 onClick={() => {
                        handleJobInfo()
                    }}>{props.position}</h4>
                    <h6>{props.author.name}</h6>
                </div>
            </div>
            <ul className="job-card__tags">
                {props.type.map((type, index) => <li key={index}>{type}</li>)}
                
                <li>{props.address}</li>
            </ul>
            <p className="job-card__days">
                <Clock className='job-card__days--icon'/>
                4 ngày trước
            </p>
            <div className="job-card__apply">
                <Button>Ứng tuyển ngay</Button>
            </div>
            <div className="job-card__mark">
                <Bookmark className='job-card__mark--icon'/>
                <BookmarkFill className='job-card__mark--icon'/>
            </div>  
        </div>
    );
}

export default JobCard;
