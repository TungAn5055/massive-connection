import { createAction } from 'redux-actions'

export const customerSearch = createAction('CUSTOMER/CUSTOMER_SEARCH')
export const customerSearchSuccess = createAction('CUSTOMER/CUSTOMER_SEARCH_SUCCESS')
export const customerSearchFail = createAction('CUSTOMER/CUSTOMER_SEARCH_FAIL')
