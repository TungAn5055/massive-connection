import { createStore, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import reducers from '@/store/reducers/root-reducer.ts'

const middleware = applyMiddleware(thunk)

export const store = createStore(reducers, middleware)
