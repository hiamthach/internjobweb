import React, {useState} from 'react';

import './post.scss'

import { useForm } from 'react-hook-form';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../firebase-config'

import { useNavigate } from 'react-router-dom';

import Button from '../Button/Button'
import CtyPost from './CtyPost/CtyPost';
import UniPost from './UniPost/UniPost'

import { useAuth } from '../../contexts/AuthContext';

const Post = () => {

    const { currentUser } = useAuth()

    return (
        <div className='post'>
            {currentUser.type === 'uni' ? <UniPost/> : <CtyPost/> }
        </div>
    );
}

export default Post;
