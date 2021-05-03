import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Auth from '../../api/Auth'

export const UserContext = createContext()

export const UserStorage = ({ children }) => {
    const [logged, setLogged] = useState(false)
    const [user, setUser] = useState()
    const navigate = useNavigate()

    async function getUser() {

    }
    async function userLogin(email, password) {
        const result = await Auth(email, password)
        setUser(result.user)
        navigate('/home')
    }
    return (
        <UserContext.Provider value={{ logged, user, userLogin }}>
            {children}
        </UserContext.Provider>
    )
}
