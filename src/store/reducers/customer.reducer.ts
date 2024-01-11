import freeze from 'deep-freeze'
import { handleActions } from 'redux-actions'

import * as actions from '@/store/actions/customer.action'
import { customerSearch, customerSearchFail, customerSearchSuccess } from '@/store/actions/customer.action'

const INITIAL_STATE = freeze({
  customerSearch: null,
  isLoadingSearchCustomer: null
})

export default handleActions(
  {
    [actions.customerSearch]: (state) => {
      return freeze({
        ...state,
        isLoadingSearchCustomer: true
      })
    },
    [actions.customerSearchSuccess]: (state, actions) => {
      return freeze({
        ...state,
        customerSearch: actions.payload.ResultObj,
        isLoadingSearchCustomer: false
      })
    },
    [actions.customerSearchFail]: (state) => {
      return freeze({
        ...state,
        errorMessage: 'fetch error',
        isLoadingSearchCustomer: false
      })
    }
  },
  INITIAL_STATE
)
