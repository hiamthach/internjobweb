import React from 'react';
import './post-item.scss';

import {Building} from 'react-bootstrap-icons'

import PostItemFoot from './PostItemFoot/PostItemFoot';


const PostItem = (props) => {

    return (
        <div className={`post-item ${props.status}`}>
            <div className="post-item__content">
                <h4 className="post-item__status">{props.status ? 'Đã đóng' : 'Đang xem xét'}</h4>

                <h3 className="post-item__title">{props.position}</h3>
                <div className="post-item__info">
                    <div className='post-item__info--box'>
                        <Building className='post-item__info--icon'/>
                    </div>
                    <div className="post-item__info--wrap">
                        <h5>{props.author.name}</h5>
                        <p>{props.author.address}</p>
                    </div>

                </div>
                <h6 className="post-item__amount">Số lượng: <span>{props.amount}</span></h6>
                <div className="post-item__time">
                    <span className="post-item__start">{props.start} </span>
                    -
                    <span className="post-item__end"> {props.end}</span>
                </div>
            </div>
            <PostItemFoot
                {...props}
            />
        </div>
    );
}

export default PostItem;
