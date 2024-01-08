import React, { useMemo, useState } from 'react'
import { Button, Col, Form, Input, Row, Select, Space } from 'antd'
import {FolderOpenFilled} from "@ant-design/icons";

const NewPostpaidConnection: React.FC = () => {
  const [valueType, setValueType] = useState(null)
  const [valueIdentity, setValueIdentity] = useState(null)
  const [form] = Form.useForm()
  const formStyle = {
    maxWidth: 'none',
    padding: 24
  }

  const options = [
    { value: 'RUC', label: 'RUC' },
    { value: 'DNI', label: 'DNI' }
  ]

  const handleChangeType = (e) => {
    setValueType(e)
  }

  const handleChangeIdentity = (e) => {
    setValueIdentity(e?.target?.value)
  }

  const checkFalseIdentity = useMemo(() => {
    if (valueType && valueIdentity) {
      if (valueType === 'RUC' && valueIdentity?.length !== 11) {
        return true
      }
      if (valueType === 'DNI' && valueIdentity?.length !== 8) {
        return true
      }
      return false
    } else {
      return true
    }
  }, [valueIdentity, valueType])

  return (
    <>
      <Row className='site-page-header'>
        <Col span={8} className='display-flex header-icon'>
          <FolderOpenFilled style={{fontSize: '30px', color: '#000000'}} twoToneColor='#eb2f96'/>
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
                      value={valueType}
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
                      // value={valueIdentity}
                      onChange={handleChangeIdentity}
                      // onBlur={onBlur}
                      max={valueType === 'DNI' ? 8 : 11}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>

            {valueType && valueIdentity && checkFalseIdentity && (
              <div className={'message-error'}>La cantidad de números requeridos no es suficiente</div>
            )}
            <div
              style={{
                textAlign: 'center',
                padding: '20px 0'
              }}
            >
              <Space size='small'>
                <Button type='default' size={'large'} htmlType='submit' disabled={checkFalseIdentity}>
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
