import React, { useContext } from 'react'
import { UserContext } from '../User/Storage'
import {
    Navigate,
    Route
} from 'react-router-dom'

const ProtectedRoute = (props) => {
    const { user } = useContext(UserContext)
    if (user) {
        console.log(user)
        return <Route {...props} />
    } else {
        return <Navigate to="/login" />
    }
}

export default ProtectedRoute