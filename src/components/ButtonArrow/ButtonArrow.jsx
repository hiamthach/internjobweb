import React from 'react';

import './button-arrow.scss'

import { ArrowRight, ArrowLeft } from 'react-bootstrap-icons'

const ButtonArrow = (props) => {

    return (
        <button className={`btn-arrow ${props.direction === 'left' ? 'btn-arrow__left' : 'btn-arrow__right'}`}>

            {props.direction === 'left' ? <ArrowLeft/> : '' }
            {props.children}
            {props.direction === 'right' ? <ArrowRight/> : '' }
        </button>
    );
}

export default ButtonArrow;
