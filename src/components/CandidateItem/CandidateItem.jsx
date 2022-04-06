import React from 'react';

import './candidate-item.scss'

const CandidateItem = (props) => {
    return (
        <div className='candidate-item'>
            <div className="candidate-item__content">
                <div className="candidate-item__info">
                    <img src="https://www.fpt-software.com/wp-content/uploads/sites/2/2017/04/fpt-software-1.jpg" alt="" />

                    <div className='candidate-item__info--wrap'>
                        <h2 className="candidate-item__info--name">{props.name}</h2>
                        <h4 className="candidate-item__info--address">{props.address}</h4>
                    </div>
                </div>
            </div>

            <div className="candidate-item__footer">
                <div className="candidate-item__footer--item">
                    Email: {props.email}
                </div>
                <div className="candidate-item__footer--item">
                    Số điện thoại: {props.phone}
                </div>
                <div className="candidate-item__footer--item candidate-item__footer--del">
                    Xóa
                </div>
            </div>
        </div>
    );
}

export default CandidateItem;
