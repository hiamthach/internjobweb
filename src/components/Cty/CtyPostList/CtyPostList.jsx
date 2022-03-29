import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'

import Button from '../../Button/Button';
import ButtonArrow from '../../ButtonArrow/ButtonArrow'
import PostItem from '../../PostItem/PostItem';

import { db } from '../../../firebase-config'
import { collection, getDocs } from 'firebase/firestore'

import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/selectors'

import './cty-post-list.scss'

const CtyPostlist = () => {
    const postsRef = collection(db, "cty-posts")
    const user = useSelector(selectUser)
    const [postList, setPostList] = useState([])

    useEffect(() => {
        const getPostList = async () => {
            const data = await getDocs(postsRef)
            setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id})).filter((post) => post.author.email === user.email))
        }

        getPostList()
    }, []);

    return (
        <div className='cty-post-list'>
            <div className="cty-post-list__head">
                <Link to='/cty/post'>
                    <Button>Đăng bài</Button>
                </Link>
            </div>

            <div className="cty-post-list__wrap">
                {postList.map((post, index) => {
                    return <PostItem key={index} {...post}/>
                })}
            </div>

            <Link to='/cty'>
                <ButtonArrow direction='left'>Trở về trang chủ</ButtonArrow>
            </Link>
        </div>
    );
}

export default CtyPostlist;
