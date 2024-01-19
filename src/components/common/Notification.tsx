import { notification } from 'antd'
import { NOTIFICATION } from '@/ultils/constants'

export const NotificationInfo = (title, message) => {
  // Mục đích -> để truyền tham 1 tham số(nội dung) -> đỡ lặp lại nhiều lần title
  if (title + message === title) {
    notification.info({
      message: NOTIFICATION.INFO,
      description: title,
      placement: 'bottomRight',
      duration: 3
    })
  } else {
    notification.info({
      message: title,
      description: message,
      placement: 'bottomRight',
      duration: 3
    })
  }
}

export const NotificationSuccess = (title, message) => {
  // Mục đích -> để truyền tham 1 tham số(nội dung) -> đỡ lặp lại nhiều lần title
  if (title + message === title) {
    notification.success({
      message: NOTIFICATION.SUCCESS,
      description: title,
      placement: 'bottomRight',
      duration: 3
    })
  } else {
    notification.success({
      message: title,
      description: message,
      placement: 'bottomRight',
      duration: 2
    })
  }
}

export const NotificationError = (title = '', message = '', duration = 3) => {
  if (title + message === title) {
    notification.error({
      message: NOTIFICATION.ERROR,
      description: title,
      placement: 'bottomRight',
      duration: 3
    })
  } else {
    notification.error({
      message: title,
      description: message,
      placement: 'bottomRight',
      duration: duration
    })
  }
}

export const NotificationWarning = (title = '', message = '', duration = 2) => {
  notification.warning({
    message: title,
    description: message,
    placement: 'bottomRight',
    duration: duration
  })
}
