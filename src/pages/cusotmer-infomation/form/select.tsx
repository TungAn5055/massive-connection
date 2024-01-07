import React, { useState, useEffect } from 'react'
import { Col, Row, Select, Form } from 'antd'

export const FormSelect = ({ data, setData, attribute, isDisabled = false, title, isRequired = false }) => {
  const [value, setValue] = useState(null)
  const [errorValue, setErrorValue] = useState(false)

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
    if (data) {
      setValue(data)
    }
  }, [data])

  return (
    <Form.Item>
      <Row className={'display-flex'}>
        <Col span={6}>
          <span>{title}</span>
          {isRequired && <span style={{ color: 'red' }}> *</span>}
        </Col>
        <Col span={18}>
          <Select
            size={'large'}
            // value={valueType}
            // onChange={handleChangeType}
            style={{
              width: '90%'
            }}
            disabled={isDisabled}
            // options={options}
          />
        </Col>
      </Row>
    </Form.Item>
  )
}
