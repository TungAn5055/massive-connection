import { cancel, getTokenSource } from '@/ultils/helper'
import axiosInstance from '@/configs/axios'
import { STATE } from '@/ultils/constants'

let source: any = null
export const cancelApiSaveDocument = () => cancel(source)

export const apiSaveDocumentAsync = async (params: any, setResponse: any) => {
  setResponse({
    data: [],
    state: STATE.REQUEST,
    message: '',
    loading: true
  })
  cancelApiSaveDocument()

  source = getTokenSource()

  try {
    const response: any = await axiosInstance.post('/api/save-attach-document', params, {
      cancelToken: source.token
    })

    if (response?.data) {
      setResponse({
        data: response.data,
        state: STATE.SUCCESS,
        message: response?.status?.message,
        loading: false
      })
    } else {
      setResponse({
        data: [],
        state: STATE.ERROR,
        message: response?.status?.message,
        loading: false
      })
    }
  } catch (error: any) {
    setResponse({
      data: [],
      state: STATE.ERROR,
      message: error?.message || '',
      loading: false
    })
  }
}
