import { useState, useEffect } from 'react'
import { Col, Row, Form, Checkbox } from 'antd'
import { LIST_ATTRIBUTE_RED_TITLE } from '@/ultils/constants.ts'

export const FormCheckBox = ({ attribute, title, isRequired = false, dataCustomer = {} }: any) => {
  const [value, setValue] = useState([])
  // const [errorValue, setErrorValue] = useState(false)

  const options = [
    {
      label: 'A domicillo',
      value: '1'
    },
    {
      label: 'Email',
      value: '2'
    },
    {
      label: 'SMS',
      value: '3'
    }
  ]

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
          <Checkbox.Group options={options} defaultValue={['Apple']} onChange={onChange} value={value} />
        </Col>
      </Row>
    </Form.Item>
  )
}
