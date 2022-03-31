import React from 'react';

import { Link, useNavigate } from 'react-router-dom';


import './post-item-foot.scss'

import { Person, PencilSquare, DoorClosed, X} from 'react-bootstrap-icons'
import { Repeat } from '@mui/icons-material';

import { useDispatch } from 'react-redux';
import CtyPostSettingSlice from '../../../redux/Slice/CtyPostSettingSlice';

const PostItemFoot = (props) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handlePostSetting = () => {
        dispatch(CtyPostSettingSlice.actions.updatePostSetting({...props}))
        navigate(`/cty/post/setting/${props.id}`)
    }

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
                        <p onClick={handlePostSetting}>Chỉnh sửa</p>
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
                <p>{props.candidates.length} Ứng viên</p>
            </div>

            {
                setFooter(props.status)
            }
            
        </div>
    );
}

export default PostItemFoot;
