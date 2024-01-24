import { useEffect, useState } from 'react'
import {apiGetCloseOrderInfoAsync, cancelGetCloseOrderInfo} from "@/store/thunks/getCloseOrderInfo.thunk.ts";

const useGetCloserOrderInfo = () => {
  const [responseCloseOrderInfo, setResponseCloseOrderInfo] = useState(<any>{
    data: [],
    message: '',
    loading: false,
    state: ''
  })

  const requestCloseOrderInfo = function (params: any) {
    apiGetCloseOrderInfoAsync(params, setResponseCloseOrderInfo)
  }

  // unmount;
  useEffect(() => {
    return () => {
      // reset data when unmount;
      cancelGetCloseOrderInfo()
    }
  }, [])

  return { responseCloseOrderInfo, requestCloseOrderInfo }
}

export default useGetCloserOrderInfo
