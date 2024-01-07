import React, { useMemo, useState } from 'react'
import { Button, Col, Form, Input, Row, Select } from 'antd'
import { FormText } from '@/pages/cusotmer-infomation/form/text'
import { FormSelect } from '@/pages/cusotmer-infomation/form/select'
import { FormDate } from '@/pages/cusotmer-infomation/form/date'

const CustomerInfoTab: React.FC = ({ dataInfo, setDataInfo }) => {
  return (
    <>
      <Form
        className={'form-search-customer'}
        // form={form}
        name='advanced_search'
        // style={formStyle}
        // onFinish={onFinish}
      >
        <fieldset>
          <legend>Información de cliente</legend>
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
            <Col span={8}></Col>
            <Col span={8}></Col>
          </Row>

          {/*line 2*/}
          <Row gutter={24} style={{ marginBottom: '30px' }}>
            <Col span={8}>
              <FormSelect
                data={dataInfo}
                setData={setDataInfo}
                attribute={''}
                title={'Tipo de documento'}
                isRequired={true}
              />
            </Col>
            <Col span={8}>
              <FormText
                data={dataInfo}
                setData={setDataInfo}
                attribute={''}
                title={'No de documento'}
                isRequired={false}
              />
            </Col>
            <Col span={8}></Col>
          </Row>

          {/*line 3*/}
          <Row gutter={24} style={{ marginBottom: '30px' }}>
            <Col span={8}>
              <FormText
                data={dataInfo}
                setData={setDataInfo}
                attribute={''}
                title={'Razon Social'}
                isRequired={false}
              />
            </Col>
            <Col span={8}>
              <FormText
                data={dataInfo}
                setData={setDataInfo}
                attribute={''}
                title={'Campo de activated'}
                isRequired={false}
              />
            </Col>
            <Col span={8}></Col>
          </Row>

          {/*line 4*/}
          <Row gutter={24} style={{ marginBottom: '30px' }}>
            <Col span={8}>
              <FormDate
                data={dataInfo}
                setData={setDataInfo}
                attribute={''}
                title={'Fec. Emission'}
                isRequired={false}
              />
            </Col>
            <Col span={8}>
              <FormDate
                data={dataInfo}
                setData={setDataInfo}
                attribute={'Fec. Vencimiento'}
                title={'Datepicker'}
                isRequired={false}
              />
            </Col>
            <Col span={8}>
              <FormText
                data={dataInfo}
                setData={setDataInfo}
                attribute={''}
                title={'Numero de telefono fijo'}
                isRequired={false}
              />
            </Col>
          </Row>

          {/*line 5*/}
          <Row gutter={24} style={{ marginBottom: '30px' }}>
            <Col span={8}>
              <FormText data={dataInfo} setData={setDataInfo} attribute={''} title={'Numero Movil'} isRequired={true} />
            </Col>
            <Col span={8}>
              <FormText data={dataInfo} setData={setDataInfo} attribute={''} title={'Email'} isRequired={true} />
            </Col>
            <Col span={8}></Col>
          </Row>

          {/*line 6*/}
          <Row gutter={24} style={{ marginBottom: '30px' }}>
            <Col span={8}>
              <FormText data={dataInfo} setData={setDataInfo} attribute={''} title={'Departamento'} isRequired={true} />
            </Col>
            <Col span={8}>
              <FormText data={dataInfo} setData={setDataInfo} attribute={''} title={'Provincia'} isRequired={true} />
            </Col>
            <Col span={8}>
              <FormText data={dataInfo} setData={setDataInfo} attribute={''} title={'Distrito'} isRequired={true} />
            </Col>
          </Row>

          {/*line 7*/}
          <Row gutter={24} style={{ marginBottom: '30px' }}>
            <Col span={8}>
              <FormText data={dataInfo} setData={setDataInfo} attribute={''} title={'Direccion'} isRequired={true} />
            </Col>
            <Col span={16}>
              <FormText
                data={dataInfo}
                setData={setDataInfo}
                attribute={''}
                title={'Dirección completa'}
                isRequired={true}
                isCustomSpan={true}
              />
            </Col>
          </Row>
        </fieldset>
      </Form>
    </>
  )
}

export default CustomerInfoTab
