import { useState, useEffect } from 'react'
import { Col, Row, Form, Input } from 'antd'
import { LIST_ATTRIBUTE_RED_TITLE } from '@/ultils/constants.ts'
import moment from 'moment'

export const FormText = ({
  dataCustomer = {},
  attribute,
  isDisabled = false,
  title,
  isRequired = false,
  isCustomSpan = false,
  placeholder = ''
}: any) => {
  const [value, setValue] = useState('')
  // const [errorValue, setErrorValue] = useState(false)

  const onChange = (e) => {
    setValue(e.target.value)
  }

  useEffect(() => {
    if (attribute && dataCustomer[attribute]) {
      if (attribute === 'repreCustIdIssueDate' || attribute === 'repreCustIdExpireDate') {
        const val: any = moment(dataCustomer[attribute]).format('DD/MM/yyyy')
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
          <span className={LIST_ATTRIBUTE_RED_TITLE.includes(attribute) ? 'title-red' : ''}>{title}</span>
          {isRequired && <span style={{ color: 'red' }}> *</span>}
        </Col>
        <Col span={isCustomSpan ? 21 : 18}>
          <Input
            size={'large'}
            value={value}
            onChange={onChange}
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
