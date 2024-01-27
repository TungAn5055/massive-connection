import { useEffect, useState } from 'react'
import { apiGetGroupInfoAsync, cancelApiGetGroupInfo } from '@/store/thunks/getGroupInfo'

const useGetGroupInfo = () => {
  const [responseGetGroupInfo, setGetGroupInfo] = useState(<any>{
    data: [],
    message: '',
    loading: false,
    state: ''
  })

  const requestGetGroupInfo = function (params: any) {
    apiGetGroupInfoAsync(params, setGetGroupInfo)
  }

  // unmount;
  useEffect(() => {
    return () => {
      // reset data when unmount;
      cancelApiGetGroupInfo()
    }
  }, [])

  return { responseGetGroupInfo, requestGetGroupInfo }
}

export default useGetGroupInfo
