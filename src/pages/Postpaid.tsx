import React from 'react'
import { FolderOpenFilled } from '@ant-design/icons'
import { Col, Row } from 'antd'

const Postpaid: React.FC = () => {
  return (
    <>
      <Row className='site-page-header'>
        <Col span={8} className='display-flex header-icon'>
          <FolderOpenFilled style={{ fontSize: '30px', color: '#000000' }} twoToneColor='#eb2f96' />
          <span className='page-header-heading-title'>Request new postpaid connection</span>
        </Col>
        <Col span={5} className='header-highlight-link grid'>
          <a href={'http://www.sunat.gob.pe/cl-ti-itmrconsruc/jcrS00Alias'} target='_blank'>
            RUC Information
          </a>
          <a href={'https://cel.reniec.gob.pe/valreg/valreg.do\n'} target='_blank'>
            DNI information
          </a>
        </Col>
      </Row>

      <Row className='site-page-content'>
        <Row className='site-page-content'>
          <span>Search customer</span>
          <Col span={10} className='display-flex header-icon'></Col>
          <Col span={12} className='display-flex header-icon'></Col>
          <Row className=''></Row>
          <Row className=''></Row>
        </Row>
      </Row>
    </>
  )
}

export default Postpaid
