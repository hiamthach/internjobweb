import React, {useState} from 'react';

import { addDoc, collection} from 'firebase/firestore'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../../firebase-config'

import { useForm, Controller } from 'react-hook-form';

import {Link, useNavigate} from 'react-router-dom' 

import './signup.scss'

import Button from '../Button/Button'

import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const Signup = (props) => {

    let navigate = useNavigate()

    // Define type
    let name;
    if (props.type === 'cty') {
        name = 'doanh nghiệp'
    } else if (props.type ==='uni') {
        name = 'trường'
    }
    // Select open
    const [city, setCity] = useState('Hồ Chí Minh')
    const [HRInfo, setHRInfo] = useState(false)

    // Form

    const userCollectionRef = collection(db, 'users')

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    //     {
    //     defaultValues: {
    //         type: props.type,
    //         name: '',
    //         email:'',
    //         website:'',
    //         phone:'',
    //         address:'',
    //         city:'',
    //         hr: false,
    //         hrName:'',
    //         hrEmail:'',
    //         hrPhone:'',
    //         logo:'',
    //         des: ''
    //     }
    // });
    const watchPassword = watch('password')
    console.log(watchPassword)
    const [signUpPassword, setSignUpPassword] = useState('')

    const [errorPass, setErrorPass] = useState('')


    const confirmPassword = (value) => {
        if (value === watchPassword) {
            setSignUpPassword(value)
            setErrorPass('')
        } else {
            setSignUpPassword('')
            setErrorPass('Mật khẩu chưa khớp')
        }
    }

    const onSubmit = async data => {
        data.city = city
        data.hr = HRInfo
        console.log(data)

        if (errorPass) {
            alert('Đăng kí không thành công')
        } else {
            await createUserWithEmailAndPassword(auth, data.email, signUpPassword).then((result) => {
                alert('Đăng kí thành công')
                navigate('/login')
            })
            .catch((message) => {
                alert(message)
            })
        }


        await addDoc(userCollectionRef, data)
    };
    // Form

    

    return (
        <div className='signup'>
            <h1 className="form-title">Đăng ký</h1>

            <form className="input-wrapper" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register('type')} defaultValue={props.type} style={{display: 'none'}}/>
                <div className='input-group'>
                    <label htmlFor="">Tên {name} <span className='input-required'>*</span></label>
                    <input type='text' className='input-group__input' {...register('name', {required: 'Vui lòng nhập tên'})}/>
                    {/* <h4 className="input-group__error"></h4> */}
                    {errors.name && <h4 className="input-group__error">Vui lòng nhập tên</h4>}
                </div>

                <div className='input-group'>
                    <label htmlFor="">Email <span className='input-required'>*</span></label>
                    <input type='email' className='input-group__input' {...register('email', {required: true, pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" })} placeholder=''/>
                </div>

                <div className='input-group'>
                    <label htmlFor="">Website</label>
                    <input type='url' className='input-group__input' {...register('website')} placeholder=''/>
                </div>

                <div className='input-group'>
                    <label htmlFor="">Số điện thoại <span className='input-required'>*</span></label>
                    <input type='tel' className='input-group__input' {...register('phone', {required: true, minLength: 10, maxLength: 13})}  placeholder=''/>
                    {errors.phone && <h4 className="input-group__error">Vui lòng nhập lại</h4>}
                </div>

                <div className='input-group'>
                    <label htmlFor="">Địa chỉ <span className='input-required'>*</span></label>
                    <input type='text' className='input-group__input' {...register('address', {required: true})} placeholder=''/>
                </div>

                {/* <Controller
                    name="select"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => <Select 
                    {...field} 
                    options={[
                        { value: "chocolate", label: "Chocolate" },
                        { value: "strawberry", label: "Strawberry" },
                        { value: "vanilla", label: "Vanilla" }
                    ]} 
                    />}
                /> */}


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
                    <label htmlFor="">Thông tin người tuyển dụng</label>
                    <FormControl>
                        <Select
                            id="sign-up__select-city"
                            value={HRInfo}
                            onChange={(e) => {
                                setHRInfo(e.target.value)
                            }}
                            // {...register('hr', {required: true})}
                        >
                            <MenuItem value={true}>Có</MenuItem>
                            <MenuItem value={false}>Không</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <div className={`input-group ${HRInfo ? "" : "dis-none"}`}>
                    <label htmlFor="">Tên người tuyển dụng <span className='input-required'>*</span></label>
                    <input type='text' className='input-group__input' {...register('hrName', {required: HRInfo})}  placeholder=''/>
                </div>

                <div className={`input-group ${HRInfo ? "" : "dis-none"}`}>
                    <label htmlFor="">Email <span className='input-required'>*</span></label>
                    <input type='email' className='input-group__input' {...register('hrEmail', {required: HRInfo, pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"})} placeholder=''/>
                </div>

                <div className={`input-group ${HRInfo ? "" : "dis-none"}`}>
                    <label htmlFor="">Số điện thoại <span className='input-required'>*</span></label>
                    <input type='tel' className='input-group__input' {...register('hrPhone', {required: HRInfo, minLength: 10, maxLength: 13})} placeholder=''/>
                    {errors.hrPhone && <h4 className="input-group__error">Vui lòng nhập lại</h4>}  
                </div>

                <div className='input-group'>
                    <label htmlFor="">Logo <span className='input-required'>*</span></label>
                    <input disabled type='file' className='input-group__input' placeholder=''/>
                </div>

                <div className='input-group'>
                    <label htmlFor="">Mô tả {name} <span className='input-required'>*</span></label>
                    <textarea name="" cols="30" rows="10" className='input-group__input' {...register('des', {required: true})}></textarea>
                </div>

                <div className='input-group'>
                    <label htmlFor="">Mật khẩu <span className='input-required'>*</span></label>
                    <input type='password' className='input-group__input' {...register('password', {required: true})} placeholder='8 - 16 ký tự và không có ký tự đặc biệt'/>
                </div>

                <div className='input-group'>
                    <label htmlFor="">Nhập lại mật khẩu <span className='input-required'>*</span></label>
                    <input type='password' className='input-group__input' required placeholder='' onChange={(e) => {
                        confirmPassword(e.target.value)
                    }}
                    />
                    <h4 className="input-group__error">{errorPass}</h4>
                </div>

                <div className="signup-confirm">
                    <input type="checkbox" id='signup-confirm__input' required/>
                    <label htmlFor='signup-confirm__input'>Tôi đồng ý với điều khoản dịch vụ và chính sách bảo mật</label>
                </div>

                    <input type="submit" id='signup-submit' />
                    <label htmlFor='signup-submit' className="signup-btns">
                        <Button>Đăng ký</Button>
                    </label>
            </form> 

        </div>
    );
}

export default Signup;
