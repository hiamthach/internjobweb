import React, {useState} from 'react';
import './search-job.scss'


import { Search, GeoAlt, ChevronDown } from 'react-bootstrap-icons';
import Button from '../Button/Button';

const SearchJob = () => {

    const [selectOpen, setSelectOpen] = useState(false)
    const [location, setLocation] = useState('Khu vực')
    
    const handleOpenSelect = () => {
        setSelectOpen(!selectOpen)
    }

    const handleOptionClick = (e) => {
        setLocation(e.target.innerText)
    }

    return (
        <section class="search">
            <div class="search-input">
                <Search className='search-input__icon'/>
                <input type="text" placeholder="Tìm kiếm"/>
                <span>|</span>
            </div>
            <div class="search-combobox" onClick={handleOpenSelect}>
                <GeoAlt className='search-combobox__icon'/>
                <span className='search-combobox__default'>{location}</span>
                <ChevronDown className='search-combobox__icon'/>

                <div className={`search-combobox__select ${selectOpen ? 'select-open' : ''}`} onMouseLeave={handleOpenSelect}>
                    <div className="search-combobox__option" onClick={handleOptionClick}>Hồ Chí Minh</div>
                    <div className="search-combobox__option" onClick={handleOptionClick}>Hà Nội</div>
                    <div className="search-combobox__option" onClick={handleOptionClick}>Đà Nẵng</div>
                </div>
            </div>
            <div class="search-btn ">
                <Button>Tìm kiếm</Button>
            </div>
        </section>
    );
}

export default SearchJob;
