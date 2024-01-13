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

  const onChange = (e) => {
    setValue(e)
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
        </Col>
      </Row>
    </Form.Item>
  )
}
