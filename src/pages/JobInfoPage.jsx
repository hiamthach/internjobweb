import React from 'react';

import JobInfo from '../components/JobInfo/JobInfo';
import HomeHeader from '../components/HomeHeader/HomeHeader';
import Header from '../components/Header/Header'

const JobInfoPage = () => {
    return (
        <div className='container'>
            <Header/>
            <JobInfo/>
        </div>
    );
}

export default JobInfoPage;
