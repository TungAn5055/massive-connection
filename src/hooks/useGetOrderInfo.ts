import { useEffect, useState } from 'react'
import { cancelApiSaveContact } from "@/store/thunks/apiSaveContact.thunk.ts";
import {apiGetOrderInfoAsync} from "@/store/thunks/getOrderInfo.thunk.ts";

const useGetOrderInfo = () => {
  const [responseGetOrderInfo, setResponseGetOrderInfo] = useState(<any>{
    data: [],
    message: '',
    loading: false,
    state: ''
  })

  const requestGetOrderInfo = function (params: any) {
    apiGetOrderInfoAsync(params, setResponseGetOrderInfo)
  }

  // unmount;
  useEffect(() => {
    return () => {
      // reset data when unmount;
      cancelApiSaveContact()
    }
  }, [])

  return { responseGetOrderInfo, requestGetOrderInfo }
}

export default useGetOrderInfo
