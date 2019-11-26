import React from 'react';

const Input = ({tipo, placeholder, change}) =>{
    return (
        <input 
        type={tipo}
        placeholder={placeholder}
        onChange={change}>
        </input>
    )
}


// const Input = (props) => {
//     return (
//         <input type={props.tipo} placeholder={props.placeholder}>
        
//         </input>
//     )
// }

export default Input;
