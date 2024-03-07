import { useState, useEffect } from 'react'
import { Col, Row, Form, Radio } from 'antd'
import { LIST_ATTRIBUTE_RED_TITLE } from '@/ultils/constants.ts'

export const RadioNoti = ({
  attribute,
  title,
  isRequired = false,
  dataCustomer = {},
  setValidateAll = () => {},
  attributeSave,
  setDataInfo = () => {}
}: any) => {
  const [value, setValue] = useState('1')
  const [errorValue, setErrorValue] = useState<any>({ status: false, message: null })

  setValidateAll([attribute], () => {
    let check = true
    if (isRequired && !value) {
      check = false
      setErrorValue({
        status: true,
        message: `Por favor seleccione lo solicitado`
      })
    }
    return check
  })

  const onChange = (e) => {
    setValue(e.target.value)
    setErrorValue({
      status: false,
      message: null
    })
    setTimeout(() => {
      if (attributeSave) {
        setDataInfo({ [attributeSave]: e.target.value })
      }
    }, 1300)
  }

  useEffect(() => {
    if (attribute && dataCustomer[attribute]) {
      setValue(dataCustomer[attribute])
      if (attributeSave) {
        setDataInfo({ [attributeSave]: dataCustomer[attribute] })
      }
    } else {
      if (attributeSave) {
        setDataInfo({ [attributeSave]: 1 })
      }
    }
  }, [dataCustomer])

  return (
    <Form.Item>
      <Row className={'display-flex'}>
        <Col span={6}>
          <span className={LIST_ATTRIBUTE_RED_TITLE.includes(attribute) ? 'title-red' : ''}>{title}</span>
          {isRequired && <span style={{ color: 'red' }}> *</span>}
        </Col>
        <Col span={18}>
          <Radio.Group onChange={onChange} value={value}>
            { Object.keys(dataCustomer?.noticeCharges)?.length > 0 &&
                Object.keys(dataCustomer?.noticeCharges).map((it) => (
                  <Radio value={it}>{dataCustomer?.noticeCharges[it]}</Radio>
                ))
            }
          </Radio.Group>
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
