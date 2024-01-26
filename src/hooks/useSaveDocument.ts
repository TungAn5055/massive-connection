import { useEffect, useState } from 'react'
import {apiSaveDocumentAsync, cancelApiSaveDocument} from "@/store/thunks/apiSaveDocument.thunk.ts";

const useSaveDocument = () => {
  const [responseSaveDocument, setResponseSaveDocument] = useState(<any>{
    data: [],
    message: '',
    loading: false,
    state: ''
  })

  const requestSaveDocument = function (params: any) {
    apiSaveDocumentAsync(params, setResponseSaveDocument)
  }

  // unmount;
  useEffect(() => {
    return () => {
      // reset data when unmount;
      cancelApiSaveDocument()
    }
  }, [])

  return { responseSaveDocument, requestSaveDocument }
}

export default useSaveDocument
