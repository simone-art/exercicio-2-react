import React, {Fragment} from 'react'
import Input from '../componentes/Input/Input';
import Button from '../componentes/Button/Button';

class Home extends React.Component{
    constructor (){
        super();
        this.state = {
            value: " ",
            nomes:[
                "Janiarly", 
                "Raissa"
            ]
        }
    }

onChangeInput=(element) => {
let value=element.target.value
this.setState({value:value})
console.log(value)
}

adicionarItem = () => {
    // console.log("button")
    this.setState({
        nomes: [
            ...this.state.nomes,
            this.state.value
        ]
        //SI COLOCAS EL ...THIS.STATE.NOMES ABAJO, COMO ESTÁ EN EL
        //CÓDIGO, EL NOMBRE APARECERÁ DE PRIMERO. SI LO PONES AL 
        //CONTRARIO, EL NOMBRE APARECE DE ÚLTIMO EN LA LISTA.
    })
}
    render() {
        return ( 
            <Fragment>
            <h1>HOME</h1>
            <Input placeholder="Digite seu nome" tipo="text" change={this.onChangeInput} />
            <p>{this.state.value}</p>
            <Button add={this.adicionarItem}/>
            <ul>
            {this.state.nomes.map((value, index) => (
            <li>{value}</li>
            ))}
            </ul>
            </Fragment>
        );
    }
}

export default Home;