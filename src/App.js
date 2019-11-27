import React, {Fragment} from 'react';
// import Input from './componentes/Input/Input';
import Home from './pages/Home';
import Login from './pages/Login';
import Produtos from './pages/Produtos';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
  // let value = "";
  // const onChangeInput=(element) => {
  //   value=element.target.value
  
  return (

    <BrowserRouter>
    <Switch>
    <Route path="/" exact={true} component={Login} />
    <Route path="/home" component={Home} />
    <Route path="/produtos" component={Produtos} />
    </Switch>
    </BrowserRouter>
  )
}

//     // <div>
//       {/* <Fragment> */}
//       {/* <Input placeholder="Digite seu nome" tipo="text" change={onChangeInput} />
//       {/* <Input placeholder="Digite sua idade" tipo="password"/> */}
//       {/* <button>Cadastrar</button>
//       <p>Bruna</p> */} 
//       <Home />
//       <Login />
//       {/* </Fragment> */}
//     // </div>
//   );
// }

export default App;
