import { combineReducers } from 'redux'
import authReducer from './auth.reducer'

export const staticReducers = {
  auths: authReducer,
}

export default (history) =>
  combineReducers({
    ...staticReducers,
  })
