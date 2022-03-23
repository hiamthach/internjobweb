import React from 'react';

import './filters.scss'

const Filters = () => {
    return (
        <div className="filters">
            <div className="filters-block">
                <h1>Loại việc</h1>
                <div className="filters-block__check">
                    <input type="checkbox" value='Full time' id='checkbox__fulltime'/>
                    <label htmlFor="checkbox__fulltime">Full time</label>
                </div>
                <div className="filters-block__check">
                    <input type="checkbox" value='Part time' id='checkbox__parttime'/>
                    <label htmlFor="checkbox__parttime">Part time</label>
                </div>
                <div className="filters-block__check">
                    <input type="checkbox" value='Remote' id='checkbox__remote'/>
                    <label htmlFor="checkbox__remote">Remote</label>
                </div>
            </div>

            <div className="filters-block">
                <h1>Ngày đăng</h1>
                <div className="filters-block__check">
                    <input type="checkbox" value='Mới nhất' id='checkbox__latest'/>
                    <label htmlFor="checkbox__latest">Mới nhất</label>
                </div>

                <div className="filters-block__check">
                    <input type="checkbox" value='7 ngày qua' id='checkbox__7days'/>
                    <label htmlFor="checkbox__7days">7 ngày qua</label>
                </div>

                <div className="filters-block__check">
                    <input type="checkbox" value='14 ngày qua' id='checkbox__14days'/>
                    <label htmlFor="checkbox__14days">14 ngày qua</label>
                </div>

                <div className="filters-block__check">
                    <input type="checkbox" value='30 ngày qua' id='checkbox__30days'/>
                    <label htmlFor="checkbox__30days">30 ngày qua</label>
                </div>

                <div className="filters-block__check">
                    <input type="checkbox" value='Sắp hết hạn' id='checkbox__expire'/>
                    <label htmlFor="checkbox__expire">Sắp hết hạn</label>
                </div>
            </div>
        </div>
    );
}

export default Filters;
