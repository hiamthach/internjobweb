import React from 'react';

import CtyPost from '../../components/Cty/CtyPost/CtyPost';
import Header from '../../components/Header/Header';

const CtyPostPage = () => {
    return (
        <div className='container'>
            <Header
                type='cty'
                where='post'
            />

           <CtyPost/> 
        </div>
    );
}

export default CtyPostPage;
