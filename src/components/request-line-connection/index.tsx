import { useState } from 'react'
import { Col, Row } from 'antd'
import { Tabs } from 'antd'
import { UPLOAD_SIMS_TABS } from '@/ultils/constants'
import AttachedTab from '@/components/request-line-connection/tabs/AttachedTab.tsx'
import SuccessfulTab from '@/components/request-line-connection/tabs/SuccessfulTab.tsx'
import { FolderOpenFilled } from '@ant-design/icons'
import dayjs from 'dayjs'

const RequestLineConnectionContent = ({ contractNo }: any) => {
  const currentDate = dayjs().format('YYYY-MM-DD')
  const [activeTab, setActiveTab] = useState('1')
  const [_dataInfo, _setDataInfo] = useState({
    createdDate: currentDate,
    createdUser: '',
    custId: 31471655
  })
  const dataInfo = _dataInfo
  const setDataInfo = (data: any) => {
    Object.assign(dataInfo, { ...data })
    _setDataInfo({ ...dataInfo })
  }

  const onChangeTabs = () => {
    // setActiveTab(activeKey)
    return false
  }

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
                  {UPLOAD_SIMS_TABS.LINE}
                </span>
              }
              key='1'
              forceRender={true}
            >
              <AttachedTab
                dataInfo={dataInfo}
                setDataInfo={setDataInfo}
                contractNo={contractNo}
                setActiveTab={setActiveTab}
              />
            </Tabs.TabPane>
            <Tabs.TabPane
              tab={
                <span className={'title-tab-request'} key={2}>
                  {UPLOAD_SIMS_TABS.SUCCESSFUL}
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
