import React from 'react';

import Header from '../components/Header/Header'
import Candidates from '../components/Candidates/Candidates';

const CandidatesPage = () => {

    return (
        <div className='container'>
            <Header/>
            <Candidates />
        </div>
    );
}

export default CandidatesPage;
