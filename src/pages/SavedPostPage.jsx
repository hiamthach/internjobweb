import React from 'react';

import Header from '../components/Header/Header'
import SavedPost from '../components/SavedPost/SavedPost';

const SavedPostPage = () => {
    return (
        <div className='container'>
            <Header/>
            <SavedPost/>
        </div>
    );
}

export default SavedPostPage;
