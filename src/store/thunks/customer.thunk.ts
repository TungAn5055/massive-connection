import { cancel, getTokenSource } from '@/ultils/helper'
import axiosInstance from '@/configs/axios'
import { STATE } from '@/ultils/constants'

let source: any = null
export const cancelApiCustomerSearch = () => cancel(source)

export const apiCustomerSearchAsync = async (params: any, setResponse: any) => {
  setResponse({
    data: [],
    state: STATE.REQUEST,
    message: '',
    loading: true
  })
  cancelApiCustomerSearch()

  source = getTokenSource()

  try {
    const response: any = await axiosInstance.post('/api/search-customer', params, {
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
