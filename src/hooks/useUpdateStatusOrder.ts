import { useEffect, useState } from 'react'
import { cancelApiSaveContact} from "@/store/thunks/apiSaveContact.thunk.ts";
import {apiUpdateStatusOrderAsync} from "@/store/thunks/apiUpdateStatusOrder.thunk.ts";

const useUpdateStatusOrder = () => {
  const [responseUpdateStatusOrder, setResponseUpdateStatusOrder] = useState(<any>{
    data: [],
    message: '',
    loading: false,
    state: ''
  })

  const requestUpdateStatusOrder = function (params: any) {
    apiUpdateStatusOrderAsync(params, setResponseUpdateStatusOrder)
  }

  // unmount;
  useEffect(() => {
    return () => {
      // reset data when unmount;
      cancelApiSaveContact()
    }
  }, [])

  return { responseUpdateStatusOrder, requestUpdateStatusOrder }
}

export default useUpdateStatusOrder
