import { useEffect, useState } from 'react'
import { matchRoutes } from 'react-router-dom'
import routes from '@/routes'
import { useDispatch } from 'react-redux'
import { loginWithHeader } from '@/store/thunks/auth.thunk'
import {
  apiCustomerSarchAsync,
  apiCustomerSearchAsync,
  cancelApiCustomerSearch,
  searchCustomer
} from '@/store/thunks/customer.thunk'

const useCustomerSearch = () => {
  const [responseSearchCustomer, setResponseSearchCustomer] = useState({
    data: [],
    message: '',
    loading: false,
    state: ''
  })

  const requestSearchCustomer = function (params) {
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
