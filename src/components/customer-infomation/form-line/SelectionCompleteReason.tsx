import { useState, useEffect } from 'react'
import { Col, Row, Form, Select } from 'antd'
import { LIST_ATTRIBUTE_RED_TITLE, STATE } from '@/ultils/constants.ts'
import useCustomGetData from '@/hooks/useGetStaffCode'

export const SelectionCompleteReason = ({
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

  const onChange = (data) => {
    setValue(data)
    setData((prev) => {
      prev[index] = { ...item, reason: data }
      return prev
    })
    setIsChangeGroup((prev) => !prev)
  }

  useEffect(() => {
    if (item?.productCode) {
      requestGetStaffCode(`/api/get-reason?code=${item?.productCode}`)
    }
  }, [item?.productCode])

  useEffect(() => {
    if (responseStaffCode?.data?.length > 0 && responseStaffCode?.state === STATE?.SUCCESS) {
      setOptions(
        responseStaffCode?.data.map((it) => ({
          value: it?.code,
          label: it?.name
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
          <Select
            allowClear
            showSearch
            onChange={onChange}
            value={value}
            options={options ?? []}
            disabled={isDisabled}
            style={{
              width: '90%',
              height: 38
            }}
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
