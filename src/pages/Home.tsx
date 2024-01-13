import React from 'react'
import { Col, Row } from 'antd'
import { FolderOpenFilled } from '@ant-design/icons'

const Home: React.FC = () => {
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
