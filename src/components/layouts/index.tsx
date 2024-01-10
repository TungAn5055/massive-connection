import '@/assets/css/antd-custom.css'
import { Layout, Spin } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'
const { Content } = Layout
import CustomMenu from '@/components/common/Menu.tsx'
import usePageTitle from '@/hooks/ usePageTitle'
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {loginWithHeader} from "@/store/thunks/auth.thunk.ts";
// import LoadingScreen from '@components/common/LoadingScreen'

const Layouts = ({ children }) => {
  const location = useLocation()
  usePageTitle({ pathname: location?.pathname })

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(loginWithHeader())
    }, []);
  return (
    <Layout>
      {/*<Header>*/}
      <CustomMenu />
      <Content className='layout-content-main'>{children ? children : <Spin />}</Content>
      {/*<Footer style={{ textAlign: 'center' }}>©2024 Massive Connection</Footer>*/}
    </Layout>
  )
}

export default Layouts
