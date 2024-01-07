import React, { useMemo, useState } from 'react'
import { FolderOpenFilled } from '@ant-design/icons'
import { Button, Col, Form, Input, Row, Select, Space } from 'antd'
import { Tabs } from 'antd'
import { CUSTOMER_INFO_TABS } from '@/ultils/constants'
import CustomerInfoTab from '@/components/customer-infomation/CustomerInfoTab'
import LineInfoTab from '@/components/customer-infomation/LineInfoTab'

const CustomerInformation: React.FC = () => {
  const [valueType, setValueType] = useState(null)
  const [valueIdentity, setValueIdentity] = useState(null)
  const [activeTab, setActiveTab] = useState('1')

  const [_dataInfo, _setDataInfo] = useState({})
  const dataInfo = _dataInfo

  const setDataInfo = (data) => {
    Object.assign(dataInfo, { ...data })
    _setDataInfo({ ...dataInfo })
  }

  const onChangeTabs = (activeKey) => {
    setActiveTab(activeKey)
    // return false
  }
  const onFinish = (values) => {
    console.log('Received values:', values)
  }
  return (
    <>
      <Row className='site-page-header'>
        <Col span={8} className='display-flex header-icon'>
          <FolderOpenFilled style={{ fontSize: '30px', color: '#000000' }} />
          <span className='page-header-heading-title'>Connect postpaid subscriptor</span>
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
                  {CUSTOMER_INFO_TABS.INFO}
                </span>
              }
              key='1'
            >
              <CustomerInfoTab dataInfo={dataInfo} setDataInfo={setDataInfo} />
            </Tabs.TabPane>
            <Tabs.TabPane
              tab={
                <span className={'title-tab-request'} key={2}>
                  {CUSTOMER_INFO_TABS.LINE}
                </span>
              }
              key='2'
              forceRender={true}
            >
              <LineInfoTab dataInfo={dataInfo} setDataInfo={setDataInfo} />
            </Tabs.TabPane>
            <Tabs.TabPane
              tab={
                <span className={'title-tab-request'} key={3}>
                  {CUSTOMER_INFO_TABS.ATTACHED}
                </span>
              }
              key='3'
              forceRender={true}
            ></Tabs.TabPane>
            <Tabs.TabPane
              tab={
                <span className={'title-tab-request'} key={4}>
                  {CUSTOMER_INFO_TABS.SUCCESSFUL}
                </span>
              }
              key='4'
              forceRender={true}
            ></Tabs.TabPane>
          </Tabs>
        </Row>
      </Row>
    </>
  )
}

export default CustomerInformation
