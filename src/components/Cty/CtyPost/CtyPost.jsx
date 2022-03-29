import React, {useState} from 'react';

import './cty-post.scss'

import { useForm } from 'react-hook-form';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/selectors'

import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../../firebase-config'

import { useNavigate } from 'react-router-dom';

import Button from '../../Button/Button'

const CtyPost = () => {

    const navigate = useNavigate()

    const [city, setCity] = useState('Thành phố')

    const { register, handleSubmit, formState: { errors } } = useForm()

    const user = useSelector(selectUser)

    const postsRef = collection(db, "cty-posts")

    const onSubmit = (data) => {
        data.candidates = []
        data.author = user

        addDoc(postsRef, data)

        alert('Đăng bài thành công!')
        navigate('/cty/post-list')
    }

    return (
        <div className='cty-post'>
            <form className="form cty-post__form" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="form-title">Đăng tuyển thực tập</h1>
                <div className="input-wrapper">
                    <div className='input-group'>
                        <label htmlFor="">Hồ sơ mẫu sẽ được gửi đến Email <span className='input-required'>*</span></label>
                        <input type='email' className='input-group__input' {...register('email', {required : true})} id='' placeholder=''/>
                    </div>

                    <div className='input-group'>
                        <label htmlFor="">Vị trí cần tuyển <span className='input-required'>*</span></label>
                        <input type='text' className='input-group__input' {...register('position', {required : true})} id='' placeholder=''/>
                    </div>
                    <div className='input-group'>
                        <label htmlFor="">Nơi làm việc <span className='input-required'>*</span></label>
                        <input type='text' className='input-group__input' {...register('address', {required : true})} id='' placeholder=''/>
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
                            // {...register('city', {required: true})}
                        >
                            <MenuItem value='Hồ Chí Minh'>Hồ Chí Minh</MenuItem>
                            <MenuItem value='Hà Nội'>Hà Nội</MenuItem>
                            <MenuItem value='Đà Nẵng'>Đà Nẵng</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                    <div className='input-group'>
                        <label htmlFor="">Loại việc <span className='input-required'>*</span></label>
                        <div className="input-group__check">
                            <div className="input-group__check--wrap">
                                <input type="checkbox" {...register('type')} value='Full time' id='cty-post__fulltime'/>
                                <label htmlFor="cty-post__fulltime">Full time</label>
                            </div>
                            <div className="input-group__check--wrap">
                                <input type="checkbox" {...register('type')} value='Part time' id='cty-post__parttime'/>
                                <label htmlFor="cty-post__parttime">Part time</label>
                            </div>
                            <div className="input-group__check--wrap">
                                <input type="checkbox" {...register('type')} value='Remote' id='cty-post__remote'/>
                                <label htmlFor="cty-post__remote">Remote</label>
                            </div>
                        </div>
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
                        <label htmlFor="">Mô tả công việc <span className='input-required'>*</span></label>
                        <textarea name="" id="" cols="30" rows="10" {...register('description', {required : true})} className='input-group__input' ></textarea>
                    </div>
                    <div className='input-group'>
                        <label htmlFor="">Yêu cầu công việc <span className='input-required'>*</span></label>
                        <textarea name="" id="" cols="30" rows="10" {...register('requirement', {required : true})} className='input-group__input' ></textarea>
                    </div>
                    <div className='input-group'>
                        <label htmlFor="">Thông tin khác </label>
                        <textarea name="" id="" cols="30" rows="10" {...register('otherInfo')} className='input-group__input' ></textarea>
                    </div>
                    

                </div>

                <div className="form__submit">
                    <input type="submit" id='cty-post__submit'/>
                    <label htmlFor="cty-post__submit" className='form__submit--label'>
                        <Button>Đăng tuyển</Button>
                    </label>
                </div>

            </form>


        </div>
    );
}

export default CtyPost;
