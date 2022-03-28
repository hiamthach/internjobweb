import React, {useState} from 'react';

import './cty-post.scss'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import Button from '../../Button/Button'

const CtyPost = () => {

    const [city, setCity] = useState('Thành phố')
    const [selectCityOpen, setSelectCityOpen] = useState(false)

    const handleCityOptionClick = (e) => {
        setCity(e.target.innerText)
    }

    const handleSelectCityOpen = () => {
        setSelectCityOpen(!selectCityOpen)
    }

    return (
        <div className='cty-post'>
            <form className="form cty-post__form">
                <h1 className="form-title">Đăng tuyển thực tập</h1>
                <div className="input-wrapper">
                    <div className='input-group'>
                        <label htmlFor="">Hồ sơ mẫu sẽ được gửi đến Email <span className='input-required'>*</span></label>
                        <input type='email' className='input-group__input' required id='' placeholder=''/>
                    </div>

                    <div className='input-group'>
                        <label htmlFor="">Vị trí <span className='input-required'>*</span></label>
                        <input type='text' className='input-group__input' required id='' placeholder=''/>
                    </div>
                    <div className='input-group'>
                        <label htmlFor="">Nơi làm việc <span className='input-required'>*</span></label>
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
                        <label htmlFor="">Loại việc <span className='input-required'>*</span></label>
                        <div className="input-group__check">
                            <div className="input-group__check--wrap">
                                <input type="checkbox" value='Full time' id='cty-post__fulltime'/>
                                <label htmlFor="cty-post__fulltime">Full time</label>
                            </div>
                            <div className="input-group__check--wrap">
                                <input type="checkbox" value='Part time' id='cty-post__parttime'/>
                                <label htmlFor="cty-post__parttime">Part time</label>
                            </div>
                            <div className="input-group__check--wrap">
                                <input type="checkbox" value='Remote' id='cty-post__remote'/>
                                <label htmlFor="cty-post__remote">Remote</label>
                            </div>
                        </div>
                    </div>

                    <div className='input-group'>
                        <label htmlFor="">Số lượng <span className='input-required'>*</span></label>
                        <input type='number' className='input-group__input' required id='' placeholder=''/>
                    </div>

                    <div className='input-group'>
                        <label htmlFor="">Hạn chót nộp hồ sơ <span className='input-required'>*</span></label>
                        <input type='date' className='input-group__input' required id='' placeholder=''/>
                    </div>

                    <div className='input-group'>
                        <label htmlFor="">Mô tả công việc <span className='input-required'>*</span></label>
                        <textarea name="" id="" cols="30" rows="10" className='input-group__input' ></textarea>
                    </div>
                    <div className='input-group'>
                        <label htmlFor="">Yêu cầu công việc <span className='input-required'>*</span></label>
                        <textarea name="" id="" cols="30" rows="10" className='input-group__input' ></textarea>
                    </div>
                    <div className='input-group'>
                        <label htmlFor="">Thông tin khác </label>
                        <textarea name="" id="" cols="30" rows="10" className='input-group__input' ></textarea>
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
