import React, {Fragment} from 'react';
import Input from './componentes/Input/Input'
import './App.css';

function App() {
  let value = "";
  const onChangeInput=(element) => {
    value=element.target.value
  }
  return (
    <div>
      <Fragment>
      <Input placeholder="Digite seu nome" tipo="text" change={onChangeInput} />
      {/* <Input placeholder="Digite sua idade" tipo="password"/> */}
      <button>Cadastrar</button>
      <p>Bruna</p>
      </Fragment>
    </div>
  );
}

export default App;
