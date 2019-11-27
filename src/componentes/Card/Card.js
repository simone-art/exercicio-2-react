import React from 'react'
// import imagem from '../../img/nicky.jpg'


const Card = (props) => {
    // const {price, title, img} = props.produtos;
    return (
    <div className= 'card'>
    <h1>Produtos</h1>
    <h2>Oferta Especial Black Friday</h2>
    <img src={props.item.img} className="card-img"></img>
    <p>{props.item.title}</p>
    <p>{props.item.price}</p>
    </div>
);
}
    

export default Card;