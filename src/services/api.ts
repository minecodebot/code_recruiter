import axios from 'axios'

const api = axios.create({
    baseURL: 'https://code-recruiter-backend-b823oiy9n.vercel.app'
})

export default api