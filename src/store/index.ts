import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {thunk} from 'redux-thunk';
import reducers from '@/store/reducers/root-reducer.ts'


const middleware = applyMiddleware(thunk);

export const store = createStore(
    reducers,
    composeWithDevTools(middleware)
);