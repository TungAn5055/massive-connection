import React, { useState } from 'react'
import { Col, Row, Tabs } from 'antd'
import { FolderOpenFilled } from '@ant-design/icons'
import { CUSTOMER_NEW_LINE_TABS } from '@/ultils/constants.ts'

const NewLineConnection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('1')
  const [_dataInfo, _setDataInfo] = useState({})
  // const dataInfo = _dataInfo

  // const setDataInfo = (data) => {
  //   Object.assign(dataInfo, { ...data })
  //   _setDataInfo({ ...dataInfo })
  // }
  const onChangeTabs = (activeKey: any) => {
    setActiveTab(activeKey)
    // return false
  }

  return (
    <>
      <Row className='site-page-header'>
        <Col span={8} className='display-flex header-icon'>
          <FolderOpenFilled style={{ fontSize: '30px', color: '#000000' }} twoToneColor='#eb2f96' />
          <span className='page-header-heading-title'>Request new line connection</span>
        </Col>
      </Row>

      <Row className='site-page-content'>
        <Row className={'content-customer-information'}>
          <Tabs
            defaultActiveKey={activeTab}
            activeKey={activeTab}
            onTabClick={onChangeTabs}
            type='card'
            style={{ width: '100%' }}
          >
            <Tabs.TabPane
              tab={
                <span className={'title-tab-request'} key={1}>
                  {CUSTOMER_NEW_LINE_TABS.INFO}
                </span>
              }
              key='1'
            >
              {/*<CustomerInfoTab dataInfo={dataInfo} setDataInfo={setDataInfo} setActiveTab={setActiveTab}/>*/}
            </Tabs.TabPane>
            <Tabs.TabPane
              tab={
                <span className={'title-tab-request'} key={2}>
                  {CUSTOMER_NEW_LINE_TABS.LINE}
                </span>
              }
              key='2'
              forceRender={true}
            ></Tabs.TabPane>
            <Tabs.TabPane
              tab={
                <span className={'title-tab-request'} key={3}>
                  {CUSTOMER_NEW_LINE_TABS.ATTACHED}
                </span>
              }
              key='3'
              forceRender={true}
            ></Tabs.TabPane>
          </Tabs>
        </Row>
      </Row>
    </>
  )
}

export default NewLineConnection
