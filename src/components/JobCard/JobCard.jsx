import React from 'react';

import { Link } from 'react-router-dom';

import {Clock, Bookmark, BookmarkFill} from 'react-bootstrap-icons'

import Button from '../Button/Button';

import './job-card.scss'

const JobCard = (props) => {
    return (
        <Link to='/jobinfo' className="job-card">
            <div className="job-card__cty">
                <img src="https://www.fpt-software.com/wp-content/uploads/sites/2/2017/04/fpt-software-1.jpg" alt="" />
                <div className="job-card__cty--in4">
                    <h4>ReactJS Intern</h4>
                    <h6>Công ty ABC</h6>
                </div>
            </div>
            <ul className="job-card__tags">
                <li>Full time</li>
                <li>Thủ Đức, Thành phố Hồ Chí Minh</li>
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
        </Link>
    );
}

export default JobCard;
