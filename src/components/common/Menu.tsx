import React, { useCallback, useEffect, useState } from 'react'
import { Menu } from 'antd'
import { Link, Route, useLocation, useNavigate } from 'react-router-dom'
import routes from '@/routes'
import * as _ from 'lodash'
import SubMenu from 'antd/es/menu/SubMenu'
import { FileImageOutlined } from '@ant-design/icons'

const CustomMenu: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [current, setCurrent] = useState('home')
  const onClick = (e: any) => {
    setCurrent(e.key)
    navigate(`/${e.key}`)
  }

  const renderMenu = (route, index) => {
    if (route.children && !_.isEmpty(route.children)) {
      return (
        <SubMenu
          key={route?.key}
          title={
            <>
              {route?.show_icon && <FileImageOutlined style={{ marginRight: '10px' }} />}
              {route?.title}
            </>
          }
        >
          {route.children?.map((child, index) => {
            if (child.children && !_.isEmpty(child.children)) {
              return renderMenu(child, index)
            } else {
              return (
                <Menu.Item key={child?.key}>
                  <Link to={child?.path}>
                    {child?.show_icon && <FileImageOutlined style={{ marginRight: '10px' }} />}
                    {child?.title}
                  </Link>
                </Menu.Item>
              )
            }
          })}
        </SubMenu>
      )
    } else {
      return (
        <Menu.Item key={route?.key}>
          <Link to={route?.path}>
            {route?.show_icon && <FileImageOutlined style={{ marginRight: '10px' }} />}
            {route?.title}
          </Link>
        </Menu.Item>
      )
    }
  }

  useEffect(() => {
    if (location?.pathname) {
      if (location?.pathname === '/') {
        setCurrent('home')
      } else {
        setCurrent(location?.pathname.replace('/', ''))
      }
    }
  }, [location?.pathname])

  return (
    <Menu mode='horizontal' selectedKeys={[current]} className='content-menu'>
      {routes
        ?.filter((it) => it?.show_in_menu)
        .map((route, index) => {
          return renderMenu(route, index)
        })}
    </Menu>
  )
}

export default CustomMenu
