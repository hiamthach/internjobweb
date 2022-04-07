import React, {useState, useEffect, useRef} from 'react';

import './saved-post.scss'

import Card from '../Card/Card'

import { useAuth } from '../../contexts/AuthContext'
import { db } from '../../firebase-config'
import { doc, getDoc } from 'firebase/firestore'

const SavedPost = () => {
    const { currentUser } = useAuth()

    // const [postData, setPostData] = useState(currentUser?.savePosts)

    const postData = currentUser?.savePosts
    console.log(postData)
    // useEffect(() => {
    //     console.log(currentUser)
    //     const modifyData = () => {
    //         const savedList = currentUser?.savePosts

    //         savedList?.forEach((saved) => {
    //             const reference = currentUser.type === 'cty' ? 'uni-posts' : 'cty-posts'
    //             console.log(saved)
    //             const savedRef = doc(db, reference, saved)

    //             const getSavedData = async () => {
    //                 const data = await getDoc(savedRef)
    //                 setPostData([...postData, data.data()])
    //             }
    //             getSavedData()
                
    //         })

    //     }

    //     modifyData()
    // }, []);

    // useEffect(() => console.log(postData))


    return (
        <div className='saved-post'>
            <h1 className="saved-post__title">Danh sách đã lưu</h1>

            <div className="saved-post__wrapper">
                {postData?.map((post) => <Card {...post} saved={true}/>)}
            </div>
        </div>
    );
}

export default SavedPost;
