import { useState, useEffect } from 'react'
import { Col, Row, Form, DatePicker } from 'antd'
import { FORMAT_DATE, LIST_ATTRIBUTE_RED_TITLE } from '@/ultils/constants.ts'
import dayjs from 'dayjs'

export const FormDate = ({
  attribute,
  attributeSave,
  title,
  isRequired = false,
  readOnly = false,
  dataCustomer = {},
  setValidateAll = () => {},
  setDataInfo = () => {}
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
  const onChangeSyncDate = (date) => {
    setValue(date)
    if (attributeSave == 'signDate') {
      setDataInfo({
        [attributeSave ?? attribute]: dayjs(date).format('YYYY-MM-DD'),
        effectDate: dayjs(date).format('YYYY-MM-DD')
      })
    } else {
      setDataInfo({ [attributeSave ?? attribute]: dayjs(date).format('YYYY-MM-DD') })
    }
  }

  useEffect(() => {
    if (attribute && dataCustomer[attribute]) {
      setValue(dataCustomer[attribute])
      if (attributeSave) {
        if (attributeSave == 'signDate') {
          setDataInfo({ [attributeSave ?? attribute]: dataCustomer[attribute], effectDate: dataCustomer[attribute] })
        } else {
          setDataInfo({ [attributeSave ?? attribute]: dataCustomer[attribute] })
        }
      }
    } else {
      const currentDate = dayjs()
      setValue(currentDate)
      if (attributeSave) {
        if (attributeSave == 'signDate') {
          setDataInfo({
            [attributeSave ?? attribute]: dayjs(currentDate).format('YYYY-MM-DD'),
            effectDate: dayjs(currentDate).format('YYYY-MM-DD')
          })
        } else {
          setDataInfo({ [attributeSave ?? attribute]: dayjs(currentDate).format('YYYY-MM-DD') })
        }
      }
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
            onChange={onChangeSyncDate}
            // disabledDate={disableActiveTime}
            format={FORMAT_DATE.DAY_MONTH_YEAR}
            inputReadOnly={readOnly}
            disabled={readOnly}
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
