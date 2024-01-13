import { useState, useEffect } from 'react'
import { Col, Row, Form, Radio } from 'antd'
import { LIST_ATTRIBUTE_RED_TITLE } from '@/ultils/constants.ts'

export const FormRadio = ({ attribute, title, isRequired = false, dataCustomer = {} }: any) => {
  const [value, setValue] = useState(null)
  // const [errorValue, setErrorValue] = useState(false)

  const onChange = (e) => {
    setValue(e.target.value)
  }

  useEffect(() => {
    if (attribute && dataCustomer[attribute]) {
      setValue(dataCustomer[attribute])
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
      </Row>
    </Form.Item>
  )
}
