import axios from 'axios'

const localHost = 'http://localhost:5000'

const Auth = async(email, password) => {
    const response = await axios.post(`${localHost}/auth`, {
        email,
        password
    })
    return response.data
}

export default Auth