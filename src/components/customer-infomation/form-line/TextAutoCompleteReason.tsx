import { useState, useEffect } from 'react'
import { Col, Row, Form, AutoComplete } from 'antd'
import { LIST_ATTRIBUTE_RED_TITLE, STATE } from '@/ultils/constants.ts'
import useCustomGetData from '@/hooks/useGetStaffCode'

export const TextAutoCompleteReason = ({
  attribute,
  isDisabled = false,
  title,
  isRequired = false,
  index,
  item,
  setData = () => {},
  setValidateAll = () => {},
  setIsChangeGroup = () => {}
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
        message: `Please input ${title}`
      })
    }
    return check
  })
  const onSearch = (val) => {
    if (val?.length >= 1) {
      requestGetStaffCode(`/api/get-shop?code=${val}`)
    }
  }

  const onChange = (data) => {
    setValue(data)
    setData((prev) => {
      prev[index] = { ...item, reason: data }
      return prev
    })
    setIsChangeGroup((prev) => !prev)
  }

  const onSelect = (data, list) => {
    if (data) {
      setValue(data)
      setErrorValue({ status: false, message: null })
      setData((prev) => {
        prev[index] = { ...item, reason: data, reasonCode: list?.code }
        return prev
      })
      setIsChangeGroup((prev) => !prev)
    }
  }

  useEffect(() => {
    if (responseStaffCode?.data?.length > 0 && responseStaffCode?.state === STATE?.SUCCESS) {
      setOptions(
        responseStaffCode?.data.map((it) => ({
          value: it?.name,
          code: it?.code
        }))
      )
    } else {
      setOptions([])
    }
  }, [responseStaffCode])

  return (
    <Form.Item>
      <Row className={'display-flex'}>
        <Col span={6}>
          <span className={LIST_ATTRIBUTE_RED_TITLE.includes(attribute) ? 'title-red' : ''}>{title}</span>
          {isRequired && <span style={{ color: 'red' }}> *</span>}
        </Col>
        <Col span={18}>
          <AutoComplete
            options={options ?? []}
            size={'large'}
            value={value}
            onSelect={onSelect}
            onChange={onChange}
            onSearch={(text) => onSearch(text)}
            style={{
              width: '90%'
            }}
            disabled={isDisabled}
            placeholder={''}
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
