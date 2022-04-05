import React, {useState} from 'react';

import './uni-post.scss'

import { useForm } from 'react-hook-form';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/selectors'

import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../../firebase-config'

import { useNavigate } from 'react-router-dom';

import Button from '../../Button/Button'

import { useAuth } from '../../../contexts/AuthContext';

const UniPost = () => {

    const { currentUser } = useAuth()

    const navigate = useNavigate()

    const [city, setCity] = useState('Thành phố')

    const { register, handleSubmit, formState: { errors } } = useForm()

    const user = useSelector(selectUser)

    const postsRef = collection(db, "uni-posts")

    const today = new Date()

    const formatDay = (string) => {
        const list = string.split('-')

        return list[2] + '/' + list[1] + '/' + list[0]
    }

    const onSubmit = (data) => {
        data.candidates = []
        data.author = currentUser
        data.start = ("0" + today.getDate()).slice(-2) + '/' + ("0" + (today.getMonth() + 1)).slice(-2) + '/' + today.getFullYear() 
        data.end = formatDay(data.deadline)

        addDoc(postsRef, data)
        alert('Đăng bài thành công!')
        navigate('/post-list')
    }

    return (
        <div className='uni-post'>
            <form className="form uni-post__form" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="form-title">Đăng thông tin kì thực tập</h1>
                <div className="input-wrapper">
                    <div className='input-group'>
                        <label htmlFor="">Hồ sơ mẫu sẽ được gửi đến Email <span className='input-required'>*</span></label>
                        <input type='email' className='input-group__input' {...register('email', {required : true})} id='' placeholder=''/>
                    </div>

                    <div className="input-group">
                    <FormControl>
                        <InputLabel id="sign-up__city">Thành phố</InputLabel>
                        <Select
                            labelId="sign-up__city"
                            id="sign-up__select-city"
                            value={city}
                            label="Thành phố"
                            onChange={(e) => {
                                setCity(e.target.value)
                            }}
                        >
                            <MenuItem value='Hồ Chí Minh'>Hồ Chí Minh</MenuItem>
                            <MenuItem value='Hà Nội'>Hà Nội</MenuItem>
                            <MenuItem value='Đà Nẵng'>Đà Nẵng</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                    <div className='input-group'>
                        <label htmlFor="">Số lượng <span className='input-required'>*</span></label>
                        <input type='number' className='input-group__input' {...register('amount', {required : true, min: 1})}  id='' placeholder=''/>
                    </div>

                    <div className='input-group'>
                        <label htmlFor="">Hạn chót nộp hồ sơ <span className='input-required'>*</span></label>
                        <input type='date' className='input-group__input' {...register('deadline', {required : true})} id='' placeholder=''/>
                    </div>

                    <div className='input-group'>
                        <label htmlFor="">Mô tả đợt thực tập <span className='input-required'>*</span></label>
                        <textarea name="" id="" cols="30" rows="10" {...register('description', {required : true})} className='input-group__input' ></textarea>
                    </div>
                    <div className='input-group'>
                        <label htmlFor="">Thông tin khác </label>
                        <textarea name="" id="" cols="30" rows="10" {...register('otherInfo')} className='input-group__input' ></textarea>
                    </div>
                    

                </div>

                <div className="form__submit">
                    <input type="submit" id='uni-post__submit'/>
                    <label htmlFor="uni-post__submit" className='form__submit--label'>
                        <Button>Đăng tin</Button>
                    </label>
                </div>

            </form>


        </div>
    );
}

export default UniPost;
