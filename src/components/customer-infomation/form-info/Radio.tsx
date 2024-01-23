import { useState, useEffect } from 'react'
import { Col, Row, Form, Radio } from 'antd'
import { LIST_ATTRIBUTE_RED_TITLE } from '@/ultils/constants.ts'

export const FormRadio = ({
  attribute,
  title,
  isRequired = false,
  dataCustomer = {},
  setValidateAll = () => {},
  attributeSave,
  setDataInfo = () => {}
}: any) => {
  const [value, setValue] = useState(null)
  const [errorValue, setErrorValue] = useState<any>({ status: false, message: null })

  setValidateAll([attribute], () => {
    let check = true
    if (isRequired && !value) {
      check = false
      setErrorValue({
        status: true,
        message: `Please choice ${title}`
      })
    }
    return check
  })

  const onChange = (e) => {
    setValue(e.target.value)
    setErrorValue({
      status: false,
      message: null
    })
    if (attributeSave) {
      setDataInfo({ [attributeSave]: e.target.value })
    }
  }

  useEffect(() => {
    if (attribute && dataCustomer[attribute]) {
      setValue(dataCustomer[attribute])
      if (attributeSave) {
        setDataInfo({ [attributeSave]: dataCustomer[attribute] })
      }
    }
  }, [dataCustomer])

  return (
    <Form.Item>
      <Row className={'display-flex'}>
        <Col span={6}>
          <span className={LIST_ATTRIBUTE_RED_TITLE.includes(attribute) ? 'title-red' : ''}>{title}</span>
          {isRequired && <span style={{ color: 'red' }}> *</span>}
        </Col>
        <Col span={18}>
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>Representante Legal</Radio>
            <Radio value={2}>Otro</Radio>
          </Radio.Group>
        </Col>
        {errorValue?.status && (
          <>
            <Col span={6}> </Col>
            <Col span={18}>
              <div className={'message-error-data'}>{errorValue?.message}</div>{' '}
            </Col>
          </>
        )}
      </Row>
    </Form.Item>
  )
}
