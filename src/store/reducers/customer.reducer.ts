import freeze from 'deep-freeze'
import { handleActions } from 'redux-actions'

const INITIAL_STATE = freeze({
  customerSearch: null,
  isLoadingSearchCustomer: null
})

export default handleActions(
  {
    // [actions.customerSearch]: (state) => {
    //   return freeze({
    //     ...state,
    //     isLoadingSearchCustomer: true
    //   })
    // },
    // [actions.customerSearchFail]: (state) => {
    //   return freeze({
    //     ...state,
    //     errorMessage: 'fetch error',
    //     isLoadingSearchCustomer: false
    //   })
    // },
    // [actions.customerSearchSuccess]: (state, actions) => {
    //   return freeze({
    //     ...state,
    //     customerSearch: actions.payload.ResultObj,
    //     isLoadingSearchCustomer: false
    //   })
    // }
  },
  INITIAL_STATE
)
