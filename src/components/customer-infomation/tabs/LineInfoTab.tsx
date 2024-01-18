import { useState } from 'react'
import { Button, Col, Form, Row, Table, Input } from 'antd'
import Column from 'antd/es/table/Column'
import { EmptyUI } from '@/components/ui-source/empty'
import { NO_DATA } from '@/ultils/constants'
import { LoadingRegion } from '@/components/ui-source/loading'
import { PlusOutlined } from '@ant-design/icons'
import { FormInputNumber } from '@/components/customer-infomation/form-line/InputNumber'
import { TextAutoCompletePlan } from '@/components/customer-infomation/form-line/TextAutoCompletePlan'
import { TextAutoCompleteReason } from '@/components/customer-infomation/form-line/TextAutoCompleteReason'
import { TextAutoCompleteBranch } from '@/components/customer-infomation/form-line/TextAutoCompleteBranch'

const LineInfoTab = ({ dataInfo, setDataInfo, setActiveTab }: any) => {
  const [isTotal, setIsTotal] = useState<any>('')
  const [, setIsChangeGroup] = useState<boolean>(false)
  const [listGroups, setListGroups] = useState<any>([
    {
      plan: null,
      quantity: null,
      reason: null,
      branch: null
    }
  ])

  console.log('listGroups++++', listGroups)
  const [isChanged, setIsChanged] = useState(false)

  const tableLoading = {
    spinning: true,
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
    const reg = /^-?\d*(\.\d*)?$/
    if (reg.test(inputValue) || inputValue === '' || inputValue === '-') {
      setIsTotal(parseInt(inputValue, 10))
    }
  }

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
                    <Input size={'large'} value={isTotal} onChange={onChangeTotal} min={0} />
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
                      />
                    </Col>
                  </Row>

                  {/*line 2*/}
                  {item?.plan && (
                    <>
                      <Row gutter={24} style={{ marginBottom: '30px' }}>
                        <Col span={10}>
                          <TextAutoCompleteReason
                            data={dataInfo}
                            setData={setDataInfo}
                            attribute={'reason'}
                            title={'Reason of connection'}
                            isRequired={true}
                          />
                        </Col>
                        <Col span={10}>
                          <TextAutoCompleteBranch
                            data={dataInfo}
                            setData={setDataInfo}
                            attribute={'branch'}
                            title={'Branch Assigned'}
                            isRequired={true}
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
                dataSource={[]}
                pagination={false}
                loading={tableLoading}
                locale={{ emptyText: <EmptyUI content={NO_DATA} /> }}
              >
                <Column
                  title={''}
                  dataIndex=''
                  key=''
                  // render={(type, record) => {
                  //     return BOM_TYPE_DISPLAY[type];
                  // }}
                />
                <Column title={'Quantity of lines'} dataIndex='' key='' />
                <Column title={'Unit Price'} dataIndex='' key='' />
                <Column title={'Totals Price'} dataIndex='material_type_label' key='material_type_label' />
                <Column title={'Fingerprint Validation'} dataIndex='' key='' />
              </Table>
            </fieldset>
          </Form>
        </fieldset>
      </Form>

      <div className={'display-flex-center button-continue'}>
        <Button type='default' size={'large'} onClick={onNextStep}>
          Continuar
        </Button>
      </div>
    </>
  )
}

export default LineInfoTab
