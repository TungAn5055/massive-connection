import { useEffect, useState } from 'react'
import {apiSaveContactAsync, cancelApiSaveContact} from "@/store/thunks/apiSaveContact.thunk.ts";

const useSaveContract = () => {
  const [responseSaveContract, setResponseSaveContract] = useState(<any>{
    data: [],
    message: '',
    loading: false,
    state: ''
  })

  const requestSaveContract = function (params: any) {
    apiSaveContactAsync(params, setResponseSaveContract)
  }

  // unmount;
  useEffect(() => {
    return () => {
      // reset data when unmount;
      cancelApiSaveContact()
    }
  }, [])

  return { responseSaveContract, requestSaveContract }
}

export default useSaveContract
