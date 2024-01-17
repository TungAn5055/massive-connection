import { useEffect, useState } from 'react'
import { cancelApiCustomerSearch } from '@/store/thunks/customer.thunk'
import { apiGetStaffCodeAsync } from '@/store/thunks/getStaffCode.thunk'

const useCustomerSearch = () => {
  const [responseStaffCode, setResponseStaffCode] = useState(<any>{
    data: [],
    message: '',
    loading: false,
    state: ''
  })

  const requestGetStaffCode = function (params: any) {
    apiGetStaffCodeAsync(params, setResponseStaffCode)
  }

  // unmount;
  useEffect(() => {
    return () => {
      // reset data when unmount;
      cancelApiCustomerSearch()
    }
  }, [])

  return { responseStaffCode, requestGetStaffCode }
}

export default useCustomerSearch
