import React, { useContext } from 'react'
import Auth from '../../api/Auth'
import { useState } from 'react'
import { UserContext } from '../User/Storage'


const Login = () => {
    const { userLogin } = useContext(UserContext)
    const [emailInput, setEmailInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')


    function emailHandler(e) {
        setEmailInput(e.target.value)
    }
    function passwordHandler(e) {
        setPasswordInput(e.target.value)
    }

    async function Login() {
        userLogin(emailInput, passwordInput)
    }

    return (
        <div>
            <label>
                <h3>E-mail</h3>
                <input onChange={emailHandler} name="email" type="email" placeholder="Digite seu e-mail..." />
            </label>
            <label>
                <h3>Senha</h3>
                <input onChange={passwordHandler} name="password" type="password" placeholder="Digite sua senha..." />
            </label>
            <button onClick={Login}>Entrar</button>
        </div>
    )
}

export default Login