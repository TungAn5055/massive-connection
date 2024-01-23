import * as apis from '@/apis/auth.api.ts'
import * as actions from '@/store/actions/auth.action.ts'

export const loginWithHeader = () => {
  return (dispatch) => {
    dispatch(actions.loginWithHeader())
    apis
      .login()
      .then((res: any) => {
        console.log('res++++', res)
      })
      .catch((err) => dispatch(actions.loginWithHeaderFail(err.message)))
  }
}
