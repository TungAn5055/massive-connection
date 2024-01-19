import { useState } from 'react'
import { Col, Row } from 'antd'
import { Tabs } from 'antd'
import { CUSTOMER_INFO_TABS } from '@/ultils/constants'
import CustomerInfoTab from '@/components/customer-infomation/tabs/CustomerInfoTab'
import LineInfoTab from '@/components/customer-infomation/tabs/LineInfoTab'
import AttachedTab from '@/components/customer-infomation/tabs/AttachedTab.tsx'
import SuccessfulTab from '@/components/customer-infomation/tabs/SuccessfulTab.tsx'
import { FolderOpenFilled } from '@ant-design/icons'

const CustomerInformation = ({ dataCustomers = {} }: any) => {
  // const dataCustomer = {
  //   busType: 'COMP',
  //   idType: 3,
  //   idNo: '10432498404',
  //   idIssueDate: '2019-04-07',
  //   idExpireDate: '2026-10-03',
  //   name: 'Patricia Espinoza Hernandez',
  //   nationality: 'PER',
  //   address: 'CALLE CALLAO 119  , ICA - ICA - SUBTANJALLA',
  //   email: 'notiene@gmail.com',
  //   province: '11',
  //   district: '01',
  //   precinct: '12',
  //   home: 'CALLE CALLAO 119',
  //   repreCustName: 'Patricia Espinoza Hernandez',
  //   repreCustBirthDate: '1983-07-08',
  //   repreCustIdNo: '43249840',
  //   repreCustIdType: 1,
  //   repreCustIdIssueDate: '2019-04-07',
  //   repreCustIdIssuePlace: 'LIMA',
  //   repreCustIdExpireDate: '2026-10-03',
  //   repreCustTelFax: '999999999',
  //   activitiesField: 'COMERCIO',
  //   landlineNo: null,
  //   mobileNo: '927370562',
  //   repreName: 'Patricia',
  //   repreLastNameFather: 'Espinoza',
  //   repreLastNameMother: 'Hernandez',
  //   areaCode: '110112',
  //   areaName: 'ICA - ICA - SUBTANJALLA',
  //   busTypeName: 'COMPANY',
  //   typeName: 'RUC',
  //   repreCustTypeName: 'DNI',
  //   contractInfo: {
  //     contractTypeCode: '0',
  //     billCycleFrom: 6,
  //     signDate: null,
  //     effectDate: '2023-12-29',
  //     payer: 'Patricia Espinoza Hernandez',
  //     home: null,
  //     contactName: null,
  //     noticeCharge: '010',
  //     contractTypeName: null,
  //     contractLanguages: {
  //       '1': 'Español',
  //       '2': 'Quechua',
  //       '3': 'Aimara',
  //       '4': 'Ashaninka',
  //       '5': 'Shipibo - Konibo'
  //     }
  //   }
  // }
  const [activeTab, setActiveTab] = useState('1')
  // console.log('dataCustomers++++', dataCustomers)

  const [_dataInfo, _setDataInfo] = useState({})
  const dataInfo = _dataInfo

  const setDataInfo = (data: any) => {
    Object.assign(dataInfo, { ...data })
    _setDataInfo({ ...dataInfo })
  }

  const onChangeTabs = (activeKey: any) => {
    setActiveTab(activeKey)
    // return false
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
              <AttachedTab dataInfo={dataInfo} setDataInfo={setDataInfo} />
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
              <SuccessfulTab key={'successfu'} />
            </Tabs.TabPane>
          </Tabs>
        </Row>
      </Row>
    </>
  )
}

export default CustomerInformation
