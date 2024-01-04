import '@/assets/css/index.css'
import { Layout , Spin, Menu } from 'antd'
import { useEffect, useState } from 'react'
import {useLocation, useNavigate} from "react-router-dom";
const {  Content, Footer, Header } = Layout
import CustomMenu from "@/components/common/Menu.tsx";
// import LoadingScreen from '@components/common/LoadingScreen'

const Layouts = ({ children }) => {
  return (
      <Layout>
          {/*<Header>*/}
          <CustomMenu />
          <Content className="px-8 pb-3 mobile:px-[12px] relative">{children ? children : <Spin />}</Content>
          {/*<Footer style={{ textAlign: 'center' }}>©2024 Massive Connection</Footer>*/}
      </Layout>
  )
}

export default Layouts
