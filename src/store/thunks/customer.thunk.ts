import { message } from 'antd'
import * as apis from '@/apis/auth.api.ts'
import * as actions from '@/store/actions/customer.action'
import { cancel, getTokenSource } from '@/ultils/helper'
import axiosInstance from '@/configs/axios'
import { STATE } from '@/ultils/constants'

let source = null
export const cancelApiCustomerSearch = () => cancel(source)

export const apiCustomerSearchAsync = async (params, setResponse) => {
  setResponse({
    data: [],
    state: STATE.REQUEST,
    message: '',
    loading: true
  })
  cancelApiCustomerSearch()

  source = getTokenSource()

  try {
    const response = await axiosInstance.post('/api/search-customer', params, {
      cancelToken: source.token
    })

    console.log('response++++', response)
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
  } catch (error) {
    setResponse({
      data: [],
      state: STATE.ERROR,
      message: error?.message || '',
      loading: false
    })
  }
}
