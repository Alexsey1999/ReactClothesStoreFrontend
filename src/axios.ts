import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3001/',
  responseType: 'json',
  withCredentials: true,
})

export default instance
