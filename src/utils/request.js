import axios from 'axios'
import Router from '@/router'

const service = axios.create({
  baseURL: "/api", // url = base url + request url
  timeout: 500000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})

export default service
