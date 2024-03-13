import { useEffect, useState } from 'react'
import { cancelApiDownloadFileSim } from '@/store/thunks/apiDownloadFileSim.thunk'
import { apiDownloadFileTempleSimAsync } from '@/store/thunks/apiDownloadFileTempleSim.thunk'

const useDownloadFileTempleSim = () => {
  const [responseDownloadTempleFile, setResponseDownloadTempleFile] = useState(<any>{
    data: [],
    message: '',
    loading: false,
    state: ''
  })

  const requestDownloadTempleFile = function () {
    apiDownloadFileTempleSimAsync(setResponseDownloadTempleFile)
  }

  // unmount;
  useEffect(() => {
    return () => {
      // reset data when unmount;
      cancelApiDownloadFileSim()
    }
  }, [])

  return { responseDownloadTempleFile, requestDownloadTempleFile }
}

export default useDownloadFileTempleSim
