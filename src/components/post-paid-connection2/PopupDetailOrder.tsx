import { useEffect, useMemo, useState } from 'react'
import { Button, Col, Form, Modal, Row, Space, Table } from 'antd'
import useGetOrderInfo from '@/hooks/useGetOrderInfo.ts'
import { NO_DATA, STATE } from '@/ultils/constants.ts'
import { FolderOpenFilled } from '@ant-design/icons'
import { EmptyUI } from '@/components/ui-source/empty'
import Column from 'antd/es/table/Column'
import { LoadingRegion } from '@/components/common/LoadingRegion.tsx'
import checkMarkIcon from '@/assets/images/check-mark-circle-icon.svg'
import circleIcon from '@/assets/images/circle-line-icon.svg'

const PopupDetailOrder = ({ contractNo = null, isShowDetail = false, setIsShowDetail, setCurrentContractNo }: any) => {
  const [dataInfo, setDataInfo] = useState<any>({})

  const { responseGetOrderInfo, requestGetOrderInfo } = useGetOrderInfo()

  const dataTable = useMemo(() => {
    let res: any[] = []
    if (dataInfo?.orderInfors) {
      res = dataInfo?.orderInfors
    }
    return res
  }, [dataInfo])

  const closePopup = () => {
    setIsShowDetail(false)
    setCurrentContractNo(null)
  }
  useEffect(() => {
    if (contractNo) {
      setDataInfo({})
      requestGetOrderInfo(`/api/view-detail-order?contractNo=${contractNo}`)
    }
  }, [contractNo])

  useEffect(() => {
    if (responseGetOrderInfo?.data && responseGetOrderInfo?.state === STATE?.SUCCESS) {
      setDataInfo(responseGetOrderInfo?.data)
    }
  }, [responseGetOrderInfo])

  return (
    <Modal
      open={isShowDetail}
      title=''
      onCancel={() => {
        closePopup()
      }}
      footer={[
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Button
            key='back'
            onClick={() => {
              closePopup()
            }}
          >
            Go Back
          </Button>
          ,
        </div>
      ]}
      // styles={{ width: "100%"}}
      width={'100%'}
    >
      {responseGetOrderInfo?.loading && (
        <div className='full-page-loading'>
          <LoadingRegion />
        </div>
      )}

      <div>
        <Row className='site-page-header'>
          <Col span={8} className='display-flex header-icon'>
            <FolderOpenFilled style={{ fontSize: '30px', color: '#000000' }} twoToneColor='#eb2f96' />
            <span className='page-header-heading-title'>View Detail</span>
          </Col>
        </Row>

        <Row className='site-page-content'>
          <form className={'form-search-customer'} name='advanced_search'>
            <fieldset>
              <legend>Summary</legend>
              <Row gutter={24} style={{ marginBottom: '30px' }}>
                <Col span={8} key={1}>
                  <Row className={'content-title-summary-detail '}>
                    <Col span={10}>
                      <span className={'title-summary-detail'}>RUC</span>
                    </Col>
                    <Col span={12}>
                      <span>{dataInfo?.idNo}</span>
                    </Col>
                  </Row>
                  <Row className={'content-title-summary-detail '}>
                    <Col span={10}>
                      <span className={'title-summary-detail'}>Ciclo de facturación</span>
                    </Col>
                    <Col span={12}>
                      <span>{dataInfo?.billCycleFrom}</span>
                    </Col>
                  </Row>
                </Col>

                <Col span={8} key={2}>
                  <Row className={'content-title-summary-detail '}>
                    <Col span={10}>
                      <span className={'title-summary-detail'}>Razon Social</span>
                    </Col>
                    <Col span={12}>
                      <span>{dataInfo?.name}</span>
                    </Col>
                  </Row>
                  <Row className={'content-title-summary-detail '}>
                    <Col span={10}>
                      <span className={'title-summary-detail'}>Tipo de conexión</span>
                    </Col>
                    <Col span={12}>
                      <span>{dataInfo?.repreCustName}</span>
                    </Col>
                  </Row>
                </Col>
                <Col span={8} key={2}>
                  <Row className={'content-title-summary-detail '}>
                    <Col span={10}>
                      <span className={'title-summary-detail'}>Representante legal</span>
                    </Col>
                    <Col span={12}>
                      <span>{dataInfo?.contactName}</span>
                    </Col>
                  </Row>
                  <Row className={'content-title-summary-detail '}>
                    <Col span={10}>
                      <span className={'title-summary-detail'}>Contacto Autorizado</span>
                    </Col>
                    <Col span={12}>
                      <span>{dataInfo?.idNo}</span>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </fieldset>
          </form>

          {/* tables */}
          <Form className={'form-search-customer'} name='advanced_search'>
            <fieldset>
              <legend style={{ marginBottom: '0 !important' }}>
                <span className={'legend-color'}>Payment Information</span>
              </legend>
              <Table
                rowKey={(record: any) => record?.title}
                dataSource={dataTable}
                pagination={false}
                locale={{ emptyText: <EmptyUI content={NO_DATA} /> }}
              >
                <Column
                  title={'Plan'}
                  dataIndex='productCode'
                  key='productCode'
                  render={(value) => {
                    return <Space>{value}</Space>
                  }}
                />
                <Column
                  title={'Quantity'}
                  dataIndex='quantityOfLines'
                  key='quantityOfLines'
                  render={(value) => {
                    return <Space>{value}</Space>
                  }}
                />
                <Column
                  title={'Fingerprint validation'}
                  dataIndex='lineActivation'
                  key='lineActivation'
                  render={(value) => {
                    if (value) {
                      return <Space>Yes</Space>
                    } else {
                      return <Space>No</Space>
                    }
                  }}
                />
                <Column
                  title={'Branch Assigned'}
                  dataIndex='shopCode'
                  key='shopCode'
                  render={(value) => {
                    return <Space>{value}</Space>
                  }}
                />
                <Column
                  title={'Delivered by'}
                  dataIndex='deliveryBy'
                  key='deliveryBy'
                  render={(value) => {
                    return <Space>{value}</Space>
                  }}
                />
                <Column
                  title={'Time of Delivery'}
                  dataIndex='deliveryTime'
                  key='deliveryTime'
                  render={(value) => {
                    return <Space>{value}</Space>
                  }}
                />
                <Column
                  title={'Certificate of Delivery Goods'}
                  dataIndex=''
                  key=''
                  render={(val) => {
                    if (val) {
                      return <img src={checkMarkIcon} alt='download' style={{ height: '30px' }} />
                    } else {
                      return <img src={circleIcon} alt='download' style={{ height: '30px' }} />
                    }
                  }}
                />
              </Table>
            </fieldset>
          </Form>
        </Row>
      </div>
    </Modal>
  )
}

export default PopupDetailOrder
