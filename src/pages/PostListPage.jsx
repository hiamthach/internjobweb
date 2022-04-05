import React from 'react';

import PostList from '../components/PostList/PostList';
import Header from '../components/Header/Header';


const PostListPage = () => {
    return (
        <div className='container'>
            <Header
                where='post-list'
            />
            <PostList/> 
        </div>
    );
}

export default PostListPage;
