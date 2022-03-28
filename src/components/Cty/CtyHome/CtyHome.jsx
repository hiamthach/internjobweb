import React from 'react';
import Header from '../../Header/Header';

import SearchJob from '../../SearchJob/SearchJob';
import Filters from '../../Filters/Filters';
import JobList from '../../JobList/JobList';

const CtyHome = () => {
    return (
        <div>
            <Header 
                type='cty'
                where=''
            />

            <SearchJob/>
            <div className="main">
                <div className="col-4">
                    <Filters/>
                </div>
                <div className="col-8">
                    <JobList/>
                </div>
            </div>
        </div>
    );
}

export default CtyHome;
