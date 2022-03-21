import React from 'react';

import './input-group.scss'

const InputGroup = (props) => {
    return (
        <div className={`input-group ${props.error ? 'error' : ''}`}>
            <label htmlFor="">{props.text} {props.forced ? <span>*</span> : ''}</label>
            <input type={props.type} className='input-group__input' id='' placeholder={props.place}/>
        </div>
    );
}

export default InputGroup;
