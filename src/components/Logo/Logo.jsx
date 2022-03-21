import React from 'react';
import './logo.scss'

const Logo = (props) => {
    let type = ''
    if (props.type === 'cty') {
        type = 'Doanh nghiệp'
    } else if (props.type === 'uni') {
        type = 'Trường Đại học / Cao đẳng'
    }

    return (
        <div className="logo">
            <h1>ITInternshipJobs</h1>
            <h4>{type}</h4>
        </div>
    );
}

export default Logo;
