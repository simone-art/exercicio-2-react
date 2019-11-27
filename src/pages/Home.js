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
            ],
            valorRemovido:""
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

removerItem = (item) => {
    console.log(item);
        let novoArray = this.state.nomes.filter(nome => (
            nome !== item
        ));
            this.setState({
                nomes: novoArray,
                valorRemovido: item
            })
}

desfazerRemover = (item) => {
    console.log(item)
    // let trazerNomeRemovido= valorRemovido
    this.setState({
        nomes: [
            ...this.state.nomes,
            this.state.valorRemovido
        ]
    })
}

render() {
    return (
        <Fragment>
            <Input placeholder="Digite seu nome"
                tipo="text"
                change={this.onChangeInput}></Input>
            {/* <Input placeholder="Digite sua senha" tipo="password"></Input> */}

            <Button click={this.adicionarItem}> Cadastrar </Button>
                <Button click={this.desfazerRemover}> Desfazer Remover</Button>   
            <ul>
                {this.state.nomes.map((value, i) => {
                    return (
                        <div key={i} className="lista_item">
                            <li>{value}</li>
                            <Button click={() => this.removerItem(value)}> x </Button>   
                        {/* <li>{value}</li> */}
                    </div>
                    );
                })}

            </ul>
        </Fragment>
    );
}
}
export default Home;