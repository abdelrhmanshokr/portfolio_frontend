import React from 'react';
import './mainComponent.css';

const MainComponent = ({ title, content }) => {
    return (
        <div className="main-component">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-lg">{content}</p>
        </div>
    );
};

export default MainComponent;