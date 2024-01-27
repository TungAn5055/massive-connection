import { useEffect, useState } from 'react'
import { apiDownloadFileSimAsync, cancelApiDownloadFileSim } from '@/store/thunks/apiDownloadFileSim.thunk'

const useDownloadFileSim = () => {
  const [responseDownloadFile, setResponseDownloadFile] = useState(<any>{
    data: [],
    message: '',
    loading: false,
    state: ''
  })

  const requestDownloadFile = function (params: any) {
    apiDownloadFileSimAsync(params, setResponseDownloadFile)
  }

  // unmount;
  useEffect(() => {
    return () => {
      // reset data when unmount;
      cancelApiDownloadFileSim()
    }
  }, [])

  return { responseDownloadFile, requestDownloadFile }
}

export default useDownloadFileSim
