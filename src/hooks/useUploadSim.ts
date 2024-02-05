import { useEffect, useState } from 'react'
import { apiUploadSimAsync, cancelApiUploadSim } from '@/store/thunks/apiUploadSim.thunk'

const useUploadSim = () => {
  const [responseUploadFile, setResponseUploadFile] = useState(<any>{
    data: [],
    message: '',
    loading: false,
    state: ''
  })

  const requestUploadFile = function (params: any) {
    apiUploadSimAsync(params, setResponseUploadFile)
  }

  // unmount;
  useEffect(() => {
    return () => {
      // reset data when unmount;
      cancelApiUploadSim()
    }
  }, [])

  return { responseUploadFile, requestUploadFile }
}

export default useUploadSim
