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
    if (attribute === 'email' || attribute === 'contactEmail') {
      if (isRequired && (!value || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value))) {
        check = false
        setErrorValue({
          status: true,
          message: `Por favor ingrese lo solicitado`
        })
      }
    } else {
      if (isRequired && !value) {
        check = false
        setErrorValue({
          status: true,
          message: `Por favor ingrese lo solicitado`
        })
      }
    }

    return check
  })

  const onChange = (e) => {
    const val = e.target.value
    setValue(val)
    setTimeout(() => {
      if (attributeSave) {
        setDataInfo({ [attributeSave ?? attribute]: e.target.value?.trim() })
      }
    }, 1300)
  }

  const onBlur = (e) => {
    if (attribute === 'email' || attribute === 'contactEmail') {
      if (e.target.value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value)) {
        setErrorValue({
          status: true,
          message: 'El e-mail ingresado es incorrecto'
        })
      } else {
        setErrorValue({ status: false, message: null })
      }
    } else if (attribute === 'repreCustIdNox') {
      if (!/^\d{8}$/.test(e.target.value)) {
        setErrorValue({
          status: true,
          message: 'Solo se permite números (8 digitos)'
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
      if (/\d/.test(e.target.value)) {
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
          setDataInfo({ [attributeSave]: dataCustomer[attributeSave] })
        }
      }
    } else if (attribute === 'repreCustIdNox' && dataCustomer['repreCustIdNo']) {
      if (!listAttrRepresentanteLegal.includes(attributeSave)) {
        setValue(dataCustomer['repreCustIdNo'])
        if (attributeSave) {
          setDataInfo({ [attributeSave]: dataCustomer['repreCustIdNo'] })
        }
      }
    }
  }, [dataCustomer])

  useEffect(() => {
    if (dataInfo?.typeOfContact == 1 && listAttrRepresentanteLegal.includes(attributeSave)) {
      if (attribute && dataCustomer[attribute]) {
        setValue(dataCustomer[attribute])
        if (attributeSave) {
          setDataInfo({ [attributeSave]: dataCustomer[attribute] })
        }
        setErrorValue({ status: false, message: null })
      } else if (attribute === 'repreCustIdNox' && dataCustomer['repreCustIdNo']) {
        if (listAttrRepresentanteLegal.includes(attributeSave)) {
          setValue(dataCustomer['repreCustIdNo'])
          if (attributeSave) {
            setDataInfo({ [attributeSave]: dataCustomer['repreCustIdNo'] })
          }
        }
        setErrorValue({ status: false, message: null })
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
