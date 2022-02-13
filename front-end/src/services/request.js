import axios from 'axios'
import service from './settings'

const instance = axios.create({
    baseURL: service.BASE_URL
})

export default instance
