import React from 'react';

import Header from '../../components/Header/Header';
import CtyPostList from '../../components/Cty/CtyPostList/CtyPostList'

const CtyPostListPage = () => {
    return (
        <div className='container'>
            <Header
                type='cty'
                where='post-list'
            />
            <CtyPostList/> 
        </div>
    );
}

export default CtyPostListPage;
