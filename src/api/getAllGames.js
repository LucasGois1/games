import axios from 'axios'

const localHost = 'http://localhost:5000'


const getAllGames = async(token) => {
    const response = await axios(`${localHost}/games`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    console.log(response.data)
    return response.data.games
        // },
        // getOneGame: (id) => {
        //     const response = axios(`${localHost}/${id}`)
        //         .then((response) => {
        //             return response.data
        //         })
        //         .catch((error) => {
        //             console.log(error)
        //         })
        // 
}
export default getAllGames