import React, {useState, useEffect} from 'react';

import Header from '../Header/Header'
import SearchJob from '../SearchJob/SearchJob';
import Filters from '../Filters/Filters';
import JobList from '../JobList/JobList'

import './home.scss';

const Home = () => {

    return (
        <div className="home">
            <Header/>

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
