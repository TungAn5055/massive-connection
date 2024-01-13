import axiosInstance from '../configs/axios'

export const login = () => {
  return axiosInstance.get('/api/auth/sign-in')
}
