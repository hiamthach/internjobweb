import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import {Clock, Bookmark, BookmarkFill} from 'react-bootstrap-icons'

import Button from '../Button/Button';

import './job-card.scss'
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase-config'

const JobCard = (props) => {

    return (
        <div className="job-card">
            <div className="job-card__cty">
                <img src="https://www.fpt-software.com/wp-content/uploads/sites/2/2017/04/fpt-software-1.jpg" alt="" />
                <div className="job-card__cty--in4">
                    <h4>{props.position}</h4>
                    <h6>{props.author.name}</h6>
                </div>
            </div>
            <ul className="job-card__tags">
                {props.type.map((type) => <li>{type}</li>)}
                
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
