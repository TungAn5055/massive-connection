import axios from 'axios'
import { STATE } from '@/ultils/constants'

export function cancel(source: any) {
  source && source.cancel && source.cancel(STATE.UNMOUNT)
}

export const getTokenSource = () => {
  return axios.CancelToken.source()
}

export const formatPrice = (val) => {
  return val ? new Intl.NumberFormat().format(val) : val === 0 ? 0 : null
}

export const colorRowTotal = (info) => {
  return {
    backgroundColor: info?.is_total ? '#9fb5da' : '',
    fontWeight: info?.is_total ? '500' : ''
  }
}

export function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })
}

export function convertForDataSource(list) {
  if (typeof list === 'object') {
    const res: any = []
    Object.keys(list)?.forEach((it) => {
      res.push({
        label: list[it],
        value: it
      })
    })

    return res
  } else {
    return list
  }
}

export const convertObjectToArraySource = (objects: any) => {
  const arr: any = []
  if (Object.keys(objects)?.length > 0) {
    Object.keys(objects).forEach((it) => {
      if (objects[parseInt(it)]) {
        arr.push({ value: it, label: objects[parseInt(it)] })
      }
    })
  }

  return arr
}
