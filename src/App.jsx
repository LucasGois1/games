import React, { useContext } from 'react'
import Games from './components/Games'
import Login from './components/Login'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'

import { UserContext, UserStorage } from './components/User/Storage'
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom'



function App() {
    return (
        <BrowserRouter>
            <UserStorage>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <ProtectedRoute path="/home" element={<Home />} />
                </Routes>
            </UserStorage>
        </BrowserRouter >
    )
}

export default App;
