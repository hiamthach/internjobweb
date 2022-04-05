import React from 'react';

import Post from '../components/Post/Post'
import Header from '../components/Header/Header';

const PostPage = () => {
    return (
        <div className='container'>
            <Header
                where='post'
            />

           <Post/> 
        </div>
    );
}

export default PostPage;
