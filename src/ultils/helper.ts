import axios from 'axios'
import { STATE } from '@/ultils/constants'

export function cancel(source: any) {
  source && source.cancel && source.cancel(STATE.UNMOUNT)
}

export const getTokenSource = () => {
  return axios.CancelToken.source()
}

export const formatPrice = val => {
  return val ? new Intl.NumberFormat().format(val) : val === 0 ? 0 : null;
};

export const colorRowTotal = info => {
  return {
    backgroundColor: info?.is_total  ? "#9fb5da" : "",
    fontWeight: info?.is_total ? "500" : ""
  };
};