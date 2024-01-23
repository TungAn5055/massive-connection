import { cancel, getTokenSource } from '@/ultils/helper'
import axiosInstance from '@/configs/axios'
import { STATE } from '@/ultils/constants'

let source: any = null
export const cancelSearchMassiveOrder = () => cancel(source)

export const apiSearchMassiveOrderAsync = async (params: any, setResponse: any) => {
  setResponse({
    data: [],
    state: STATE.REQUEST,
    message: '',
    loading: true
  })
  cancelSearchMassiveOrder()

  source = getTokenSource()

  try {
    const response = await axiosInstance.post('/api/search-massive-order', params, {
      cancelToken: source.token
    })

    if (response?.data) {
      setResponse({
        data: response.data?.data,
        totalPages: response.data?.totalPages,
        currentPage: response.data?.currentPage,
        state: STATE.SUCCESS,
        message: '',
        loading: false
      })
    } else {
      setResponse({
        data: [],
        totalPages: null,
        currentPage: 1,
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
