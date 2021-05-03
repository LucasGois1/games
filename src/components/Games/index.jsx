import React, { useContext } from 'react'
import getAllGames from '../../api/getAllGames'
import { UserContext } from '../User/Storage'
import { useEffect, useState } from 'react';

const Games = () => {
    const [games, setGames] = useState([])
    const { user } = useContext(UserContext)
    useEffect(() => {
        async function fetchData() {
            const response = await getAllGames(user.token)
            setGames(response)
        }
        fetchData()
    }, [])
    return (
        <>
            <div>
                <h1>Olá {user.name}!</h1>
                {games.length > 0 ?
                    <div>
                        {games.map((game) => {
                            return (
                                <div key={game.id}>{game.name}</div>
                            )
                        })}
                    </div> : <div>Nenhum jogo encontrado</div>
                }
            </div>
            <div>
                <form action="http://localhost:5000/games" method="post">
                    <input type="text" name="name" id="name" placeholder="Digite o nome do jogo" />
                    <input type="number" name="year" id="year" placeholder="Digite o ano do jogo" />
                    <input type="number" name="price" id="price" placeholder="Digite o preco do jogo" />
                    <button type="submit">Adicionar</button>
                </form>
            </div>
        </>
    );
}
export default Games