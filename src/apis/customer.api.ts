import axiosInstance from '../configs/axios'

export const searchCustomer = () => {
  return axiosInstance.post('/api/search-customer')
}
