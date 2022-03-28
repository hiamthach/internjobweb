import React, {useState} from 'react';

import { addDoc, collection} from 'firebase/firestore'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../../firebase-config'

import { useForm } from 'react-hook-form';

import {Link, useNavigate} from 'react-router-dom' 

import './signup.scss'

import Button from '../Button/Button'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Signup = (props) => {

    let navigate = useNavigate()

    // Define type
    const [city, setCity] = useState('Thành phố')
    let name;
    if (props.type === 'cty') {
        name = 'doanh nghiệp'
    } else if (props.type ==='uni') {
        name = 'trường'
    }

    // Select city open
    const [selectCityOpen, setCitySelectOpen] = useState(false)

    const handleSelectCityOpen = (e) => {
        setCitySelectOpen(!selectCityOpen)
    }   
    
    const handleCityOptionClick = (e) => {
        setCity(e.target.innerText)
        setCitySelectOpen(!selectCityOpen)
    }
    // Select open

    // Select HR Info
    const [HRInfo, setHRInfo] = useState(false)
    const [selectHROpen, setSelectHROpen] = useState(false)

    const handleHROptionClick = (e) => {
        setHRInfo(e.target.innerText === 'Có' ? true : false )
        setSelectHROpen(!selectHROpen)
    }

    const handleSelectHROpen = () => {
        setSelectHROpen(!selectHROpen)
    }
    // HR Info

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

    const [signUpPassword, setSignPassword] = useState('')

    const onSubmit = async data => {
        console.log(data)

        await createUserWithEmailAndPassword(auth, data.email, signUpPassword).then((result) => {
            alert('Đăng kí thành công')
            navigate('/login')
        })
        .catch((message) => {
            alert(message)
        })

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
                    <input type='text' className='input-group__input' {...register('name', {required: true})} placeholder=''/>
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
                    <input type='tel' className='input-group__input' {...register('phone', {required: true})}  placeholder=''/>
                </div>

                <div className='input-group'>
                    <label htmlFor="">Địa chỉ <span className='input-required'>*</span></label>
                    <input type='text' className='input-group__input' {...register('address', {required: true})} placeholder=''/>
                </div>

                <div className='input-group'>
                    <label htmlFor="">Thành phố <span className='input-required'>*</span></label>
                    <input type="text" value={city} style={{display: 'none'}} {...register('city', {required: true})} />
                    <div className="input-group__select">
                        <div className="input-group__select--default" onClick={handleSelectCityOpen}>
                            <span>{city}</span>
                            <KeyboardArrowDownIcon/>
                        </div>

                        <div className={`input-group__select--list ${selectCityOpen ? 'select-open' : ''}`} onMouseLeave={handleSelectCityOpen}>
                            <div className="input-group__select--option" onClick={handleCityOptionClick}>Hồ Chí Minh</div>
                            <div className="input-group__select--option" onClick={handleCityOptionClick}>Hà Nội</div>
                            <div className="input-group__select--option" onClick={handleCityOptionClick}>Đà Nẵng</div>
                        </div>
                    </div>
                </div>

                <div className='input-group'>
                    <label htmlFor="">Thông tin người tuyển dụng</label>
                    <input type="text" value={HRInfo} style={{display: 'none'}} {...register('hr', {required: false})} />
                    
                    <div className="input-group__select">
                        <div className="input-group__select--default" onClick={handleSelectHROpen}>
                            <span>{HRInfo ? 'Có' : 'Không'}</span>
                            <KeyboardArrowDownIcon/>
                        </div>

                        <div className={`input-group__select--list ${selectHROpen ? "select-open" : ""}`} onMouseLeave={handleSelectHROpen}>
                            <div className="input-group__select--option" onClick={handleHROptionClick}>Có</div>
                            <div className="input-group__select--option" onClick={handleHROptionClick}>Không</div>
                        </div>
                    </div>
                </div>

                <div className={`input-group ${HRInfo ? "" : "dis-none"}`}>
                    <label htmlFor="">Tên người tuyển dụng <span className='input-required'>*</span></label>
                    <input type='text' className='input-group__input' {...register('hrName', {required: HRInfo})}  placeholder=''/>
                </div>

                <div className={`input-group ${HRInfo ? "" : "dis-none"}`}>
                    <label htmlFor="">Email <span className='input-required'>*</span></label>
                    <input type='email' className='input-group__input' {...register('hrEmail', {required: HRInfo})} placeholder=''/>
                </div>

                <div className={`input-group ${HRInfo ? "" : "dis-none"}`}>
                    <label htmlFor="">Số điện thoại <span className='input-required'>*</span></label>
                    <input type='tel' className='input-group__input' {...register('hrPhone', {required: HRInfo})} placeholder=''/>
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
                    <input type='password' className='input-group__input' required placeholder='8 - 16 ký tự và không có ký tự đặc biệt'/>
                </div>

                <div className='input-group'>
                    <label htmlFor="">Nhập lại mật khẩu <span className='input-required'>*</span></label>
                    <input type='password' className='input-group__input' required placeholder='' onChange={(e) => {
                        setSignPassword(e.target.value)
                    }}/>
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
