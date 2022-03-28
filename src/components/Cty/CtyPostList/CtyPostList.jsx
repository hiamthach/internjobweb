import React from 'react';
import {Link} from 'react-router-dom'

import Button from '../../Button/Button';
import ButtonArrow from '../../ButtonArrow/ButtonArrow'
import PostItem from '../../PostItem/PostItem';

import './cty-post-list.scss'

const CtyPostlist = () => {
    return (
        <div className='cty-post-list'>
            <div className="cty-post-list__head">
                <Link to='/cty/post'>
                    <Button>Đăng bài</Button>
                </Link>
            </div>

            <div className="cty-post-list__wrap">
                <PostItem/>
                <PostItem
                    status='closed'
                />
            </div>

            <Link to='/cty'>
                <ButtonArrow direction='left'>Trở về trang chủ</ButtonArrow>
            </Link>
        </div>
    );
}

export default CtyPostlist;
