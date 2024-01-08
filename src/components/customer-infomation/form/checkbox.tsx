import  { useState, useEffect } from 'react'
import { Col, Row, Form, Checkbox } from 'antd'

export const FormCheckBox = ({ data, setData, attribute, isDisabled = false, title, isRequired = false }) => {
  const [value, setValue] = useState(null)
  const [errorValue, setErrorValue] = useState(false)

  const options = [
    {
      label: 'A domicillo',
      value: '1',
    },
    {
      label: 'Email',
      value: '2',
    },
    {
      label: 'SMS',
      value: '3',
    },
  ];

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
        <Col span={6}>
          <span>{title}</span>
          {isRequired && <span style={{ color: 'red' }}> *</span>}
        </Col>
        <Col span={18}>
          <Checkbox.Group options={options} defaultValue={['Apple']} onChange={onChange} />
        </Col>
      </Row>
    </Form.Item>
  )
}
