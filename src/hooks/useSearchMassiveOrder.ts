import { useEffect, useState } from 'react'
import { apiSearchMassiveOrderAsync, cancelSearchMassiveOrder } from '@/store/thunks/searchMassiveOrder.thunk'

const useSearchMassiveOrder = () => {
  const [responseMassiveOrder, setResponseMassiveOrder] = useState(<any>{
    data: [],
    message: '',
    loading: false,
    state: ''
  })

  const requestSearchMassiveOrder = function (params: any) {
    apiSearchMassiveOrderAsync(params, setResponseMassiveOrder)
  }

  // unmount;
  useEffect(() => {
    return () => {
      // reset data when unmount;
      cancelSearchMassiveOrder()
    }
  }, [])

  return { responseMassiveOrder, requestSearchMassiveOrder }
}

export default useSearchMassiveOrder
