import { cancel, getTokenSource } from '@/ultils/helper'
import axiosInstance from '@/configs/axios'
import { STATE } from '@/ultils/constants'

let source: any = null
export const cancelapiUploadFile = () => cancel(source)

export const apiUploadFileAsync = async (params: any, setResponse: any) => {
  setResponse({
    data: [],
    state: STATE.REQUEST,
    message: '',
    loading: true
  })
  cancelapiUploadFile()

  source = getTokenSource()

  try {
    const response = await axiosInstance.post('/api/upload-file', params, {
      headers: {
        'content-type': 'multipart/form-data',
      },
      cancelToken: source.token
    })

    if (response?.data) {
      setResponse({
        data: response.data,
        state: STATE.SUCCESS,
        message: '',
        loading: false
      })
    } else {
      setResponse({
        data: [],
        state: STATE.ERROR,
        message: '',
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