import React from 'react';

import HomeHeader from '../HomeHeader/HomeHeader';
import SearchJob from '../SearchJob/SearchJob';
import Filters from '../Filters/Filters';
import JobList from '../JobList/JobList'
import './home.scss';

const Home = () => {
    return (
        <div className="home">
            <HomeHeader/>

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

export default Home;
