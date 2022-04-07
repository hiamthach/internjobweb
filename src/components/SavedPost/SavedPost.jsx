import React, {useState, useEffect, useRef} from 'react';

import './saved-post.scss'

import Saveditem from './SavedItem/SavedItem';

import { useAuth } from '../../contexts/AuthContext'

const SavedPost = () => {
    const { currentUser } = useAuth()

    const postData = currentUser?.savePosts

    const reference = currentUser?.type === 'cty' ? 'uni-posts' : 'cty-posts'
    console.log(reference)

    return (
        <div className='saved-post'>
            <h1 className="saved-post__title">Danh sách đã lưu</h1>

            <div className="saved-post__wrapper">
                {postData?.map((post) => <Saveditem id={post} reference={reference} key={post} saved={true}/>)}
            </div>
        </div>
    );
}

export default SavedPost;
