import successImg from '@/assets/images/success.png'
import { Table } from 'antd'
import { useEffect, useState } from 'react'
import useGetOrderInfo from '@/hooks/useGetOrderInfo.ts'
import { STATE } from '@/ultils/constants.ts'
import { LoadingRegion } from '@/components/common/LoadingRegion.tsx'
import { COLUMN_TABLE_SUCCESS_TAB } from '@/ultils/columsTables'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons'

const SuccessfulTab = ({ contractNo, activeTab }: any) => {
  const [contentSuccess, setContentSuccess] = useState<any>({})
  const [currentVal, setCurrentVal] = useState<any>(0)
  const { responseGetOrderInfo, requestGetOrderInfo } = useGetOrderInfo()

  useEffect(() => {
    if (contractNo && activeTab == '4') {
      requestGetOrderInfo(`/api/get-order-info?contractNo=${contractNo}`)
    }
  }, [contractNo, activeTab])

  useEffect(() => {
    if (responseGetOrderInfo?.data && responseGetOrderInfo?.state === STATE?.SUCCESS) {
      setContentSuccess(responseGetOrderInfo?.data)
      if (responseGetOrderInfo?.data?.billCycleFrom) {
        setCurrentVal(responseGetOrderInfo?.data?.billCycleFrom)
      }
    }
  }, [responseGetOrderInfo])

  return (
    <div className={'display-grid'}>
      {responseGetOrderInfo?.loading && (
        <div className='full-page-loading'>
          <LoadingRegion />
        </div>
      )}

      <div className={'display-grid'} style={{ width: '520px' }}>
        <div className={'display-flex-center'}>
          <img src={successImg} alt='Italian Trulli' style={{ height: '80px' }} />
        </div>
        <div
          className={'display-flex-center'}
          style={{ fontSize: '22px', fontWeight: '700', color: '#1562d7', marginTop: '10px' }}
        >
          <span>¡Felicidades!</span>
        </div>
        <div
          className={'display-flex-center'}
          style={{ fontSize: '15px', fontWeight: '600', color: '#0f4da2', margin: '10px 0' }}
        >
          <span>Solicitud de creación de Work Order registrada con éxito</span>
        </div>
      </div>
      {!!contentSuccess?.idNo && (
        <>
          <div className={'display-flex-center'}>
            <div style={{ width: '380px' }}>
              <div className={'display-flex-space-between'}>
                <span className={'title-bold'}>RUC</span>
                <span>{contentSuccess?.idNo}</span>
              </div>
              <div className={'display-flex-space-between'}>
                <span className={'title-bold'}>Razon Social</span>
                <span>{contentSuccess?.name}</span>
              </div>
              <div className={'display-flex-space-between'}>
                <span className={'title-bold'}>Representante Legal</span>
                <span>{contentSuccess?.repreCustName}</span>
              </div>
              <div className={'display-flex-space-between'}>
                <span className={'title-bold'}>Contacto Autorizado</span>
                <span>{contentSuccess?.contactName}</span>
              </div>
              <div className={'display-flex-space-between'}>
                <span className={'title-bold'}>Circle de facturacion</span>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'right'
                  }}
                >
                  <span>{currentVal}</span>
                  <span>
                    <PlusOutlined
                      onClick={() => {
                        setCurrentVal((prev) => parseInt(prev) + 1)
                      }}
                    />
                  </span>
                  <span>
                    <MinusOutlined
                      onClick={() => {
                        setCurrentVal((prev) => {
                          if (prev >= 1) {
                            return parseInt(prev) - 1
                          } else {
                            return prev
                          }
                        })
                      }}
                    />
                  </span>
                </div>
              </div>
              <div className={'display-flex-space-between'}>
                <span className={'title-bold'}>Tipo de connexion</span>
                <span>{contentSuccess?.typeOfConnection}</span>
              </div>
              <div className={'display-flex-space-between'}>
                <span className={'title-bold'}>Date of registration</span>
                <span>{contentSuccess?.effectDate}</span>
              </div>
            </div>
          </div>
          <div style={{ width: '520px' }}>
            <Table
              columns={COLUMN_TABLE_SUCCESS_TAB}
              dataSource={contentSuccess?.groups ?? []}
              pagination={false}
              bordered={true}
            />
          </div>
        </>
      )}
    </div>
  )
}

export default SuccessfulTab
