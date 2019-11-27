import React from 'react'
import Input from '../componentes/Input/Input';
import Button from '../componentes/Button/Button';

import './Login.css'

const Login = (props) => (
    <div>
        <form className="login-form">
            <div className="group-label">
                <label>Usuário:</label>
                <input tipo="text"></input>
            </div>
        
            <div className="group-label">
                <label>Senha:</label>
                <input password="password"></input>
            </div>       
                <Button>Entrar</Button> 
        </form>
    </div>
);

export default Login;