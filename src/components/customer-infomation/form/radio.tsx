import React, { useState, useEffect } from 'react'
import {Col, Row, Select, Form, Radio} from 'antd'
import {LIST_ATTRIBUTE_RED_TITLE} from "@/ultils/constants.ts";

export const FormRadio = ({ data, setData, attribute, isDisabled = false, title, isRequired = false }) => {
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
          <span className={LIST_ATTRIBUTE_RED_TITLE.includes(attribute) && "title-red"}>{title}</span>
          {isRequired && <span style={{color: 'red'}}> *</span>}
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
