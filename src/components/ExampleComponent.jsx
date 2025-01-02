import React from 'react';

const ExampleComponent = ({ title, content }) => {
    return (
        <div className="example-component">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-lg">{content}</p>
        </div>
    );
};

export default ExampleComponent;