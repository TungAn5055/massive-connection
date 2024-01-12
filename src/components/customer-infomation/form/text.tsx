import React, { useState, useEffect } from 'react'
import { Col, Row, Form, Input } from 'antd'
import { LIST_ATTRIBUTE_RED_TITLE } from '@/ultils/constants.ts'
import moment from 'moment'

export const FormText = ({
  dataCustomer = {},
  dataInfo,
  setDataInfo,
  attribute,
  isDisabled = false,
  title,
  isRequired = false,
  isCustomSpan = false,
  placeholder = null,
  type = null
}) => {
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
    if (attribute && dataCustomer[attribute]) {
      if (attribute === 'repreCustIdIssueDate' || attribute === 'repreCustIdExpireDate') {
        const val = moment(dataCustomer[attribute]).format('DD/MM/yyyy')
        setValue(val)
      } else {
        setValue(dataCustomer[attribute])
      }
    }
  }, [dataCustomer])

  return (
    <Form.Item>
      <Row className={'display-flex'}>
        <Col span={isCustomSpan ? 3 : 6}>
          <span className={LIST_ATTRIBUTE_RED_TITLE.includes(attribute) && 'title-red'}>{title}</span>
          {isRequired && <span style={{ color: 'red' }}> *</span>}
        </Col>
        <Col span={isCustomSpan ? 21 : 18}>
          <Input
            size={'large'}
            value={value}
            // onChange={handleChangeType}
            style={{
              width: isCustomSpan ? '96%' : '90%'
            }}
            disabled={isDisabled}
            placeholder={placeholder}
          />
        </Col>
      </Row>
    </Form.Item>
  )
}
