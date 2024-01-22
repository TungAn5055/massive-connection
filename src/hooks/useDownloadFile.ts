import { useEffect, useState } from 'react'
import { cancelApiCustomerSearch } from '@/store/thunks/customer.thunk'
import { apiDownloadFileAsync } from '@/store/thunks/apiDownloadFile.thunk'

const useDownloadFile = () => {
  const [responseDownloadFile, setResponseDownloadFile] = useState(<any>{
    data: [],
    message: '',
    loading: false,
    state: ''
  })

  const requestDownloadFile = function (params: any) {
    apiDownloadFileAsync(params, setResponseDownloadFile)
  }

  // unmount;
  useEffect(() => {
    return () => {
      // reset data when unmount;
      cancelApiCustomerSearch()
    }
  }, [])

  return { responseDownloadFile, requestDownloadFile }
}

export default useDownloadFile
