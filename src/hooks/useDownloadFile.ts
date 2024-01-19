import { useEffect, useState } from 'react'
import { cancelApiCustomerSearch } from '@/store/thunks/customer.thunk'
import { apiUploadFileAsync } from '@/store/thunks/apiUploadFile.thunk'

const useDownloadFile = () => {
  const [responseUploadFile, setResponseUploadFile] = useState(<any>{
    data: [],
    message: '',
    loading: false,
    state: ''
  })

  const requestUploadFile = function (params: any) {
    apiUploadFileAsync(params, setResponseUploadFile)
  }

  // unmount;
  useEffect(() => {
    return () => {
      // reset data when unmount;
      cancelApiCustomerSearch()
    }
  }, [])

  return { responseUploadFile, requestUploadFile }
}

export default useDownloadFile
