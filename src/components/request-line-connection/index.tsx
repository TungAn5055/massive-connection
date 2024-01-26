import { useEffect, useState } from 'react'
import { Col, Row } from 'antd'
import { Tabs } from 'antd'
import { CUSTOMER_INFO_TABS } from '@/ultils/constants'
import AttachedTab from '@/components/request-line-connection/tabs/AttachedTab.tsx'
import SuccessfulTab from '@/components/request-line-connection/tabs/SuccessfulTab.tsx'
import { FolderOpenFilled } from '@ant-design/icons'

const RequestLineConnectionContent = ({ dataCustomers = {} }: any) => {
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
    setDataInfoGroup({})
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
          <span className='page-header-heading-title'>Request of Line Connection</span>
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
                  {CUSTOMER_INFO_TABS.ATTACHED}
                </span>
              }
              key='1'
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
                <span className={'title-tab-request'} key={2}>
                  {CUSTOMER_INFO_TABS.SUCCESSFUL}
                </span>
              }
              key='2'
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

export default RequestLineConnectionContent
