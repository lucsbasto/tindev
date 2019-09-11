import React from 'react'
import './Login.css'

import logo from '../assets/logo.svg';

export default function Login() {
    return (
        <div className="login-container">
            <form>
                <img src={logo} />
                <input placeholder="Digite seu usuário no Github."/>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

