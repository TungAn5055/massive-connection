import { useState, useEffect } from 'react'
import { Col, Row, Form, DatePicker } from 'antd'
import { FORMAT_DATE, LIST_ATTRIBUTE_RED_TITLE } from '@/ultils/constants.ts'
import dayjs from 'dayjs'

export const FormDate = ({
  attribute,
  title,
  isRequired = false,
  dataCustomer = {},
  setValidateAll = () => {}
}: any) => {
  const [value, setValue] = useState(dayjs())
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
  const onChangeSyncDate = (e) => {
    setValue(e.target.value)
  }

  useEffect(() => {
    if (attribute && dataCustomer[attribute]) {
      setValue(dataCustomer[attribute])
    }
  }, [dataCustomer])

  return (
    <Form.Item>
      <Row className={'display-flex'}>
        <Col span={6}>
          <span className={LIST_ATTRIBUTE_RED_TITLE.includes(attribute) ? 'title-red' : ''}>{title}</span>
          {isRequired && <span className={'title-red'}> *</span>}
        </Col>
        <Col span={18}>
          <DatePicker
            style={{ width: '90%', padding: '6px' }}
            value={dayjs(value, 'YYYY-MM-DD')}
            onChange={(e) => onChangeSyncDate(e)}
            // disabledDate={disableActiveTime}
            format={FORMAT_DATE.DAY_MONTH_YEAR}
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
