import React from 'react';

const Button = (props) => {
    console.log(props, "button")
    const {click, children} = props;
    return (
<button onClick={click}>{children}</button>
    );
}

export default Button;