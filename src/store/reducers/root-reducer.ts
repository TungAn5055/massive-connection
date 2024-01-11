import { combineReducers } from 'redux'
import authReducer from './auth.reducer'
import customerReducer from './customer.reducer'

export const staticReducers = {
  auths: authReducer,
  customers: customerReducer
}

export default () =>
  combineReducers({
    ...staticReducers
  })
