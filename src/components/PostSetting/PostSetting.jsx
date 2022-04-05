import React, {useState} from 'react';

import '../Post/post.scss'

import { useForm } from 'react-hook-form';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

import { useSelector } from 'react-redux';
import { selectUser, selectPostSetting } from '../../redux/selectors'

import { collection, updateDoc, doc } from 'firebase/firestore'
import { db } from '../../firebase-config'

import { useNavigate } from 'react-router-dom';

import Button from '../Button/Button'

const PostSetting = () => {

    const navigate = useNavigate()

    const postSetting = useSelector(selectPostSetting)
    console.log(postSetting)

    const [city, setCity] = useState(postSetting.city)

    const { register, handleSubmit, formState: { errors } } = useForm()

    const user = useSelector(selectUser)

    const postsRef = collection(db, "cty-posts")

    const onSubmit = (data) => {
        data.candidates = postSetting.candidates
        data.author = postSetting.author
        console.log(data)
        updateDoc(doc(db, "cty-posts", postSetting.id), data)

        alert('Cập nhật thành công')
        navigate('/post-list')
    }

    return (
        <div className='post'>
            <form className="form post__form" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="form-title">Cập nhật bài đăng</h1>
                <div className="input-wrapper">
                    <div className='input-group'>
                        <label htmlFor="">Hồ sơ mẫu sẽ được gửi đến Email <span className='input-required'>*</span></label>
                        <input type='email' className='input-group__input' defaultValue={postSetting.email} {...register('email', {required : true})} id='' placeholder=''/>
                    </div>

                    <div className='input-group'>
                        <label htmlFor="">Vị trí cần tuyển <span className='input-required'>*</span></label>
                        <input type='text' className='input-group__input' defaultValue={postSetting.position} {...register('position', {required : true})} id='' placeholder=''/>
                    </div>
                    <div className='input-group'>
                        <label htmlFor="">Nơi làm việc <span className='input-required'>*</span></label>
                        <input type='text' className='input-group__input' defaultValue={postSetting.address} {...register('address', {required : true})} id='' placeholder=''/>
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
                                <input type="checkbox" {...register('type')} value='Full time' id='post__fulltime'/>
                                <label htmlFor="post__fulltime">Full time</label>
                            </div>
                            <div className="input-group__check--wrap">
                                <input type="checkbox" {...register('type')} value='Part time' id='post__parttime'/>
                                <label htmlFor="post__parttime">Part time</label>
                            </div>
                            <div className="input-group__check--wrap">
                                <input type="checkbox" {...register('type')} value='Remote' id='post__remote'/>
                                <label htmlFor="post__remote">Remote</label>
                            </div>
                        </div>
                    </div>

                    <div className='input-group'>
                        <label htmlFor="">Số lượng <span className='input-required'>*</span></label>
                        <input type='number' className='input-group__input' defaultValue={postSetting.amount} {...register('amount', {required : true, min: 1})}  id='' placeholder=''/>
                    </div>

                    <div className='input-group'>
                        <label htmlFor="">Hạn chót nộp hồ sơ <span className='input-required'>*</span></label>
                        <input type='date' className='input-group__input' defaultValue={postSetting.deadline} {...register('deadline', {required : true})} id='' placeholder=''/>
                    </div>

                    <div className='input-group'>
                        <label htmlFor="">Mô tả công việc <span className='input-required'>*</span></label>
                        <textarea name="" id="" cols="30" rows="10" defaultValue={postSetting.description} {...register('description', {required : true})} className='input-group__input' ></textarea>
                    </div>
                    <div className='input-group'>
                        <label htmlFor="">Yêu cầu công việc <span className='input-required'>*</span></label>
                        <textarea name="" id="" cols="30" rows="10" defaultValue={postSetting.requirement} {...register('requirement', {required : true})} className='input-group__input' ></textarea>
                    </div>
                    <div className='input-group'>
                        <label htmlFor="">Thông tin khác </label>
                        <textarea name="" id="" cols="30" rows="10" defaultValue={postSetting.otherInfo} {...register('otherInfo')} className='input-group__input' ></textarea>
                    </div>
                    

                </div>

                <div className="form__submit">
                    <input type="submit" id='post__submit'/>
                    <label htmlFor="post__submit" className='form__submit--label'>
                        <Button>Cập nhật bài đăng</Button>
                    </label>
                </div>

            </form>


        </div>
    );
}

export default PostSetting;

