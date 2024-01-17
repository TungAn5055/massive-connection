import { useState, useEffect } from 'react'
import { Col, Row, Form, AutoComplete } from 'antd'
import { LIST_ATTRIBUTE_RED_TITLE, STATE } from '@/ultils/constants.ts'
import useCustomerSearch from '@/hooks/useGetStaffCode'

export const FormTextAutoComplete = ({
  attribute,
  isDisabled = false,
  title,
  isRequired = false,
  isCustomSpan = false,
  placeholder = ''
}: any) => {
  const [value, setValue] = useState('')
  const [options, setOptions] = useState<any>([])
  const [errorValue, setErrorValue] = useState<any>({ status: false, message: null })

  const { responseStaffCode, requestGetStaffCode } = useCustomerSearch()
  const onSearch = (val) => {
    if (val?.length > 1) {
      requestGetStaffCode({
        staffCode: val?.toUpperCase()
      })
    }
  }

  const onChange = (data) => {
    setValue(data)
  }

  const onSelect = (data) => {
    console.log('onSelect', data)
    if (data) {
      setValue(data)
      setErrorValue({ status: false, message: null })
    }
  }

  useEffect(() => {
    console.log('responseStaffCode+++', responseStaffCode)
    if (responseStaffCode?.data?.length > 0 && responseStaffCode?.state === STATE?.SUCCESS) {
      setOptions(responseStaffCode?.data.map((it) => ({ value: it })))
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
          {errorValue?.status && <div style={{ color: ' #d71e1f' }}>{errorValue?.message}</div>}
        </Col>
      </Row>
    </Form.Item>
  )
}
