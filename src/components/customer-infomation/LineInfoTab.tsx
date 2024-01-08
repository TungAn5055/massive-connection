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

  return (
    <>
      <Form className={'form-search-customer'} name='advanced_search'>
        <fieldset>
          <legend>Line information</legend>
          {/*line 1*/}
          <Row gutter={24} style={{ marginBottom: '30px' }}>
            <Col span={8}>
              <FormSelect
                data={dataInfo}
                setData={setDataInfo}
                attribute={''}
                title={'Tipo de cliente'}
                isDisabled={true}
              />
            </Col>
          </Row>

          <Form className={'form-search-customer'} name='advanced_search'>
            <fieldset>
              <legend>Group 1</legend>
              {/*line 1*/}
              <Row gutter={24} style={{ marginBottom: '30px' }}>
                <Col span={8}>
                  <FormSelect
                    data={dataInfo}
                    setData={setDataInfo}
                    attribute={''}
                    title={'Tipo de cliente'}
                    isDisabled={true}
                  />
                </Col>
                <Col span={8}>
                  <FormSelect
                    data={dataInfo}
                    setData={setDataInfo}
                    attribute={''}
                    title={'Tipo de cliente'}
                    isDisabled={true}
                  />
                </Col>
              </Row>

              {/*line 2*/}
              <Row gutter={24} style={{ marginBottom: '30px' }}>
                <Col span={8}>
                  <FormSelect
                    data={dataInfo}
                    setData={setDataInfo}
                    attribute={''}
                    title={'Tipo de cliente'}
                    isDisabled={true}
                  />
                </Col>
                <Col span={8}>
                  <FormSelect
                    data={dataInfo}
                    setData={setDataInfo}
                    attribute={''}
                    title={'Tipo de cliente'}
                    isDisabled={true}
                  />
                </Col>
              </Row>
            </fieldset>
          </Form>
        </fieldset>
      </Form>

      <Form className={'form-search-customer'} name='advanced_search'>
        <fieldset>
          <legend>Payment Information</legend>

          <Table
            rowKey={(record) => record.id}
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
    </>
  )
}

export default LineInfoTab
