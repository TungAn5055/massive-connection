import { useState, useEffect } from 'react'
import { Col, Row, Form, Checkbox } from 'antd'
import { LIST_ATTRIBUTE_RED_TITLE } from '@/ultils/constants.ts'

export const FormCheckBox = ({
  attribute,
  attributeSave = null,
  title,
  isRequired = false,
  dataCustomer = {},
  setValidateAll = () => {},
  setDataInfo = () => {}
}: any) => {
  const [value, setValue] = useState([])
  const [errorValue, setErrorValue] = useState<any>({ status: false, message: null })

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

  setValidateAll([attribute], () => {
    let check = true
    if (isRequired && !value) {
      check = false
      setErrorValue({
        status: true,
        message: `Please enter input ${title}`
      })
    }
    return check
  })

  const onChange = (val) => {
    setValue(val)
    setTimeout(() => {
      if (attributeSave) {
        setDataInfo({ [attributeSave]: val })
      }
    }, 1300)
  }

  useEffect(() => {
    if (attribute && dataCustomer[attribute]) {
      setValue(dataCustomer[attribute])
      if (attributeSave) {
        setDataInfo({ [attributeSave]: dataCustomer[attribute] })
      }
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
        {errorValue?.status && (
          <>
            <Col span={6}> </Col>
            <Col span={18}>
              <div className={'message-error-data'}>{errorValue?.message}</div>{' '}
            </Col>
          </>
        )}
      </Row>
    </Form.Item>
  )
}
