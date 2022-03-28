import React from 'react';

import { Link } from 'react-router-dom';


import './post-item-foot.scss'

import { Person, PencilSquare, DoorClosed, X} from 'react-bootstrap-icons'
import { Repeat } from '@mui/icons-material';

const PostItemFoot = (props) => {

    const setFooter = (status) => {
        if (status === 'closed') {
            return (
                <>
                    <div className="post-item-foot__wrap">
                        <Repeat className="post-item-foot__wrap--icon"/>
                        <p>Đăng lại</p>
                    </div>
                    <div className="post-item-foot__wrap">
                        <X className="post-item-foot__wrap--icon"/>
                        <p>Xóa bài</p>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div className="post-item-foot__wrap">
                        <PencilSquare className="post-item-foot__wrap--icon"/>
                        <p>Chỉnh sửa</p>
                    </div>
                    <div className="post-item-foot__wrap">
                        <DoorClosed className="post-item-foot__wrap--icon"/>
                        <p>Đóng việc</p>
                    </div>
                </>
            )
        }
    }

    return (
        <div className='post-item-foot'>
            <div className="post-item-foot__wrap">
                <Person className="post-item-foot__wrap--icon"/>
                <p>0 Ứng viên</p>
            </div>

            {
                setFooter(props.status)
            }
            
        </div>
    );
}

export default PostItemFoot;
