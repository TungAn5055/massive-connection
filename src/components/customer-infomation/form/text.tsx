import { useState, useEffect } from 'react'
import { Col, Row, Form, Input } from 'antd'

export const FormText = ({
  data,
  setData,
  attribute,
  isDisabled = false,
  title,
  isRequired = false,
  isCustomSpan = false,
  placeholder = null
}) => {
  const [value, setValue] = useState(null)
  const [errorValue, setErrorValue] = useState(false)

  const onChange = (e) => {
    if (e.target.value) {
      setValue(e.target.value)
    } else {
      setErrorValue(true)
    }
  }
  const onBlur = (e) => {
    if (e.target.value) {
      setValue(e.target.value.trim())
    } else {
      setErrorValue(true)
    }
  }

  useEffect(() => {
    if (data) {
      setValue(data)
    }
  }, [data])

  return (
    <Form.Item>
      <Row className={'display-flex'}>
        <Col span={isCustomSpan ? 3 : 6}>
          <span>{title}</span>
          {isRequired && <span style={{ color: 'red' }}> *</span>}
        </Col>
        <Col span={isCustomSpan ? 21 : 18}>
          <Input
            size={'large'}
            // value={valueType}
            // onChange={handleChangeType}
            style={{
              width: isCustomSpan ? '96%' : '90%'
            }}
            disabled={isDisabled}
            placeholder={placeholder}
          />
        </Col>
      </Row>
    </Form.Item>
  )
}
