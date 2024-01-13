import { useEffect, useState } from 'react'
import { apiCustomerSearchAsync, cancelApiCustomerSearch } from '@/store/thunks/customer.thunk'

const useCustomerSearch = () => {
  const [responseSearchCustomer, setResponseSearchCustomer] = useState({
    data: [],
    message: '',
    loading: false,
    state: ''
  })

  const requestSearchCustomer = function (params: any) {
    apiCustomerSearchAsync(params, setResponseSearchCustomer)
  }

  // unmount;
  useEffect(() => {
    return () => {
      // reset data when unmount;
      cancelApiCustomerSearch()
    }
  }, [])

  return { responseSearchCustomer, requestSearchCustomer }
}

export default useCustomerSearch
