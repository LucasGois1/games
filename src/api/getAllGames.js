import axios from 'axios'

const localHost = 'http://localhost:5000'


const getAllGames = async() => {
    const response = await axios(`${localHost}/games`)
    return response.data
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