import { message } from 'antd'
import * as apis from '@/apis/auth.api.ts'
import * as actions from '@/store/actions/auth.action.ts'

export const loginWithHeader = () => {
  return (dispatch) => {
    dispatch(actions.loginWithHeader())
    console.log('Start call authen++++')
    apis
      .login()
      .then((res) => {
       // console.log('res++++', res)
      })
      .catch((err) => dispatch(actions.loginWithHeaderFail(err.message)))
  }
}
