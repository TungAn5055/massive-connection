import { useState, useEffect } from 'react'
import { Col, Row, Form, AutoComplete } from 'antd'
import { LIST_ATTRIBUTE_RED_TITLE, STATE } from '@/ultils/constants.ts'
import useCustomGetData from '@/hooks/useGetStaffCode'

export const FormTextAutoComplete = ({
  attribute,
  attributeSave,
  isDisabled = false,
  title,
  isRequired = false,
  isCustomSpan = false,
  placeholder = '',
  setValidateAll = () => {},
  setDataInfo = () => {}
}: any) => {
  const [value, setValue] = useState('')
  const [options, setOptions] = useState<any>([])
  const [errorValue, setErrorValue] = useState<any>({ status: false, message: null })

  const [responseStaffCode, requestGetStaffCode] = useCustomGetData()

  setValidateAll([attribute], () => {
    let check = true
    if (isRequired && !value) {
      check = false
      setErrorValue({
        status: true,
        message: `Por favor ingrese lo solicitado`
      })
    }
    return check
  })
  const onSearch = (val) => {
    if (val?.length >= 1) {
      if (attribute == 'areaName') {
        requestGetStaffCode(`/api/get-area?name=${val?.toUpperCase()}`)
      } else {
        requestGetStaffCode(`/api/get-staff-code?staffCode=${val?.toUpperCase()}`)
      }
    }
  }

  const onChange = (data, info) => {
    if (attribute == 'areaName') {
      setValue(info?.label ?? data)
    } else {
      setValue(data)
    }
    if (data) {
      setErrorValue({ status: false, message: null })
    }
    setTimeout(() => {
      if (attributeSave) {
        setDataInfo({ [attributeSave ?? attribute]: data })
      }
    }, 1300)
  }

  const onSelect = (data, info) => {
    if (data) {
      if (attribute == 'areaName') {
        setValue(info?.label ?? data)
      } else {
        setValue(data)
      }

      setErrorValue({ status: false, message: null })
      if (attributeSave) {
        setDataInfo({ [attributeSave]: data })
      }
    }
  }

  useEffect(() => {
    if (responseStaffCode?.data && responseStaffCode?.state === STATE?.SUCCESS) {
      if (attribute == 'areaName') {
        const data = Object.keys(responseStaffCode?.data).map((it) => ({
          value: it,
          label: it + ' - ' + responseStaffCode?.data[it]
        }))
        setOptions(data)
      } else {
        setOptions(responseStaffCode?.data.map((it) => ({ value: it })))
      }
    } else {
      setOptions([])
    }
  }, [responseStaffCode])

  return (
    <Form.Item>
      <Row className={'display-flex'}>
        <Col span={isCustomSpan ? 3 : 6}>
          <span className={LIST_ATTRIBUTE_RED_TITLE.includes(attribute) ? 'title-red' : ''}>{title}</span>
          {isRequired && <span style={{ color: 'red' }}> *</span>}
        </Col>
        <Col span={isCustomSpan ? 21 : 18}>
          <AutoComplete
            options={options ?? []}
            size={'large'}
            value={value}
            onSelect={onSelect}
            onChange={onChange}
            onSearch={(text) => onSearch(text)}
            style={{
              width: isCustomSpan ? '96%' : '90%'
            }}
            disabled={isDisabled}
            placeholder={placeholder}
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
