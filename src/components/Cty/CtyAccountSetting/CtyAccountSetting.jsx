import React, {useState} from 'react';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { useForm } from 'react-hook-form'

import { selectUser } from '../../../redux/selectors'

import { useSelector } from 'react-redux';

import Button from '../../Button/Button';

const CtyAccountSetting = () => {

    const [city, setCity] = useState('Thành phố')
    // Define type

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


    const { register, handleSubmit, watch, formState: { errors } } = useForm()

    const onSubmit = async data => {
        console.log(data)
    };

    return (
        <form className='form cty-account-setting' onSubmit={handleSubmit(onSubmit)}>
            <h1 className="form-title">Cài đặt tài khoản</h1>
            <div className="input-wrapper">
                <div className='input-group'>
                    <label htmlFor="">Tên doanh nghiệp <span className='input-required'>*</span></label>
                    <input type='text' className='input-group__input' {...register('name', {required: true})} placeholder=''/>
                </div>

                <div className='input-group'>
                    <label htmlFor="">Email <span className='input-required'>*</span></label>
                    <input type='email' className='input-group__input' {...register('password', {required: true})} placeholder=''/>
                </div>

                <div className='input-group'>
                    <label htmlFor="">Website</label>
                    <input type='url' className='input-group__input' {...register('website', {required: false})} placeholder=''/>
                </div>

                <div className='input-group'>
                    <label htmlFor="">Số điện thoại <span className='input-required'>*</span></label>
                    <input type='tel' className='input-group__input' {...register('phone', {required: true})} placeholder=''/>
                </div>

                <div className='input-group'>
                    <label htmlFor="">Địa chỉ <span className='input-required'>*</span></label>
                    <input type='text' className='input-group__input' {...register('address', {required: true})} placeholder=''/>
                </div>

                <div className='input-group'>
                    <label htmlFor="">Thành phố <span className='input-required'>*</span></label>
                    <div className="input-group__select">
                        <div className="input-group__select--default" onClick={handleSelectCityOpen}>
                            <span>{city}</span>
                            <KeyboardArrowDownIcon/>
                            <input type="text" style={{display: 'none'}} defaultValue={city} {...register('city', {required: true})}/>
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
                    
                    <div className="input-group__select">
                        <div className="input-group__select--default" onClick={handleSelectHROpen}>
                            <span>{HRInfo ? 'Có' : 'Không'}</span>
                            <KeyboardArrowDownIcon/>
                            <input type="text" style={{display: 'none'}} defaultValue={HRInfo} value={HRInfo} {...register('hr', {required: false})}/>
                        </div>

                        <div className={`input-group__select--list ${selectHROpen ? "select-open" : ""}`} onMouseLeave={handleSelectHROpen}>
                            <div className="input-group__select--option" onClick={handleHROptionClick}>Có</div>
                            <div className="input-group__select--option" onClick={handleHROptionClick}>Không</div>
                        </div>
                    </div>
                </div>

                <div className={`input-group ${HRInfo ? "" : "dis-none"}`}>
                    <label htmlFor="">Tên người tuyển dụng <span className='input-required'>*</span></label>
                    <input type='text' className='input-group__input' {...register('hrName', {required: HRInfo})} placeholder=''/>
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
                    <input type='file' className='input-group__input' placeholder=''/>
                </div>

                <div className='input-group'>
                    <label htmlFor="">Mô tả doanh nghiệp <span className='input-required'>*</span></label>
                    <textarea name="" id="" cols="30" rows="10" className='input-group__input' {...register('des', {required: true})}></textarea>
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
