import React, { useState, useEffect } from 'react'
import { Col, Row, Select, Form } from 'antd'
import {LIST_ATTRIBUTE_RED_TITLE} from "@/ultils/constants.ts";

export const FormSelect = ({ data, setData, attribute, isDisabled = false, title, isRequired = false, dataSource = [],defaultValue = null, placholder }) => {
  const [value, setValue] = useState(defaultValue)
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
          <Select
              size={'large'}
              value={value}
              // onChange={handleChangeType}
            style={{
              width: '90%'
            }}
            disabled={isDisabled}
            options={dataSource}
            placeholder={placholder}
          />
        </Col>
      </Row>
    </Form.Item>
  )
}
