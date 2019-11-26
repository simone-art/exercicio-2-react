import React from 'react';

const Button = (props) => {
    console.log(props, "button")
    return (
        <button onClick={props.add}>Cadastrar</button>
    );
}

export default Button;