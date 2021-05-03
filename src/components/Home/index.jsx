import React, { useContext } from 'react'
import { UserContext } from '../User/Storage'

const Home = () => {
    const { user } = useContext(UserContext)
    return (
        <div>
            {user ?
                <div>
                    Olá {user.name}
                </div> :
                <div>
                    Bem vindo ao site de games
                </div>
            }
        </div>
    )
}
export default Home