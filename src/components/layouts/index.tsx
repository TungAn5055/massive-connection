import '@/assets/css/antd-custom.css'
import { Layout, Spin } from 'antd'
import { useLocation } from 'react-router-dom'
const { Content } = Layout
import CustomMenu from '@/components/common/Menu.tsx'
import usePageTitle from '@/hooks/usePageTitle.ts'
// import LoadingScreen from '@components/common/LoadingScreen'

const Layouts = ({ children }) => {
  const location = useLocation()
  usePageTitle({ pathname: location?.pathname })

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
