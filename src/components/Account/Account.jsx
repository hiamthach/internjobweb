import React from 'react';

import './account.scss'

import ButtonArrow from '../ButtonArrow/ButtonArrow'
import { Link } from 'react-router-dom'



const Account = () => {
    return (
        <div className='account'>
            <div className="row">
                <div className="col-4 account__info">
                    <img src="https://www.fpt-software.com/wp-content/uploads/sites/2/2017/04/fpt-software-1.jpg" alt="" />
                    <h3>Công ty ABC</h3>
                </div>

                <div className="col-8 account__links">
                    <Link to='/post-list'>
                        Danh sách bài đăng
                    </Link>
                    <Link to='/post-list'>
                        Danh sách đã lưu
                    </Link>
                    <Link to='/account/setting'>
                        Cập nhật thông tin
                    </Link>
                    <Link to='/'>
                        Cài đặt thông báo
                    </Link>
                </div>
            </div>

            <Link to='/' className='account__signout'>
                <ButtonArrow direction='left'>
                    Đăng xuất
                </ButtonArrow>
            </Link>
        </div>
    );
}

export default Account;
