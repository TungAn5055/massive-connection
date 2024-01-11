import axios from 'axios'
import { getToken } from '@/ultils/token.ts'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 30000
})
console.log('baseURL+++', import.meta.env.VITE_BASE_URL)
axiosInstance.defaults.withCredentials = true

axiosInstance.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
axiosInstance.defaults.headers['Access-Control-Allow-Origin'] = '*'

axiosInstance.defaults.headers.post['Content-Type'] = 'application/json'
axiosInstance.defaults.headers.post['Access-Control-Allow-Origin'] = '*'

axiosInstance.interceptors.request.use(
  (configs) => {
    const jwtToken = getToken()

    // TODO: create middleware to ignore public url or external requests
    if (jwtToken) {
      configs.headers = { ...configs.headers, Authorization: `Bearer ${getToken()}` }
    }

    return configs
  },
  (error) => {
    console.error('Axios critical error =>', error)
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  (response) => {
    // TODO: handle generic errors
    return Promise.resolve(response.data)
  },
  (error) => {
    // TODO: handle generic errors
    if (error.response.status === 401) {
      window.location.href = '/logout'
    }
    return Promise.reject(error)
  }
)

export default axiosInstance
