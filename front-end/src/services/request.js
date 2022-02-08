import axios from 'axios'
import {BASE_URL} from './settings'

const instance = axios.create({
    base_URL: BASE_URL
})

export default instance
