import React, { useState, useEffect } from 'react'
import { Col, Row, Form, Checkbox } from 'antd'
import { LIST_ATTRIBUTE_RED_TITLE } from '@/ultils/constants.ts'

export const FormCheckBox = ({
  dataInfo,
  setDataInfo,
  attribute,
  isDisabled = false,
  title,
  isRequired = false,
  dataCustomer = {}
}) => {
  const [value, setValue] = useState(null)
  const [errorValue, setErrorValue] = useState(false)

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
    if (e.target.value) {
      setValue(e.target.value)
    } else {
      setErrorValue(true)
    }
  }
  const onBlur = (e) => {
    if (e.target.value) {
      setValue(e.target.value.trim())
    } else {
      setErrorValue(true)
    }
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
          <span className={LIST_ATTRIBUTE_RED_TITLE.includes(attribute) && 'title-red'}>{title}</span>
          {isRequired && <span style={{ color: 'red' }}> *</span>}
        </Col>
        <Col span={18}>
          <Checkbox.Group options={options} defaultValue={['Apple']} onChange={onChange} />
        </Col>
      </Row>
    </Form.Item>
  )
}
