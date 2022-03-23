import React from 'react';

import JobInfo from '../components/JobInfo/JobInfo';
import HomeHeader from '../components/HomeHeader/HomeHeader';

const JobInfoPage = () => {
    return (
        <div className='container'>
            <HomeHeader/>
            <JobInfo/>
        </div>
    );
}

export default JobInfoPage;
