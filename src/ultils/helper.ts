import axios from 'axios'
import { STATE } from '@/ultils/constants'

export function cancel(source: any) {
  source && source.cancel && source.cancel(STATE.UNMOUNT)
}

export const getTokenSource = () => {
  return axios.CancelToken.source()
}
