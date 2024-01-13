import freeze from 'deep-freeze'
import { handleActions } from 'redux-actions'

const INITIAL_STATE = freeze({
  account: null,
  isLoading: null
})

export default handleActions(
  {
    // [actions.loginWithHeader]: (state: any) => {
    //   return freeze({
    //     ...state,
    //     isLoading: true
    //   })
    // },
    // [actions.loginWithHeaderSuccess]: (state: any, actions: any) => {
    //   return freeze({
    //     ...state,
    //     account: actions.payload.ResultObj,
    //     isLoading: false
    //   })
    // },
    // [actions.loginWithHeaderFail]: (state: any) => {
    //   return freeze({
    //     ...state,
    //     errorMessage: 'fetch error',
    //     isLoading: false
    //   })
    // }
  },
  INITIAL_STATE
)
