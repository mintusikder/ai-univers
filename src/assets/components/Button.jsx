import React from 'react';

const Button = ({children}) => {
    return (
        <div style={{ textAlign: 'center' }}>
            <button className="btn btn-outline btn-secondary">{children}</button>
        </div>
    );
};

export default Button;