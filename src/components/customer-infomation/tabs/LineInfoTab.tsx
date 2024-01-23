import { useMemo, useState } from 'react'
import { Button, Col, Form, Row, Table, Input, Radio, Space } from 'antd'
import Column from 'antd/es/table/Column'
import { EmptyUI } from '@/components/ui-source/empty'
import { NO_DATA } from '@/ultils/constants'
import { LoadingRegion } from '@/components/ui-source/loading'
import { PlusOutlined } from '@ant-design/icons'
import { FormInputNumber } from '@/components/customer-infomation/form-line/InputNumber'
import { TextAutoCompletePlan } from '@/components/customer-infomation/form-line/TextAutoCompletePlan'
import { TextAutoCompleteReason } from '@/components/customer-infomation/form-line/TextAutoCompleteReason'
import { TextAutoCompleteBranch } from '@/components/customer-infomation/form-line/TextAutoCompleteBranch'
import { colorRowTotal, formatPrice } from '@/ultils/helper.ts'

const LineInfoTab = ({ setActiveTab, setDataInfo, setDataInfoGroup }: any) => {
  const [isTotal, setIsTotal] = useState<any>('')
  const [isChangeGroup, setIsChangeGroup] = useState<boolean>(false)
  const [isDisabledTotal, setIsDisabledTotal] = useState<boolean>(true)
  const [idxIsLine, setIdxIsLine] = useState<number>(0)
  const [listGroups, setListGroups] = useState<any>([
    {
      plan: null,
      quantity: null,
      reason: null,
      branch: null,
      unit_price: null
    }
  ])

  const [isChanged, setIsChanged] = useState(false)

  const tableLoading = {
    spinning: false,
    indicator: <LoadingRegion />
  }

  //validate
  const validateField = {}
  const setValidateAll = (index, func) => {
    validateField[index] = func
  }

  const addGroup = () => {
    setListGroups((prev) => {
      prev.push({})
      return prev
    })
    setIsChanged(!isChanged)
  }

  const removeGroup = (index) => {
    setListGroups(
      (prev) =>
        prev?.filter((it, inx) => {
          if (inx !== index) {
            return it
          }
        })
    )
  }
  const onNextStep = () => {
    setActiveTab((prev) => (parseInt(prev) + 1).toString())
  }

  const onChangeTotal = (e) => {
    const { value: inputValue } = e.target
    const reg = /^\d*(\.\d*)?$/
    if (reg.test(inputValue)) {
      setIsTotal(parseInt(inputValue, 10))
      if (inputValue > 0) {
        setIsDisabledTotal(false)
      }
      setDataInfo({ totalLines: inputValue })
    }
  }

  const onChangeLineActive = (e, idx) => {
    if (e?.target?.checked) {
      setIdxIsLine(idx)
    }
  }

  const dataTable = useMemo(() => {
    let res: any[] = []
    let itemTotal: any = {
      title: `Total`,
      is_total: true,
      plan: null,
      quantity: null,
      reason: null,
      branch: null,
      unit_price: null,
      total_price: null
    }
    const dataGroupFull = listGroups?.filter(
      (it) => it?.plan && it?.quantity && it?.reason && it?.branch && it?.unit_price
    )
    res = dataGroupFull?.map((item, index) => {
      return {
        ...item,
        index: index,
        title: `Group ${index + 1}`,
        total_price: item?.quantity * item?.unit_price,
        is_line_active: index === idxIsLine ? true : false,
        is_total: false
      }
    })
    let total = 0
    let quantity = 0
    let unitPrice = 0
    let totalPrice = 0

    res?.forEach((item) => {
      total += 1;
      quantity += parseInt(item?.quantity)
      unitPrice += parseFloat(item?.unit_price)
      totalPrice += parseFloat(item?.total_price)
    })

    itemTotal = { ...itemTotal, quantity: quantity, unit_price: unitPrice, total_price: totalPrice, total_items: total, is_total: true }

    if(total > 0){
      res.push(itemTotal)
      let itemActive = res?.find((it) => it?.is_line_active);
      setDataInfo({contractValue: total, quantityOfPlans: itemActive?.index + 1 })
    }
    return res
  }, [listGroups, isChangeGroup, idxIsLine])

  const isdDisableButtonNext = useMemo(() => {
    let flag = true;
    if(isTotal && dataTable?.length > 0) {
      let itemTotal = dataTable?.find((it) => it?.is_total)
      if(itemTotal?.quantity == isTotal) {
        flag = false
      }
    }

    return flag;

  }, [isTotal, dataTable])

  return (
    <>
      <Form className={'form-search-customer'} name='advanced_search'>
        <fieldset>
          <legend>
            <span className={'legend-color'}>Line information</span>
          </legend>
          {/*line 1*/}
          <Row gutter={24} style={{ marginLeft: '10px' }}>
            <Col span={10}>
              <Form.Item>
                <Row className={'display-flex'}>
                  <Col span={6}>
                    <span>Total quantity of lines</span>
                    <span style={{ color: 'red' }}> *</span>
                  </Col>
                  <Col span={16}>
                    <Input size={'large'} value={isTotal} onChange={onChangeTotal} />
                  </Col>
                </Row>
              </Form.Item>
            </Col>
          </Row>

          {listGroups?.map((item, index) => (
            <Form className={'form-search-customer'} name='advanced_search'>
              <fieldset>
                <legend>
                  <span className={'legend-color'}>Group {index + 1}</span>
                </legend>
                <div style={{ marginLeft: '10px' }}>
                  {/*line 1*/}
                  <Row gutter={24} style={{ marginBottom: '30px' }}>
                    <Col span={10}>
                      <TextAutoCompletePlan
                        index={index}
                        item={item}
                        setData={setListGroups}
                        attribute={'plan'}
                        title={'Plan'}
                        isRequired={true}
                        setValidateAll={setValidateAll}
                        setIsChangeGroup={setIsChangeGroup}
                        isDisabled={isDisabledTotal}
                        setDataInfoGroup={setDataInfoGroup}
                      />
                    </Col>
                    <Col span={10}>
                      <FormInputNumber
                        index={index}
                        item={item}
                        setData={setListGroups}
                        attribute={'quantily'}
                        title={'Quantity of lines'}
                        isRequired={true}
                        setIsChangeGroup={setIsChangeGroup}
                        isDisabled={isDisabledTotal}
                        max={isTotal}
                      />
                    </Col>
                  </Row>

                  {/*line 2*/}
                  {item?.plan && (
                    <>
                      <Row gutter={24} style={{ marginBottom: '30px' }}>
                        <Col span={10}>
                          <TextAutoCompleteReason
                            index={index}
                            item={item}
                            setData={setListGroups}
                            attribute={'reason'}
                            title={'Reason of connection'}
                            isRequired={true}
                            setIsChangeGroup={setIsChangeGroup}
                            isDisabled={isDisabledTotal}
                          />
                        </Col>
                        <Col span={10}>
                          <TextAutoCompleteBranch
                            index={index}
                            item={item}
                            setData={setListGroups}
                            attribute={'branch'}
                            title={'Branch Assigned'}
                            isRequired={true}
                            setIsChangeGroup={setIsChangeGroup}
                            isDisabled={isDisabledTotal}
                          />
                        </Col>
                      </Row>
                    </>
                  )}

                  {/*button remove group */}
                  {index > 0 && (
                    <>
                      <div className={'display-flex-left button-continue'}>
                        <Button type='default' size={'large'} onClick={() => removeGroup(index)}>
                          Delete
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              </fieldset>
            </Form>
          ))}

          <div className={'button-title button-title-green'}>
            <Button type='default' size={'large'} onClick={addGroup}>
              <PlusOutlined size={30} style={{ color: '#F0F8FF' }} /> Create a group of lines
            </Button>
          </div>

          {/* tables */}
          <Form className={'form-search-customer'} name='advanced_search'>
            <fieldset>
              <legend style={{ marginBottom: '0 !important' }}>
                <span className={'legend-color'}>Payment Information</span>
              </legend>
              <Table
                rowKey={(record: any) => record?.id}
                dataSource={dataTable}
                pagination={false}
                loading={tableLoading}
                locale={{ emptyText: <EmptyUI content={NO_DATA} /> }}
              >
                <Column
                  title={''}
                  dataIndex='title'
                  key='title'
                  render={(value, record: any) => {
                    return {
                      props: { style: colorRowTotal(record) },
                      children: <Space>{value}</Space>
                    }
                  }}
                />
                <Column
                  title={'Quantity of lines'}
                  dataIndex='quantity'
                  key='quantity'
                  render={(value, record: any) => {
                    return {
                      props: { style: colorRowTotal(record) },
                      children: <Space>{value}</Space>
                    }
                  }}
                />
                <Column
                  title={'Unit Price'}
                  dataIndex='unit_price'
                  key='unit_price'
                  render={(value, record: any) => {
                    return {
                      props: { style: colorRowTotal(record) },
                      children: <Space>S/ {formatPrice(value)}</Space>
                    }
                  }}
                />
                <Column
                  title={'Totals Price'}
                  dataIndex='total_price'
                  key='total_price'
                  render={(value, record: any) => {
                    return {
                      props: { style: colorRowTotal(record) },
                      children: <Space>S/ {formatPrice(value)}</Space>
                    }
                  }}
                />
                <Column
                  title={'Line Validation'}
                  dataIndex='is_line_active'
                  key='is_line_active'
                  render={(value, record: any, index) => {
                    return {
                      props: { style: colorRowTotal(record) },
                      children: (
                        <Space>
                          {!record?.is_total && (
                            <Radio checked={value} onChange={(e) => onChangeLineActive(e, index)} />
                          )}
                        </Space>
                      )
                    }
                  }}
                />
              </Table>
            </fieldset>
          </Form>
        </fieldset>
      </Form>

      <div className={'display-flex-center button-continue'}>
        <Button type='default' size={'large'} onClick={onNextStep} disabled={isdDisableButtonNext}>
          Continuar
        </Button>
      </div>
    </>
  )
}

export default LineInfoTab
