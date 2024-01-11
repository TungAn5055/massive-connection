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
  const [response, setResponse] = useState({
    data: [],
    message: '',
    loading: false,
    state: ''
  })

  const request = function (params) {
    apiCustomerSearchAsync(params, setResponse)
  }

  // unmount;
  useEffect(() => {
    return () => {
      // reset data when unmount;
      cancelApiCustomerSearch()
    }
  }, [])

  return [response, request]
}

export default useCustomerSearch
