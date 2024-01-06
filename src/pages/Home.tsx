import React from 'react'
import { Button, Col, Row } from 'antd'
import { useNavigate } from 'react-router-dom'
import { FolderOpenFilled, LoginOutlined } from '@ant-design/icons'

const Home: React.FC = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    // Thực hiện điều hướng bằng cách sử dụng history.push
    navigate('/about')
  }

  return (
    <>
      <Row className='site-page-header'>
        <Col span={8} className='display-flex header-icon'>
          <FolderOpenFilled style={{ fontSize: '30px', color: '#000000' }} />
          <span className='page-header-heading-title'>Homepage</span>
        </Col>
      </Row>
    </>
  )
}

export default Home
