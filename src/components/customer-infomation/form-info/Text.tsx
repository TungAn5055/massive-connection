import { useState, useEffect } from 'react'
import { Col, Row, Form, Input } from 'antd'
import { LIST_ATTRIBUTE_RED_TITLE, listAttrRepresentanteLegal } from '@/ultils/constants.ts'

export const FormText = ({
  dataInfo = {},
  dataCustomer = {},
  attribute,
  attributeSave = null,
  isDisabled = false,
  readOnly = false,
  title,
  isRequired = false,
  isCustomSpan = false,
  placeholder = '',
  setValidateAll = () => {},
  setDataInfo = () => {}
}: any) => {
  const [value, setValue] = useState<any>(null)
  const [errorValue, setErrorValue] = useState<any>({ status: false, message: null })

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

  const onChange = (e) => {
    const val = e?.target?.value ? e.target.value?.trim() : e.target.value
    setValue(val)
    setTimeout(() => {
      if (attributeSave) {
        setDataInfo({ [attributeSave ?? attribute]: val })
      }
    }, 1300)
  }

  const onBlur = (e) => {
    if (attribute === 'email') {
      if (e.target.value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value)) {
        setErrorValue({
          status: true,
          message: 'The input is not valid E-mail'
        })
      } else {
        setErrorValue({ status: false, message: null })
      }
    } else if (attribute === 'repreCustIdNo') {
      if (!/^\d{0,8}$/.test(e.target.value)) {
        setErrorValue({
          status: true,
          message: 'Only allow number and max 8 digits'
        })
      } else {
        setErrorValue({ status: false, message: null })
      }
    } else if (attribute === 'repreCustTelFax') {
      if (!/^\d+$/.test(e.target.value) || e.target.value.length < 7 || e.target.value.length > 9) {
        setErrorValue({
          status: true,
          message: 'Only allow number and form 7 - 9 digits'
        })
      } else {
        setErrorValue({ status: false, message: null })
      }
    } else if (attribute === 'position') {
      if (!/^[a-zA-Z]+$/.test(e.target.value)) {
        setErrorValue({
          status: true,
          message: 'Only allow character'
        })
      } else {
        setErrorValue({ status: false, message: null })
      }
    } else {
      setErrorValue({ status: false, message: null })
    }
  }

  useEffect(() => {
    if (attribute && dataCustomer[attribute]) {
      if (!listAttrRepresentanteLegal.includes(attributeSave)) {
        setValue(dataCustomer[attribute])
        if (attributeSave) {
          setDataInfo({ [attributeSave]: dataCustomer[attribute] })
        }
      }
    }
  }, [dataCustomer])

  useEffect(() => {
    if (dataInfo?.typeOfContact == 1 && listAttrRepresentanteLegal.includes(attributeSave)) {
      if (attribute && dataCustomer[attribute]) {
        setValue(dataCustomer[attribute])
      }
      if (attributeSave) {
        setDataInfo({ [attributeSave]: dataCustomer[attribute] })
      }
    }
  }, [dataInfo?.typeOfContact])

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
            onBlur={onBlur}
            style={{
              width: isCustomSpan ? '96%' : '90%'
            }}
            disabled={isDisabled}
            placeholder={placeholder}
            readOnly={readOnly}
          />
        </Col>
        {errorValue?.status && (
          <>
            <Col span={isCustomSpan ? 3 : 6}> </Col>
            <Col span={isCustomSpan ? 21 : 18}>
              <div className={'message-error-data'}>{errorValue?.message}</div>{' '}
            </Col>
          </>
        )}
      </Row>
    </Form.Item>
  )
}
