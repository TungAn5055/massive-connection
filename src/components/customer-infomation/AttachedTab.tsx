import React, { useMemo, useState } from 'react'
import { Button, Col, Form, Input, Row, Select, Table } from 'antd'
import { FormSelect } from '@/components/customer-infomation/form/select'
import Column from 'antd/es/table/Column'
import { EmptyUI } from '@/components/ui-source/empty'
import { NO_DATA } from '@/ultils/constants'
import { LoadingRegion } from '@/components/ui-source/loading'

const AttachedTab: React.FC = ({ dataInfo, setDataInfo }) => {
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
            <legend><span className={"legend-color"}>Documentación adjunta</span></legend>
            <span style={{marginLeft: '20px'}}>La siguiente documentación es SUSTEN</span>
            {/*line 1*/}
            <Row gutter={24} style={{marginLeft: '10px', marginTop: "20px"}}>
              <Col span={8}>
                <FormSelect
                    data={dataInfo}
                    setData={setDataInfo}
                    attribute={''}
                    title={'Type  of document'}
                    isRequired={true}
                />
              </Col>
              <Col span={8}>
                <FormSelect
                    data={dataInfo}
                    setData={setDataInfo}
                    attribute={''}
                    title={'Data file'}
                    isRequired={true}
                />
              </Col>
              <Col span={2}>
                <Button type='default' size={'large'} onClick={()=> {}}>
                  Seleccionar archivo
                </Button>
              </Col>
              <Col span={2}>
                <Button type='default' size={'large'} onClick={()=> {}}>
                  Upload
                </Button>
              </Col>
            </Row>
          </fieldset>
        </Form>

        <Form className={'form-search-customer'} name='advanced_search'>
          <fieldset>
            <legend style={{marginBottom: "0 !important"}}><span className={"legend-color"}>Payment Information</span>
            </legend>
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

        <div className={"display-flex-center button-continue"}>
          <Button type='default' size={'large'} onClick={onNextStep}>
            Continuar
          </Button>
        </div>
      </>
  )
}

export default AttachedTab
