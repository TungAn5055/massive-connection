import { useState, useEffect } from 'react'
import { Col, Row, Select, Form } from 'antd'
import { LIST_ATTRIBUTE_RED_TITLE } from '@/ultils/constants.ts'

export const FormSelect = ({
  attribute,
  isDisabled = false,
  title,
  isRequired = false,
  dataSource = [],
  defaultValue = null,
  placholder,
  dataCustomer = {}
}: any) => {
  const [value, setValue] = useState(defaultValue)
  const [errorValue, setErrorValue] = useState<any>({ status: false, message: null })

  const onChange = (e) => {
    setValue(e)
    if(e) {
      setErrorValue({ status: false, message: null })
    }
  }

  useEffect(() => {
    if (attribute && dataCustomer[attribute]) {
      setValue(dataCustomer[attribute])
    }
  }, [dataCustomer])

  useEffect(() => {
    if (dataSource?.length && dataSource?.length === 1) {
      setValue(dataSource[0])
    }
  }, [dataSource])

  return (
    <Form.Item>
      <Row className={'display-flex'}>
        <Col span={6}>
          <span className={LIST_ATTRIBUTE_RED_TITLE.includes(attribute) ? 'title-red' : ''}>{title}</span>
          {isRequired && <span style={{ color: 'red' }}> *</span>}
        </Col>
        <Col span={18}>
          <Select
            size={'large'}
            value={value}
            onChange={onChange}
            style={{
              width: '90%'
            }}
            disabled={isDisabled}
            options={dataSource}
            placeholder={placholder}
          />
          {errorValue?.status && <div style={{ color: ' #FD5202' }} className={"message-error"}>{errorValue?.message}</div>}
        </Col>
      </Row>
    </Form.Item>
  )
}
