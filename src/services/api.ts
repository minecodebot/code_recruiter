import axios from 'axios'

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_ENVIRONMENT === 'develop' ? 'http://localhost:3030' : 'https://code-recruiter-backend.vercel.app'
})

export default api
