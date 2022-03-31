import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { updateDoc, doc } from 'firebase/firestore';

import { db} from '../../../firebase-config'

import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

import { useForm } from 'react-hook-form'

import UsersSlice from '../../../redux/Slice/UsersSlice'
import { selectUser } from '../../../redux/selectors'
import { useSelector } from 'react-redux';

import Button from '../../Button/Button';

const CtyAccountSetting = () => {
    const navigate = useNavigate()
    const user = useSelector(selectUser)

    const [city, setCity] = useState(user.city)
    // Define type

    // Select open

    // Select HR Info
    const [HRInfo, setHRInfo] = useState(user.hr)


    // const [userSetting, setUserSetting] = useState(user)

    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = async data => {
        data.city = city
        data.hr = HRInfo
        console.log(data)
        updateDoc(doc(db, "users", user.id), data)
        dispatch(UsersSlice.actions.updateUsers(data))
        alert('Cập nhật thành công!')
        navigate('/cty')
    };

    return (
        <form className='form cty-account-setting' onSubmit={handleSubmit(onSubmit)}>
            <h1 className="form-title">Cài đặt tài khoản</h1>
            <div className="input-wrapper">
                <div className='input-group'>
                    <label htmlFor="">Tên doanh nghiệp <span className='input-required'>*</span></label>
                    <input type='text' className='input-group__input' defaultValue={user.name} {...register('name', {required: true})} placeholder=''/>
                    {errors.name && <h4 className="input-group__error">Vui lòng nhập tên</h4>}
                </div>

                <div className='input-group'>
                    <label htmlFor="">Email <span className='input-required'>*</span></label>
                    <input type='email' className='input-group__input' defaultValue={user.email} {...register('email', {required: true})} placeholder=''/>
                </div>

                <div className='input-group'>
                    <label htmlFor="">Website</label>
                    <input type='url' className='input-group__input' defaultValue={user.website} {...register('website', {required: false})} placeholder=''/>
                </div>

                <div className='input-group'>
                    <label htmlFor="">Số điện thoại <span className='input-required'>*</span></label>
                    <input type='tel' className='input-group__input' defaultValue={user.phone} {...register('phone', {required: true})} placeholder=''/>
                    {errors.phone && <h4 className="input-group__error">Vui lòng nhập lại</h4>}
                </div>

                <div className='input-group'>
                    <label htmlFor="">Địa chỉ <span className='input-required'>*</span></label>
                    <input type='text' className='input-group__input' defaultValue={user.address} {...register('address', {required: true})} placeholder=''/>
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
                    <input type='text' className='input-group__input' defaultValue={user.hrName} {...register('hrName', {required: HRInfo})} placeholder=''/>
                </div>

                <div className={`input-group ${HRInfo ? "" : "dis-none"}`}>
                    <label htmlFor="">Email <span className='input-required'>*</span></label>
                    <input type='email' className='input-group__input' defaultValue={user.hrEmail} {...register('hrEmail', {required: HRInfo})} placeholder=''/>
                </div>

                <div className={`input-group ${HRInfo ? "" : "dis-none"}`}>
                    <label htmlFor="">Số điện thoại <span className='input-required'>*</span></label>
                    <input type='tel' className='input-group__input' defaultValue={user.hrPhone} {...register('hrPhone', {required: HRInfo})} placeholder=''/>
                    {errors.hrPhone && <h4 className="input-group__error">Vui lòng nhập lại</h4>}
                </div>

                <div className='input-group'>
                    <label htmlFor="">Logo <span className='input-required'>*</span></label>
                    <input type='file' className='input-group__input' placeholder=''/>
                </div>

                <div className='input-group'>
                    <label htmlFor="">Mô tả doanh nghiệp <span className='input-required'>*</span></label>
                    <textarea name="" id="" cols="30" rows="10" className='input-group__input' defaultValue={user.des} {...register('des', {required: true})}></textarea>
                </div>

                
                <input type="submit" id='update-account' style={{display: 'none'}}/>
                <label htmlFor='update-account'>
                    <Button>Cập nhật tài khoản</Button>
                </label>
                
            </div>
        </form>
    );
}

export default CtyAccountSetting;
