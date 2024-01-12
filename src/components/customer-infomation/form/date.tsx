import React, { useState, useEffect } from 'react'
import { Col, Row, Select, Form, DatePicker } from 'antd'
import { FORMAT_DATE, LIST_ATTRIBUTE_RED_TITLE } from '@/ultils/constants.ts'
import moment from 'moment'

export const FormDate = ({
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
    if (dataInfo) {
      setValue(dataInfo)
    }
  }, [dataInfo])

  return (
    <Form.Item>
      <Row className={'display-flex'}>
        <Col span={6}>
          <span className={LIST_ATTRIBUTE_RED_TITLE.includes(attribute) && 'title-red'}>{title}</span>
          {isRequired && <span className={'title-red'}> *</span>}
        </Col>
        <Col span={18}>
          <DatePicker
            style={{ width: '90%', padding: '6px' }}
            value={moment(value)}
            // onChange={(e) => onChangeSyncDate(e)}
            // disabledDate={disableActiveTime}
            format={FORMAT_DATE.DAY_MONTH_YEAR}
          />
        </Col>
      </Row>
    </Form.Item>
  )
}
