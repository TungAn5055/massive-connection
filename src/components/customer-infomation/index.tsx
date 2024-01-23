import { useEffect, useState } from 'react'
import { Col, Row } from 'antd'
import { Tabs } from 'antd'
import { CUSTOMER_INFO_TABS } from '@/ultils/constants'
import CustomerInfoTab from '@/components/customer-infomation/tabs/CustomerInfoTab'
import LineInfoTab from '@/components/customer-infomation/tabs/LineInfoTab'
import AttachedTab from '@/components/customer-infomation/tabs/AttachedTab.tsx'
import SuccessfulTab from '@/components/customer-infomation/tabs/SuccessfulTab.tsx'
import { FolderOpenFilled } from '@ant-design/icons'

const CustomerInformation = ({ dataCustomers = {} }: any) => {
  const [activeTab, setActiveTab] = useState('1')
  const [contractNo, setContractNo] = useState(null)

  const [_dataInfo, _setDataInfo] = useState({})
  const dataInfo = _dataInfo
  const setDataInfo = (data: any) => {
    Object.assign(dataInfo, { ...data })
    _setDataInfo({ ...dataInfo })
  }

  const [dataInfoGroup, setDataInfoGroup] = useState({})

  const onChangeTabs = () => {
    // setActiveTab(activeKey)
    return false
  }

  useEffect(() => {
    if (dataCustomers?.custId) {
      setDataInfo({
        custId: dataCustomers?.custId
      })
    }
  }, [dataCustomers])
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
              <CustomerInfoTab
                key={'customer'}
                dataInfo={dataInfo}
                setDataInfo={setDataInfo}
                setActiveTab={setActiveTab}
                dataCustomer={dataCustomers}
              />
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
              <LineInfoTab
                key={'line'}
                dataInfo={dataInfo}
                setDataInfo={setDataInfo}
                setDataInfoGroup={setDataInfoGroup}
                dataCustomer={dataCustomers}
                setActiveTab={setActiveTab}
              />
            </Tabs.TabPane>
            <Tabs.TabPane
              tab={
                <span className={'title-tab-request'} key={3}>
                  {CUSTOMER_INFO_TABS.ATTACHED}
                </span>
              }
              key='3'
              forceRender={true}
            >
              <AttachedTab
                dataInfo={dataInfo}
                dataInfoGroup={dataInfoGroup}
                setDataInfo={setDataInfo}
                setContractNo={setContractNo}
                setActiveTab={setActiveTab}
              />
            </Tabs.TabPane>
            <Tabs.TabPane
              tab={
                <span className={'title-tab-request'} key={4}>
                  {CUSTOMER_INFO_TABS.SUCCESSFUL}
                </span>
              }
              key='4'
              forceRender={true}
            >
              <SuccessfulTab key={'successful'} contractNo={contractNo} />
            </Tabs.TabPane>
          </Tabs>
        </Row>
      </Row>
    </>
  )
}

export default CustomerInformation
