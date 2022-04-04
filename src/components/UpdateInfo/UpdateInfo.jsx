import React, {useEffect, useState} from 'react';

import './update-info.scss'

import { addDoc, collection, getDocs} from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../../firebase-config'

import { useForm } from 'react-hook-form';

import { useNavigate} from 'react-router-dom' 

import Button from '../Button/Button'

import { useDispatch } from 'react-redux';
import UsersSlice from '../../redux/Slice/UsersSlice'

import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const UpdateInfo = (props) => {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')

    const [type, setType] = useState('cty')
    const [city, setCity] = useState('Hồ Chí Minh')
    const [HRInfo, setHRInfo] = useState(false)

    useEffect(() => {
        setName(type === 'cty'? 'doanh nghiệp' : 'trường')
    }, [type])
    const dispatch = useDispatch()

    const [currentUser, setCurrentUser] = useState('')    
    const [users, setUsers] = useState([])

    const usersRef = collection(db, "users")

    useEffect(() => {
        const getUser = async () => {
            const data = await getDocs(usersRef)
            setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }

        getUser()
    }, []);

    onAuthStateChanged(auth, (currentUser) => {
        setEmail(currentUser.email)
        if (currentUser) {
            const userLogin = users.filter((user) => user.email === currentUser.email)
            
            dispatch(UsersSlice.actions.updateUsers(userLogin[0]))
            setCurrentUser(userLogin[0])
        }
    })
    

    const { register, handleSubmit, formState: { errors } } = useForm()


    const onSubmit = async data => {
        data.email = email
        data.type = type
        data.city = city
        data.hr = HRInfo
        console.log(data)

        await addDoc(usersRef, data)
        navigate(`/${type}`)
        alert('Cập nhật thành công')
    };
    // Form

    

    return (
        <div className="form update-form">
            <h1 className='form-title'>Cập nhật thông tin</h1>
            
            <form className="input-wrapper" onSubmit={handleSubmit(onSubmit)}>
                <div className='input-group'>
                    <label htmlFor="">Đăng nhập với tư cách</label>
                    <FormControl>
                        <Select
                            id="update__select-type"
                            value={type}
                            onChange={(e) => {
                                setType(e.target.value)
                            }}
                        >
                            <MenuItem value='cty'>Doanh nghiệp</MenuItem>
                            <MenuItem value='uni'>Trường Đại học / Cao đẳng</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className='input-group'>
                    <label htmlFor="">Tên {name} <span className='input-required'>*</span></label>
                    <input type='text' className='input-group__input' {...register('name', {required: 'Vui lòng nhập tên'})}/>
                    {/* <h4 className="input-group__error"></h4> */}
                    {errors.name && <h4 className="input-group__error">Vui lòng nhập tên</h4>}
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

                    <input type="submit" id='update-user-submit' style={{display: 'none'}}/>
                    <label htmlFor='update-user-submit' className="signup-btns">
                        <Button>Cập nhật thông tin</Button>
                    </label>
            </form> 
        </div>
    );
}

export default UpdateInfo;
