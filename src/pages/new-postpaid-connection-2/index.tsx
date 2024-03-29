import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Input, Pagination, Row, Select, Space, Table } from 'antd'
import { FolderOpenFilled } from '@ant-design/icons'
import { SOURCE_STATUS_POST2, STATE } from '@/ultils/constants'
import useSearchMassiveOrder from '@/hooks/useSearchMassiveOrder'
import Column from 'antd/es/table/Column'
import { LoadingRegion } from '@/components/ui-source/loading'
import { PageSizeOptionsInTableForMaterial } from '@/ultils/dataSourceConstants'
import PopupDetailOrder from '@/components/post-paid-connection2/PopupDetailOrder.tsx'
import PopupCloseOrder from '@/components/post-paid-connection2/PopupCloseOrder.tsx'
import { useNavigate } from 'react-router-dom'
import { NotificationError } from '@/components/common/Notification'

const NewPostpaidConnection2: React.FC = () => {
  const navigate = useNavigate()
  const [valueType, setValueType] = useState<any>('')
  const [valueStatus, setValueStatus] = useState<any>(null)
  const [isShowDetail, setIsShowDetail] = useState<boolean>(false)
  const [isShowClose, setIsShowClose] = useState<boolean>(false)
  const [currentContractNo, setCurrentContractNo] = useState<any>(null)
  const [currentContract, setCurrentContract] = useState<any>({})
  const [errorValue, setErrorValue] = useState<any>({ status: false, message: null })

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
    onBlur(e)
  }

  const handleChangeStatus = (val) => {
    setValueStatus(val)
  }

  const doSearch = () => {
    // if (valueType) {
      setParamsPage({
        pageSize: 10,
        currentPage: 1
      })
      requestSearchMassiveOrder({ idNo: valueType, page: 1, pageSize: 10, status: valueStatus ?? '' })
      // requestSearchMassiveOrder({ idNo: valueType, page: 0, pageSize: 10, status: '' })
    // }
  }

  const onChangePage = (pageNumber, pageSize) => {
    setParamsPage((prev) => ({
      ...prev,
      pageSize: pageSize,
      currentPage: pageNumber
    }))
    // if (valueType) {
      requestSearchMassiveOrder({ idNo: valueType, page: pageNumber, pageSize: pageSize, status: valueStatus })
    // }
  }

  const onBlur = (e) => {
    if (!/^\d+$/.test(e.target.value) || e.target.value.length < 8 || e.target.value.length > 11) {
      setErrorValue({
        status: true,
        message: 'Solo se permite números (8-11 digitos)'
      })
    } else {
      setErrorValue({ status: false, message: null })
    }
  }

  // const disableButtonSearch = useMemo(() => {
  //   if (valueType && valueType?.length >= 8 && valueType?.length <= 11) {
  //     return false
  //   } else {
  //     return true
  //   }
  // }, [valueStatus, valueType])

  useEffect(() => {
    if (responseMassiveOrder?.data && responseMassiveOrder?.state === STATE?.SUCCESS) {
    }
    if (responseMassiveOrder?.message && responseMassiveOrder?.state === STATE?.ERROR) {
      NotificationError(responseMassiveOrder?.message)
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
          {/*<a href={'https://cel.reniec.gob.pe/valreg/valreg.do\n'} target='_blank'>*/}
          {/*  DNI information*/}
          {/*</a>*/}
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
                      onBlur={onBlur}
                      value={valueType}
                      max={11}
                      min={8}
                    />
                    {errorValue?.status && <div className={'message-error-data'}>{errorValue?.message}</div>}
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
                      allowClear={true}
                      onChange={handleChangeStatus}
                      style={{
                        width: 400
                      }}
                      options={SOURCE_STATUS_POST2}
                      placeholder={'Select Status'}
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
                  // disabled={disableButtonSearch}
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
                  <legend>Results</legend>
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
                        dataIndex='idNo'
                        key='idNo'
                        render={(value, info,  index) => {
                          return {
                            children: value && info ? <Space>{paramsPage?.currentPage == 1 ? (index + 1)  : (index + 1) + paramsPage?.pageSize * (paramsPage?.currentPage - 1)}</Space> : <Space>{index + 1}</Space>
                          }
                        }}
                      />
                      <Column
                        title={'RUC number'}
                        dataIndex='custId'
                        key='custId'
                        align='center'
                        render={(value) => {
                          return {
                            children: <Space>{value}</Space>
                          }
                        }}
                      />
                      <Column
                        title={'Company name'}
                        dataIndex='name'
                        key='name'
                        render={(value) => {
                          return {
                            children: <Space>{value}</Space>
                          }
                        }}
                      />
                      <Column
                          title={'Quantity of lines'}
                          dataIndex='totalLines'
                          key='totalLines'
                          align='right'
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
                          align='right'
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
                        align='right'
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
                        align='center'
                        render={(value) => {
                          const textStatus = SOURCE_STATUS_POST2?.find((it) => it?.value == value)
                          return <Space>{textStatus?.label}</Space>
                        }}
                      />
                      <Column
                        title={'Action'}
                        dataIndex='null'
                        key='null'
                        align='center'
                        render={(value, info: any) => {
                          if (info?.status == 3) {
                            return (
                              <Button
                                type='default'
                                size={'large'}
                                onClick={() => {
                                  setIsShowDetail(true)
                                  setCurrentContractNo(info?.contractNo)
                                }}
                              >
                                View Detail
                              </Button>
                            )
                          } else if (info?.status == 4) {
                            return (
                              <Button
                                type='default'
                                size={'large'}
                                onClick={() => {
                                  setIsShowClose(true)
                                  setCurrentContract({
                                    contractNo: info?.contractNo,
                                    idNo: info?.idNo,
                                    isDetail: false,
                                  })
                                }}
                              >
                                Close
                              </Button>
                            )
                          } else if (info?.status == 6) {
                            return (
                              <Button type='default' size={'large'}  onClick={() => {
                                setIsShowClose(true)
                                setCurrentContract({
                                  contractNo: info?.contractNo,
                                  idNo: info?.idNo,
                                  isDetail: true,
                                })
                              }}>
                                View detail partial connected order
                              </Button>
                            )
                          } else if (info?.status == 1) {
                            return (
                              <Button
                                type='default'
                                size={'large'}
                                onClick={() => {
                                  navigate('/request-of-line-connection', { state: { ContractNo: info?.contractNo } })
                                }}
                              >
                                Upload SIMS
                              </Button>
                            )
                          } else {
                            return <Space>{value}</Space>
                          }
                        }}
                      />
                    </Table>

                    <Row className={'footer-paging'} gutter={16}>
                      <Col>
                        <Pagination
                          size='small'
                          total={parseInt(responseMassiveOrder.totalPages) * paramsPage?.pageSize}
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

          <PopupDetailOrder
            isShowDetail={isShowDetail}
            setIsShowDetail={setIsShowDetail}
            contractNo={currentContractNo}
            setCurrentContractNo={setCurrentContractNo}
          />
          <PopupCloseOrder
            isShowDetail={isShowClose}
            setIsShowDetail={setIsShowClose}
            dataContract={currentContract}
            setCurrentContract={setCurrentContract}
            doSearch={doSearch}
          />
        </>
      )}
    </>
  )
}

export default NewPostpaidConnection2
