import { cancel, getTokenSource } from '@/ultils/helper'
import axiosInstance from '@/configs/axios'
import { STATE } from '@/ultils/constants'

let source: any = null
export const cancelApiDownloadFileSim = () => cancel(source)

export const apiDownloadFileSimAsync = async (params: any, setResponse: any) => {
  setResponse({
    data: [],
    state: STATE.REQUEST,
    message: '',
    loading: true
  })
  cancelApiDownloadFileSim()

  source = getTokenSource()

  try {
    const response: any = await axiosInstance.post('/api/download-file', params, {
      cancelToken: source.token,
      responseType: 'arraybuffer',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (response) {
      setResponse({
        data: response,
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
