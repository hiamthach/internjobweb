import React from 'react';

import './job-list.scss'

import JobCard from '../JobCard/JobCard';

const JobList = () => {
    return (
        <div className="job-list">
            <h1 className="job-list__result">
                <span>10 </span>
                kết quả tìm kiếm
            </h1>
            <JobCard/>
            <JobCard/>
            <JobCard/>
            <JobCard/>
        </div>
    );
}

export default JobList;
