import React, {useState, useEffect} from 'react';

import SignupSelect from '../components/SignupSelect/SignupSelect';
import Signup from '../components/Signup/Signup'
import { set } from 'react-hook-form';

const SignupPage = (props) => {

    const [isSelected, setIsSelected] = useState(false)

    useEffect(() => {
        
        console.log(isSelected)
    }, [isSelected]);

    return (
        <div className="form-container">
            {isSelected ? <Signup type={isSelected}/> : <SignupSelect isSelected={(type) => setIsSelected(type)}/>}
        </div>
    );
}

export default SignupPage;
