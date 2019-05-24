import React from 'react';
import './Card.css';

const CardContent = () => {

    return (
        <div className = 'card-content'>
        <h4>Get Started with React</h4>
        <p>React makes it painless to create interactive UI's. Design simple views for 
        each state in your application.
        </p>
        <p className = 'opacity-p'>reactjs.org</p>
        </div>
    );
}

export default CardContent;