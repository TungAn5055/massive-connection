import { useState, useEffect } from 'react'
import { Col, Row, Form, AutoComplete } from 'antd'
import { LIST_ATTRIBUTE_RED_TITLE, STATE } from '@/ultils/constants.ts'
import useCustomGetData from '@/hooks/useGetStaffCode'

export const TextAutoCompletePlan = ({
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
  const [responseGetPrice, requestGetPrice] = useCustomGetData()

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
      requestGetStaffCode(`/api/get-plan?name=${val}`)
    }
  }

  const onChange = (data) => {
    setValue(data)
  }

  const onSelect = (data, list) => {
    if (data) {
      setValue(data)
      setErrorValue({ status: false, message: null })
      setData((prev) => {
        prev[index] = { ...item, plan: data, offerId: list?.offerId, productCode: list?.productCode }
        return prev
      })
      setIsChangeGroup((prev) => !prev)
      if (list?.offerId) {
        requestGetPrice(`/api/get-price?offerId=${list?.offerId}`)
      }
    }
  }

  useEffect(() => {
    if (responseStaffCode?.data?.length > 0 && responseStaffCode?.state === STATE?.SUCCESS) {
      setOptions(
        responseStaffCode?.data.map((it) => ({
          value: it?.productName,
          offerId: it?.offerId,
          productName: it?.productName,
          productCode: it?.productCode
        }))
      )
    } else {
      setOptions([])
    }
  }, [responseStaffCode])

  useEffect(() => {
    if (responseGetPrice?.data && responseGetPrice?.state === STATE?.SUCCESS) {
      setData((prev) => {
        prev[index] = { ...item, unit_price: responseGetPrice?.data }
        return prev
      })
      setIsChangeGroup((prev) => !prev)
    }
  }, [responseGetPrice])

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
            // notFoundContent={'Not Found'}
          />
        </Col>
        {errorValue?.status && (
          <>
            <Col span={6}> </Col>
            <Col span={18}>
              <div className={'message-error-data'}>{errorValue?.message}</div>
            </Col>
          </>
        )}
      </Row>
    </Form.Item>
  )
}
