import React, {useState, useEffect} from 'react';

import './saved-post.scss'

import Card from '../Card/Card'

import { useAuth } from '../../contexts/AuthContext'
import { db } from '../../firebase-config'
import { doc, getDoc, collection } from 'firebase/firestore'

const SavedPost = () => {
    const { currentUser } = useAuth()

    const [postData, setPostData] = useState([])

    useEffect(() => {
        const modifyData = () => {
            const savedList = currentUser.savePosts

            savedList?.map((saved) => {
                const reference = currentUser.type === 'cty' ? 'uni-posts' : 'cty-posts'
                
                const savedRef = doc(db, reference, saved)

                const getSavedData = async () => {
                    const data = await getDoc(savedRef)
                    setPostData([...postData, data.data()])
                }

                return getSavedData()
            })

        }

        modifyData()
        return () => {
            modifyData()
        };
    }, []);

    return (
        <div className='saved-post'>
            <h1 className="saved-post__title">Danh sách đã lưu</h1>

            <div className="saved-post__wrapper">
                {postData.map((post) => <Card {...post}/>)}
            </div>
        </div>
    );
}

export default SavedPost;
