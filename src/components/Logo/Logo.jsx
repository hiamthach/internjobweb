import React from 'react';
import './logo.scss'
import { Link } from 'react-router-dom';

const Logo = (props) => {
    let type = ''
    if (props.type === 'cty') {
        type = 'Doanh nghiệp'
    } else if (props.type === 'uni') {
        type = 'Trường Đại học / Cao đẳng'
    }

    return (
        <Link to='/' className="logo">
            <h1>ITInternshipJobs</h1>
            <h4>{type}</h4>
        </Link>
    );
}

export default Logo;
