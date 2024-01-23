import React, { useEffect, useMemo, useState } from 'react'
import { Button, Col, Form, Input, Pagination, Row, Select, Space, Table } from 'antd'
import { FolderOpenFilled } from '@ant-design/icons'
import { SOURCE_STATUS_POST2, STATE } from '@/ultils/constants'
import useSearchMassiveOrder from '@/hooks/useSearchMassiveOrder'
import Column from 'antd/es/table/Column'
import { LoadingRegion } from '@/components/ui-source/loading'
import { PageSizeOptionsInTableForMaterial } from '@/ultils/dataSourceConstants'

const NewPostpaidConnection2: React.FC = () => {
  const [valueType, setValueType] = useState<any>('10432498404')
  const [valueStatus, setValueStatus] = useState<any>(null)

  const [paramsPage, setParamsPage] = useState({
    pageSize: 10,
    currentPage: 1
  })

  const { responseMassiveOrder, requestSearchMassiveOrder } = useSearchMassiveOrder()
  const [form] = Form.useForm()
  const formStyle = {
    maxWidth: 'none',
    padding: 24
  }

  const tableLoading = {
    spinning: responseMassiveOrder?.loading,
    indicator: <LoadingRegion />
  }

  const handleChangeType = (e) => {
    setValueType(e?.target?.value)
  }

  const handleChangeStatus = (val) => {
    setValueStatus(val)
  }

  const doSearch = () => {
    if (valueType && valueStatus) {
      requestSearchMassiveOrder({ idNo: valueType, page: 1, pageSize: 10, status: valueStatus })
    }
  }

  const onChangePage = (pageNumber, pageSize) => {
    setParamsPage((prev) => ({
      ...prev,
      pageSize: pageSize,
      currentPage: pageNumber
    }))
    if (valueType && valueStatus) {
      requestSearchMassiveOrder({ idNo: valueType, page: pageNumber, pageSize: pageSize, status: valueStatus })
    }
  }

  const disableButtonSearch = useMemo(() => {
    if (valueType && valueStatus) {
      return false
    } else {
      return true
    }
  }, [valueStatus, valueType])

  useEffect(() => {
    console.log('responseSaveContract+++', responseMassiveOrder)
    if (responseMassiveOrder?.data && responseMassiveOrder?.state === STATE?.SUCCESS) {
    }
  }, [responseMassiveOrder])

  return (
    <>
      <Row className='site-page-header'>
        <Col span={8} className='display-flex header-icon'>
          <FolderOpenFilled style={{ fontSize: '30px', color: '#000000' }} twoToneColor='#eb2f96' />
          <span className='page-header-heading-title'>Connect Postpaid Subscriptor II</span>
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
        <Form className={'form-search-customer'} form={form} name='advanced_search' style={formStyle}>
          <fieldset>
            <legend>Search customer</legend>
            <Row gutter={24} style={{ marginBottom: '30px' }}>
              <Col span={12} key={2}>
                <Row className={'display-flex'}>
                  <Col span={6}>
                    <span>Identity doc (DNI/RUC,...)</span>
                  </Col>
                  <Col span={12}>
                    <Input
                      size={'large'}
                      onChange={handleChangeType}
                      value={valueType}
                      // max={11}
                      // min={8}
                    />
                  </Col>
                </Row>
              </Col>
              <Col span={12} key={1}>
                <Row className={'display-flex'}>
                  <Col span={3}>
                    <span>Status</span>
                  </Col>
                  <Col span={16}>
                    <Select
                      size={'large'}
                      value={valueStatus}
                      onChange={handleChangeStatus}
                      style={{
                        width: 400
                      }}
                      options={SOURCE_STATUS_POST2}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>

            {/*{valueType && valueStatus && (*/}
            {/*  <div className={'message-error'}>La cantidad de números requeridos no es suficiente</div>*/}
            {/*)}*/}
            <div
              style={{
                textAlign: 'center',
                padding: '20px 0'
              }}
            >
              <Space size='small'>
                <Button
                  type='default'
                  size={'large'}
                  htmlType='submit'
                  disabled={disableButtonSearch}
                  loading={responseMassiveOrder?.loading}
                  onClick={doSearch}
                >
                  Search
                </Button>
              </Space>
            </div>
          </fieldset>
        </Form>
      </Row>
      {responseMassiveOrder?.data?.length > 0 && (
        <>
          <Row className='site-page-content'>
            <Row className={'content-customer-information'} style={{ margin: 0 }}>
              <form className={'form-search-customer'} name='advanced_search'>
                <fieldset>
                  <legend>Result</legend>
                  {/*table*/}
                  <Row gutter={24} style={{ width: '100%', margin: '10px' }}>
                    <Table
                      rowKey={(record: any) => record?.contractNo}
                      dataSource={responseMassiveOrder?.data}
                      pagination={false}
                      bordered={true}
                      loading={tableLoading}
                      style={{ width: '100%' }}
                    >
                      <Column
                        title={'No'}
                        dataIndex='contractNo'
                        key='contractNo'
                        render={(value) => {
                          return {
                            children: <Space>{value}</Space>
                          }
                        }}
                      />
                      <Column
                        title={'Type of document'}
                        dataIndex='idTypeName'
                        key='idTypeName'
                        render={(value) => {
                          return {
                            children: <Space>{value}</Space>
                          }
                        }}
                      />
                      <Column
                        title={'Identity number'}
                        dataIndex='custId'
                        key='custId'
                        render={(value) => {
                          return {
                            children: <Space>{value}</Space>
                          }
                        }}
                      />
                      <Column
                        title={'Customer name'}
                        dataIndex='name'
                        key='name'
                        render={(value) => {
                          return {
                            children: <Space>{value}</Space>
                          }
                        }}
                      />
                      <Column
                        title={'Creation date'}
                        dataIndex='createdDate'
                        key='createdDate'
                        render={(value) => {
                          return {
                            children: <Space>{value}</Space>
                          }
                        }}
                      />
                      <Column
                        title={'Status'}
                        dataIndex='status'
                        key='status'
                        render={(value) => {
                          const textStatus = SOURCE_STATUS_POST2?.find((it) => it?.value == value)
                          return <Space>{textStatus?.label}</Space>
                        }}
                      />{' '}
                      <Column
                        title={'Quantity of lines'}
                        dataIndex='totalLines'
                        key='totalLines'
                        render={(value) => {
                          return {
                            children: <Space>{value}</Space>
                          }
                        }}
                      />
                      <Column
                        title={'Quantity of plans'}
                        dataIndex='quantityOfPlans'
                        key='quantityOfPlans'
                        render={(value) => {
                          return {
                            children: <Space>{value}</Space>
                          }
                        }}
                      />
                      <Column
                        title={'Action'}
                        dataIndex='action'
                        key='action'
                        render={(value) => {
                          return <Space>{value}</Space>
                        }}
                      />
                    </Table>

                    <Row className={'footer-paging'} gutter={16}>
                      <Col>
                        <Pagination
                          size='small'
                          total={responseMassiveOrder.totalPages}
                          pageSize={paramsPage.pageSize}
                          pageSizeOptions={PageSizeOptionsInTableForMaterial}
                          locale={{ items_per_page: '' }}
                          defaultCurrent={paramsPage.currentPage}
                          onChange={(pageNumber, pageSize) => onChangePage(pageNumber, pageSize)}
                          // itemRender={ItemRender}
                          showSizeChanger={true}
                          disabled={responseMassiveOrder.loading}
                        />
                      </Col>
                    </Row>
                  </Row>
                </fieldset>
              </form>
            </Row>
          </Row>
        </>
      )}
    </>
  )
}

export default NewPostpaidConnection2
