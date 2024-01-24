import { useEffect, useState } from 'react'
import { Button, Col, Modal, Row } from 'antd'
import { STATE } from '@/ultils/constants.ts'
import { FolderOpenFilled } from '@ant-design/icons'
import { LoadingRegion } from '@/components/common/LoadingRegion.tsx'
import useGetCloserOrderInfo from '@/hooks/useGetCloserOrderInfo.ts'

const PopupCloseOrder = ({ dataContract = null, isShowDetail = false, setCurrentContract, setIsShowDetail }: any) => {
  const [dataInfo, setDataInfo] = useState<any>({})

  const { responseCloseOrderInfo, requestCloseOrderInfo } = useGetCloserOrderInfo()

  const closePopup = () => {
    setIsShowDetail(false)
    setCurrentContract({})
  }

  useEffect(() => {
    if (dataContract?.contractNo && dataContract?.idNo) {
      setDataInfo({})
      requestCloseOrderInfo({
        contractNo: dataContract?.contractNo,
        idNo: dataContract?.idNo
      })
    }
  }, [dataContract])

  useEffect(() => {
    if (responseCloseOrderInfo?.data && responseCloseOrderInfo?.state === STATE?.SUCCESS) {
      setDataInfo(responseCloseOrderInfo?.data)
    }
  }, [responseCloseOrderInfo])

  return (
    <Modal
      open={isShowDetail}
      title=''
      onCancel={() => {
        closePopup()
      }}
      footer={[
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Button
            key='back'
            onClick={() => {
              closePopup()
            }}
          >
            Go Back
          </Button>
        </div>
      ]}
      width={'100%'}
    >
      {responseCloseOrderInfo?.loading && (
        <div className='full-page-loading'>
          <LoadingRegion />
        </div>
      )}

      <div>
        <Row className='site-page-header'>
          <Col span={8} className='display-flex header-icon'>
            <FolderOpenFilled style={{ fontSize: '30px', color: '#000000' }} twoToneColor='#eb2f96' />
            <span className='page-header-heading-title'>Close of Order</span>
          </Col>
        </Row>

        <Row className='site-page-content'>
          {/*form 1*/}
          <form className={'form-search-customer'} name='advanced_search'>
            <fieldset>
              <legend className={'legend-color'}>Customer information</legend>
              <Row gutter={24} style={{ marginBottom: '30px' }}>
                <Col span={8} key={1}>
                  <Row className={'content-title-summary-detail '}>
                    <Col span={10}>
                      <span className={'title-summary-detail'}>Customer Type</span>
                    </Col>
                    <Col span={12}>
                      <span className={'legend-color'}>{dataInfo?.idNo}</span>
                    </Col>
                  </Row>
                  <Row className={'content-title-summary-detail '}>
                    <Col span={10}>
                      <span className={'title-summary-detail'}>Date of establish</span>
                    </Col>
                    <Col span={12}>
                      <span className={'legend-color'}>{dataInfo?.billCycleFrom}</span>
                    </Col>
                  </Row>
                </Col>

                <Col span={8} key={2}>
                  <Row className={'content-title-summary-detail '}>
                    <Col span={10}>
                      <span className={'title-summary-detail'}>RUC</span>
                    </Col>
                    <Col span={12}>
                      <span className={'legend-color'}>{dataInfo?.name}</span>
                    </Col>
                  </Row>
                  <Row className={'content-title-summary-detail '}>
                    <Col span={10}>
                      <span className={'title-summary-detail'}>Address</span>
                    </Col>
                    <Col span={12}>
                      <span className={'legend-color'}>{dataInfo?.repreCustName}</span>
                    </Col>
                  </Row>
                </Col>
                <Col span={8} key={2}>
                  <Row className={'content-title-summary-detail '}>
                    <Col span={10}>
                      <span className={'title-summary-detail'}>Razon Social</span>
                    </Col>
                    <Col span={12}>
                      <span className={'legend-color'}>{dataInfo?.contactName}</span>
                    </Col>
                  </Row>
                  <Row className={'content-title-summary-detail '}>
                    <Col span={10}>
                      <span className={'title-summary-detail'}>Note</span>
                    </Col>
                    <Col span={12}>
                      <span className={'legend-color'}>{dataInfo?.idNo}</span>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </fieldset>
          </form>

          {/*form 2*/}
          <form className={'form-search-customer'} name='advanced_search'>
            <fieldset>
              <legend className={'legend-color'}>Representative information</legend>
              <Row gutter={24} style={{ marginBottom: '30px' }}>
                {/*line 1*/}
                <Col span={8} key={1}>
                  <Row className={'content-title-summary-detail '}>
                    <Col span={10}>
                      <span className={'title-summary-detail'}>Customer Type</span>
                    </Col>
                    <Col span={12}>
                      <span className={'legend-color'}>{dataInfo?.idNo}</span>
                    </Col>
                  </Row>
                  <Row className={'content-title-summary-detail '}>
                    <Col span={10}>
                      <span className={'title-summary-detail'}>Date of birth</span>
                    </Col>
                    <Col span={12}>
                      <span className={'legend-color'}>{dataInfo?.billCycleFrom}</span>
                    </Col>
                  </Row>
                  <Row className={'content-title-summary-detail '}>
                    <Col span={10}>
                      <span className={'title-summary-detail'}>Gender</span>
                    </Col>
                    <Col span={12}>
                      <span className={'legend-color'}>{dataInfo?.billCycleFrom}</span>
                    </Col>
                  </Row>
                  <Row className={'content-title-summary-detail '}>
                    <Col span={10}>
                      <span className={'title-summary-detail'}>Address</span>
                    </Col>
                    <Col span={12}>
                      <span className={'legend-color'}>{dataInfo?.billCycleFrom}</span>
                    </Col>
                  </Row>
                </Col>

                {/*line 2*/}
                <Col span={8} key={2}>
                  <Row className={'content-title-summary-detail '}>
                    <Col span={10}>
                      <span className={'title-summary-detail'}>Identity card</span>
                    </Col>
                    <Col span={12}>
                      <span className={'legend-color'}>{dataInfo?.name}</span>
                    </Col>
                  </Row>
                  <Row className={'content-title-summary-detail '}>
                    <Col span={10}>
                      <span className={'title-summary-detail'}>Issue date</span>
                    </Col>
                    <Col span={12}>
                      <span className={'legend-color'}>{dataInfo?.repreCustName}</span>
                    </Col>
                  </Row>
                  <Row className={'content-title-summary-detail '}>
                    <Col span={10}>
                      <span className={'title-summary-detail'}>Issue place</span>
                    </Col>
                    <Col span={12}>
                      <span className={'legend-color'}>{dataInfo?.repreCustName}</span>
                    </Col>
                  </Row>
                  <Row className={'content-title-summary-detail '}>
                    <Col span={10}>
                      <span className={'title-summary-detail'}>Note</span>
                    </Col>
                    <Col span={12}>
                      <span className={'legend-color'}>{dataInfo?.repreCustName}</span>
                    </Col>
                  </Row>
                </Col>

                {/*line 3*/}
                <Col span={8} key={2}>
                  <Row className={'content-title-summary-detail '}>
                    <Col span={10}>
                      <span className={'title-summary-detail'}>Customer name</span>
                    </Col>
                    <Col span={12}>
                      <span className={'legend-color'}>{dataInfo?.contactName}</span>
                    </Col>
                  </Row>
                  <Row className={'content-title-summary-detail '}>
                    <Col span={10}>
                      <span className={'title-summary-detail'}>Expired date</span>
                    </Col>
                    <Col span={12}>
                      <span className={'legend-color'}>{dataInfo?.idNo}</span>
                    </Col>
                  </Row>
                  <Row className={'content-title-summary-detail '}>
                    <Col span={10}>
                      <span className={'title-summary-detail'}>Nationality</span>
                    </Col>
                    <Col span={12}>
                      <span className={'legend-color'}>{dataInfo?.idNo}</span>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </fieldset>
          </form>

          {/*form 3*/}
          <form className={'form-search-customer'} name='advanced_search'>
            <fieldset>
              <legend className={'legend-color'}>Subscription Information</legend>
              <Row gutter={24} style={{ marginBottom: '30px', marginLeft: '10px' }}>
                <Button key='back' onClick={() => {}}>
                  Download file
                </Button>
              </Row>
            </fieldset>
          </form>

          {/*form 4*/}
          <form className={'form-search-customer'} name='advanced_search'>
            <fieldset>
              <legend className={'legend-color'}>Contract Information</legend>
              <Row gutter={24} style={{ marginBottom: '30px' }}>
                {/*line 1*/}
                <Col span={8} key={1}>
                  <Row className={'content-title-summary-detail '}>
                    <Col span={10}>
                      <span className={'title-summary-detail'}>Número de contrato</span>
                    </Col>
                    <Col span={12}>
                      <span className={'legend-color'}>{dataInfo?.idNo}</span>
                    </Col>
                  </Row>
                  <Row className={'content-title-summary-detail '}>
                    <Col span={10}>
                      <span className={'title-summary-detail'}>Fecha de firma</span>
                    </Col>
                    <Col span={12}>
                      <span className={'legend-color'}>{dataInfo?.billCycleFrom}</span>
                    </Col>
                  </Row>
                  <Row className={'content-title-summary-detail '}>
                    <Col span={10}>
                      <span className={'title-summary-detail'}>Ciclo de facturación</span>
                    </Col>
                    <Col span={12}>
                      <span className={'legend-color'}>{dataInfo?.billCycleFrom}</span>
                    </Col>
                  </Row>
                  <Row className={'content-title-summary-detail '}>
                    <Col span={10}>
                      <span className={'title-summary-detail'}>Direccion de facturacion</span>
                    </Col>
                    <Col span={12}>
                      <span className={'legend-color'}>{dataInfo?.billCycleFrom}</span>
                    </Col>
                  </Row>
                  <Row className={'content-title-summary-detail '}>
                    <Col span={10}>
                      <span className={'title-summary-detail'}>Distrito - Prov - Dpto</span>
                    </Col>
                    <Col span={12}>
                      <span className={'legend-color'}>{dataInfo?.billCycleFrom}</span>
                    </Col>
                  </Row>
                </Col>

                {/*line 2*/}
                <Col span={8} key={2}>
                  <Row className={'content-title-summary-detail '}>
                    <Col span={10}>
                      <span className={'title-summary-detail'}>Tipo de documento</span>
                    </Col>
                    <Col span={12}>
                      <span className={'legend-color'}>{dataInfo?.name}</span>
                    </Col>
                  </Row>
                  <Row className={'content-title-summary-detail '}>
                    <Col span={10}>
                      <span className={'title-summary-detail'}>Fecha de expiración</span>
                    </Col>
                    <Col span={12}>
                      <span className={'legend-color'}>{dataInfo?.repreCustName}</span>
                    </Col>
                  </Row>
                  <Row className={'content-title-summary-detail '}>
                    <Col span={10}>
                      <span className={'title-summary-detail'}>Pagador</span>
                    </Col>
                    <Col span={12}>
                      <span className={'legend-color'}>{dataInfo?.repreCustName}</span>
                    </Col>
                  </Row>
                </Col>

                {/*line 3*/}
                <Col span={8} key={2}>
                  <Row className={'content-title-summary-detail '}>
                    <Col span={10}>
                      <span className={'title-summary-detail'}>Idioma de contrato</span>
                    </Col>
                    <Col span={12}>
                      <span className={'legend-color'}>{dataInfo?.contactName}</span>
                    </Col>
                  </Row>
                  <Row className={'content-title-summary-detail '}>
                    <Col span={10}>
                      <span className={'title-summary-detail'}>Método de pago</span>
                    </Col>
                    <Col span={12}>
                      <span className={'legend-color'}>{dataInfo?.idNo}</span>
                    </Col>
                  </Row>
                  <Row className={'content-title-summary-detail '}>
                    <Col span={10}>
                      <span className={'title-summary-detail'}>Direccion de facturacion</span>
                    </Col>
                    <Col span={12}>
                      <span className={'legend-color'}>{dataInfo?.idNo}</span>
                    </Col>
                  </Row>
                  <Row className={'content-title-summary-detail '}>
                    <Col span={10}>
                      <span className={'title-summary-detail'}>Envio de recibos</span>
                    </Col>
                    <Col span={12}>
                      <span className={'legend-color'}>{dataInfo?.idNo}</span>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </fieldset>
          </form>
        </Row>
      </div>
    </Modal>
  )
}

export default PopupCloseOrder
