import React, { useMemo, useState } from 'react'
import { Button, Col, Form, Input, Row, Select, Table } from 'antd'
import { FormSelect } from '@/components/customer-infomation/form/select'
import Column from 'antd/es/table/Column'
import { EmptyUI } from '@/components/ui-source/empty'
import { NO_DATA } from '@/ultils/constants'
import { LoadingRegion } from '@/components/ui-source/loading'

const LineInfoTab: React.FC = ({ dataInfo, setDataInfo }) => {
  const tableLoading = {
    spinning: true,
    indicator: <LoadingRegion />
  }
  const onNextStep = () => {
    setActiveTab((prev) => (parseInt(prev) + 1).toString())
  }


  return (
      <>
        <Form className={'form-search-customer'} name='advanced_search'>
          <fieldset>
            <legend><span className={"legend-color"}>Line information</span></legend>
            {/*line 1*/}
            <Row gutter={24} style={{marginLeft: '10px'}}>
              <Col span={12}>
                <FormSelect
                    data={dataInfo}
                    setData={setDataInfo}
                    attribute={''}
                    title={'Total quantity of lines'}
                    isRequired={true}
                />
              </Col>
            </Row>

            <Form className={'form-search-customer'} name='advanced_search'>
              <fieldset>
                <legend><span className={"legend-color"}>Group 1</span></legend>
                <div style={{marginLeft: "10px"}}>
                  {/*line 1*/}
                  <Row gutter={24} style={{marginBottom: '30px'}}>
                    <Col span={8}>
                      <FormSelect
                          data={dataInfo}
                          setData={setDataInfo}
                          attribute={''}
                          title={'Plan'}
                          isRequired={true}
                      />
                    </Col>
                    <Col span={8}>
                      <FormSelect
                          data={dataInfo}
                          setData={setDataInfo}
                          attribute={''}
                          title={'Quantity of lines'}
                          isRequired={true}
                      />
                    </Col>
                  </Row>

                  {/*line 2*/}
                  <Row gutter={24} style={{marginBottom: '30px'}}>
                    <Col span={8}>
                      <FormSelect
                          data={dataInfo}
                          setData={setDataInfo}
                          attribute={''}
                          title={'Reason of connection'}
                          isRequired={true}
                      />
                    </Col>
                    <Col span={8}>
                      <FormSelect
                          data={dataInfo}
                          setData={setDataInfo}
                          attribute={''}
                          title={'Branch Assigned'}
                          isRequired={true}
                      />
                    </Col>
                  </Row>
                </div>

                {/* tables */}
                <Form className={'form-search-customer'} name='advanced_search'>
                  <fieldset>
                    <legend style={{marginBottom: "0 !important"}}><span
                        className={"legend-color"}>Payment Information</span></legend>
                    <Table
                        rowKey={(record) => record.id}
                        dataSource={[]}
                        pagination={false}
                        loading={tableLoading}
                        locale={{emptyText: <EmptyUI content={NO_DATA}/>}}
                    >
                      <Column
                          title={''}
                          dataIndex=''
                          key=''
                          // render={(type, record) => {
                          //     return BOM_TYPE_DISPLAY[type];
                          // }}
                      />
                      <Column title={'Quantity of lines'} dataIndex='' key=''/>
                      <Column title={'Unit Price'} dataIndex='' key=''/>
                      <Column title={'Totals Price'} dataIndex='material_type_label' key='material_type_label'/>
                      <Column title={'Fingerprint Validation'} dataIndex='' key=''/>
                    </Table>
                  </fieldset>
                </Form>
              </fieldset>
            </Form>
          </fieldset>
        </Form>

        <div className={"display-flex-center button-continue"}>
          <Button type='default' size={'large'} onClick={onNextStep}>
            Continuar
          </Button>
        </div>
      </>
  )
}

export default LineInfoTab
