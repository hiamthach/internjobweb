import React, {useState} from 'react';
import {Link} from 'react-router-dom' 

import './signup.scss'

import Button from '../Button/Button'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Signup = (props) => {

    // Define type
    const [city, setCity] = useState('Thành phố')
    let name;
    if (props.type === 'cty') {
        name = 'doanh nghiệp'
    } else if (props.type ==='uni') {
        name = 'trường'
    }
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
    // HR Info


    return (
        <div className='signup'>
            <h1 className="form-title">Đăng ký</h1>

            <div className="input-wrapper">
                <div className='input-group'>
                    <label htmlFor="">Tên {name} <span className='input-required'>*</span></label>
                    <input type='text' className='input-group__input' required id='' placeholder=''/>
                </div>

                <div className='input-group'>
                    <label htmlFor="">Email <span className='input-required'>*</span></label>
                    <input type='email' className='input-group__input' required id='' placeholder=''/>
                </div>

                <div className='input-group'>
                    <label htmlFor="">Website</label>
                    <input type='url' className='input-group__input' id='' placeholder=''/>
                </div>

                <div className='input-group'>
                    <label htmlFor="">Số điện thoại <span className='input-required'>*</span></label>
                    <input type='tel' className='input-group__input' required id='' placeholder=''/>
                </div>

                <div className='input-group'>
                    <label htmlFor="">Địa chỉ <span className='input-required'>*</span></label>
                    <input type='text' className='input-group__input' required id='' placeholder=''/>
                </div>

                <div className='input-group'>
                    <label htmlFor="">Thành phố <span className='input-required'>*</span></label>
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
                    <input type='text' className='input-group__input' required id='' placeholder=''/>
                </div>

                <div className={`input-group ${HRInfo ? "" : "dis-none"}`}>
                    <label htmlFor="">Email <span className='input-required'>*</span></label>
                    <input type='email' className='input-group__input' required id='' placeholder=''/>
                </div>

                <div className={`input-group ${HRInfo ? "" : "dis-none"}`}>
                    <label htmlFor="">Số điện thoại <span className='input-required'>*</span></label>
                    <input type='tel' className='input-group__input' required id='' placeholder=''/>
                </div>

                <div className='input-group'>
                    <label htmlFor="">Logo <span className='input-required'>*</span></label>
                    <input type='file' className='input-group__input' required id='' placeholder=''/>
                </div>

                <div className='input-group'>
                    <label htmlFor="">Mô tả {name} <span className='input-required'>*</span></label>
                    <textarea name="" id="" cols="30" rows="10" className='input-group__input' ></textarea>
                </div>

                <div className='input-group'>
                    <label htmlFor="">Mật khẩu <span className='input-required'>*</span></label>
                    <input type='password' className='input-group__input' required id='' placeholder='8 - 16 ký tự và không có ký tự đặc biệt'/>
                </div>

                <div className='input-group'>
                    <label htmlFor="">Nhập lại mật khẩu <span className='input-required'>*</span></label>
                    <input type='password' className='input-group__input' required id='' placeholder=''/>
                </div>

                <div className="signup-confirm">
                    <input type="checkbox" id='signup-confirm__input'/>
                    <label htmlFor='signup-confirm__input'>Tôi đồng ý với điều khoản dịch vụ và chính sách bảo mật</label>
                </div>
            </div>

            <div className="signup-btns">
                <Link to='/login'>
                    <Button>Đăng ký</Button>
                </Link>
            </div>
        </div>
    );
}

export default Signup;
