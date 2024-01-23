import { useEffect, useState } from 'react'
import { cancelApiSaveContact } from "@/store/thunks/apiSaveContact.thunk.ts";
import {apiSaveGroupAsync} from "@/store/thunks/apiSaveGroup.thunk.ts";

const useSaveGroup = () => {
  const [responseSaveGroup, setResponseSaveGroup] = useState(<any>{
    data: [],
    message: '',
    loading: false,
    state: ''
  })

  const requestSaveGroup = function (params: any) {
    apiSaveGroupAsync(params, setResponseSaveGroup)
  }

  // unmount;
  useEffect(() => {
    return () => {
      // reset data when unmount;
      cancelApiSaveContact()
    }
  }, [])

  return { responseSaveGroup, requestSaveGroup }
}

export default useSaveGroup
