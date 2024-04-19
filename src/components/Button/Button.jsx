import React from 'react';

const Button = (props) => {
    return (
        <div>
            <button {...props} className={"btn" + props.className}/>
        </div>
    );
};

export default Button;