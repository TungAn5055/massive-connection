import { useState, useEffect } from 'react'
import { Col, Row, Select, Form } from 'antd'
import { LIST_ATTRIBUTE_RED_TITLE } from '@/ultils/constants.ts'

export const FormSelectIdType = ({
  attribute,
  attributeSave = null,
  isDisabled = false,
  title,
  isRequired = false,
  dataSource = [],
  defaultValue = null,
  placholder,
  dataCustomer = {},
  setValidateAll = () => {},
  setDataInfo = () => {}
}: any) => {
  const [value, setValue] = useState(defaultValue)
  const [errorValue, setErrorValue] = useState<any>({ status: false, message: null })

  setValidateAll([attribute], () => {
    let check = true
    if (isRequired && !value) {
      check = false
      setErrorValue({
        status: true,
        message: `Por favor seleccione lo solicitado`
      })
    }
    return check
  })

  const onChange = (e) => {
    setValue(e)
    if (e) {
      setErrorValue({ status: false, message: null })
    }
    setTimeout(() => {
      if (attributeSave) {
        setDataInfo({ [attributeSave ?? attribute]: e })
      }
    }, 1300)
  }

  useEffect(() => {
    if (attribute && dataCustomer[attribute]) {
      setValue(dataCustomer[attribute])
    }
  }, [dataCustomer])

  useEffect(() => {
    if (dataSource?.length && dataSource?.length === 1) {
      setValue(dataSource[0]?.value)
      if (attributeSave) {
        setDataInfo({ [attributeSave ?? attribute]: dataSource[0]?.value })
      }
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
