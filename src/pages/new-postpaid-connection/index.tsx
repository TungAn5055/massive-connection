import React, { useEffect, useMemo, useState } from 'react'
import { Button, Col, Form, Input, Row, Select, Space } from 'antd'
import { FolderOpenFilled } from '@ant-design/icons'
import useCustomerSearch from '@/hooks/useCustomerSearch'
import { useNavigate } from 'react-router-dom'
import { STATE } from '@/ultils/constants'

const NewPostpaidConnection: React.FC = () => {
  const navigate = useNavigate()
  const [valueIdType, setValueIdType] = useState(null)
  const [valueIdNo, setValueIdNo] = useState('')
  const { responseSearchCustomer, requestSearchCustomer } = useCustomerSearch()

  const [form] = Form.useForm()
  const formStyle = {
    maxWidth: 'none',
    padding: 24
  }

  const options = [
    { value: '3', label: 'RUC' },
    { value: '1', label: 'DNI' }
  ]

  const handleChangeType = (e: any) => {
    setValueIdType(e)
  }

  const handleChangeIdentity = (e: any) => {
    setValueIdNo(e?.target?.value)
  }

  const handleOnSearch = () => {
    if (valueIdNo && valueIdType) {
      requestSearchCustomer({
        idNo: valueIdNo,
        idType: valueIdType
      })
    }
  }

  const checkFalseIdentity = useMemo(() => {
    if (valueIdType && valueIdNo) {
      if (valueIdType === 'RUC' && valueIdNo?.length !== 11) {
        return true
      }
      if (valueIdType === 'DNI' && valueIdNo?.length !== 8) {
        return true
      }
      return false
    } else {
      return true
    }
  }, [valueIdNo, valueIdType])

  useEffect(() => {
    if (responseSearchCustomer?.data?.idNo) {
      navigate('/customer-information', { state: { dataCustomers: responseSearchCustomer?.data } })
    }
  }, [responseSearchCustomer])
  return (
    <>
      <Row className='site-page-header'>
        <Col span={8} className='display-flex header-icon'>
          <FolderOpenFilled style={{ fontSize: '30px', color: '#000000' }} twoToneColor='#eb2f96' />
          <span className='page-header-heading-title'>Request new postpaid connection</span>
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
        <Form
          className={'form-search-customer'}
          form={form}
          name='advanced_search'
          style={formStyle}
          // onFinish={onFinish}
        >
          <fieldset>
            <legend>Search customer</legend>
            <Row gutter={24} style={{ marginBottom: '30px' }}>
              <Col span={12} key={1}>
                <Row className={'display-flex'}>
                  <Col span={5}>
                    <span>Type of document</span>
                  </Col>
                  <Col span={16}>
                    <Select
                      size={'large'}
                      value={valueIdType}
                      onChange={handleChangeType}
                      style={{
                        width: 400
                      }}
                      options={options}
                    />
                  </Col>
                </Row>
              </Col>

              <Col span={12} key={2}>
                <Row className={'display-flex'}>
                  <Col span={6}>
                    <span>Identity doc (DNI/RUC,...)</span>
                  </Col>
                  <Col span={16}>
                    <Input
                      size={'large'}
                      value={valueIdNo}
                      onChange={handleChangeIdentity}
                      // onBlur={onBlur}
                      max={valueIdType === 'DNI' ? 8 : 11}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>

            {valueIdType && valueIdNo && checkFalseIdentity && (
              <div className={'message-error'}>La cantidad de números requeridos no es suficiente</div>
            )}
            {responseSearchCustomer?.state === STATE?.ERROR && responseSearchCustomer?.message && (
              <div className={'message-error'}>{responseSearchCustomer?.message}</div>
            )}
            <div
              style={{
                textAlign: 'center',
                padding: '20px 0'
              }}
            >
              <Space size='small'>
                <Button
                  // type='default'
                  size={'large'}
                  htmlType='submit'
                  disabled={checkFalseIdentity || responseSearchCustomer?.loading}
                  onClick={handleOnSearch}
                  loading={responseSearchCustomer?.loading}
                >
                  Search
                </Button>
              </Space>
            </div>
          </fieldset>
        </Form>
      </Row>
    </>
  )
}

export default NewPostpaidConnection
