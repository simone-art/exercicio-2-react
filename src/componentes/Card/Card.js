import React from 'react'
import imagem from '../../img/nicky.jpg'


const Card = (props) => (
    <div className= 'card'>
        {/* <h1>Produtos</h1>
        <h2>Oferta Especial Black Friday</h2> */}
        <img src={imagem} className="card-img"></img>
        <p>Game Nicky-Ginger</p>
        <p>R$ 29,90</p>
    </div>
);

export default Card;