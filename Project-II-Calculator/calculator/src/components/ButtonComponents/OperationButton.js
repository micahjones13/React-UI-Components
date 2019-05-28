import React from 'react';
import './Button.css';

const OperationButton = (props) => {

    return(
        <button className = {props.opBtn}>{props.text}</button>
    );

}

export default OperationButton;