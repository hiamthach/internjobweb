import React from 'react';
import './post-item.scss';

import {Building} from 'react-bootstrap-icons'

import PostItemFoot from './PostItemFoot/PostItemFoot';


const PostItem = (props) => {



    return (
        <div className={`post-item ${props.status}`}>
            <div className="post-item__content">
                <h4 className="post-item__status">{props.status ? 'Đã đóng' : 'Đang xem xét'}</h4>

                <h3 className="post-item__title">ReactJS Intern</h3>
                <div className="post-item__info">
                    <div className='post-item__info--box'>
                        <Building className='post-item__info--icon'/>
                    </div>
                    <div className="post-item__info--wrap">
                        <h5>Công ty ABC</h5>
                        <p>Thủ Đức, Thành phố Hồ Chí Minh</p>
                    </div>

                </div>
                <h6 className="post-item__amount">Số lượng: <span>10</span></h6>
                <div className="post-item__time">
                    <span className="post-item__start">15/03/2022 </span>
                    -
                    <span className="post-item__end"> 15/04/2022</span>
                </div>
            </div>
            <PostItemFoot
                status={props.status}
            />
        </div>
    );
}

export default PostItem;
