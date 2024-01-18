import { useState } from 'react'
import { Col, Row, Form, Input } from 'antd'
import { LIST_ATTRIBUTE_RED_TITLE } from '@/ultils/constants.ts'

export const FormInputNumber = ({
  index,
  attribute,
  title,
  isRequired = false,
  item,
  setData,
  setValidateAll = () => {},
  setIsChangeGroup = () => {}
}: any) => {
  const [value, setValue] = useState<any>('')
  const [errorValue, setErrorValue] = useState<any>({ status: false, message: null })

  setValidateAll([attribute], () => {
    let check = true
    if (isRequired && !value) {
      check = false
      setErrorValue({
        status: true,
        message: `Please choice ${title}`
      })
    }
    return check
  })

  const onChange = (e) => {
    const { value: inputValue } = e.target
    const reg = /^-?\d*(\.\d*)?$/
    if (reg.test(inputValue) || inputValue === '' || inputValue === '-') {
      setValue(parseInt(inputValue, 10))
      setErrorValue({ status: false, message: null })

      setData((prev) => {
        prev[index] = { ...item, quantity: inputValue }
        return prev
      })
      setIsChangeGroup((prev) => !prev)
    }
  }

  return (
    <Form.Item>
      <Row className={'display-flex'}>
        <Col span={6}>
          <span className={LIST_ATTRIBUTE_RED_TITLE.includes(attribute) ? 'title-red' : ''}>{title}</span>
          {isRequired && <span style={{ color: 'red' }}> *</span>}
        </Col>
        <Col span={16}>
          <Input size={'large'} value={value} onChange={onChange} min={0} />
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
