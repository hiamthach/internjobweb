import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'

import Button from '../Button/Button';
import ButtonArrow from '../ButtonArrow/ButtonArrow'
import PostItem from '../PostItem/PostItem';

import { db } from '../../firebase-config'
import { collection, getDocs } from 'firebase/firestore'

import { useAuth } from '../../contexts/AuthContext';

import './post-list.scss'

const PostList = () => {
    const { currentUser } = useAuth()

    const reference = currentUser?.type === 'cty' ? "cty-posts" : "uni-posts"
    const postsRef = collection(db, reference)


    const [postList, setPostList] = useState([])

    useEffect(() => {
        const getPostList = async () => {
            const data = await getDocs(postsRef)
            setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id})).filter((post) => post.author.email === currentUser?.email))
        }

        getPostList()

    }, [currentUser]);

    return (
        <div className='post-list'>
            <div className="post-list__head">
                <Link to='/post'>
                    <Button>Đăng bài</Button>
                </Link>
            </div>

            <div className="post-list__wrap">
                {postList.map((post, index) => {
                    return <PostItem key={index} {...post}/>
                })}
            </div>

            <Link to='/'>
                <ButtonArrow direction='left'>Trở về trang chủ</ButtonArrow>
            </Link>
        </div>
    );
}

export default PostList;

