import React, { useMemo, useState } from 'react'
import { Button, Col, Form, Input, Row, Select } from 'antd'
import { FormText } from '@/pages/cusotmer-infomation/form/text'
import { FormSelect } from '@/pages/cusotmer-infomation/form/select'
import { FormDate } from '@/pages/cusotmer-infomation/form/date'

const CustomerInfoTab: React.FC = ({ dataInfo, setDataInfo }) => {
  return (
    <>
      {/*form 1*/}
      <Form className={'form-search-customer'} name='advanced_search'>
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

      {/*form 2*/}
      <Form className={'form-search-customer'} name='advanced_search'>
        <fieldset>
          <legend>Información de Representante Legal</legend>
          {/*line 1*/}
          <Row gutter={24} style={{ marginBottom: '30px' }}>
            <Col span={8}>
              <FormSelect
                data={dataInfo}
                setData={setDataInfo}
                attribute={''}
                title={'Tipo de documento'}
                isDisabled={true}
              />
            </Col>
            <Col span={8}>
              <FormSelect
                data={dataInfo}
                setData={setDataInfo}
                attribute={''}
                title={'No de documento'}
                isDisabled={true}
              />
            </Col>
            <Col span={8}>
              <FormSelect
                data={dataInfo}
                setData={setDataInfo}
                attribute={''}
                title={'Nacionalidad'}
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
                title={'Primer Apellido'}
                isRequired={true}
              />
            </Col>
            <Col span={8}>
              <FormText data={dataInfo} setData={setDataInfo} attribute={''} title={'Nombres'} isRequired={false} />
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
          </Row>

          {/*line 3*/}
          <Row gutter={24} style={{ marginBottom: '30px' }}>
            <Col span={8}>
              <FormText
                data={dataInfo}
                setData={setDataInfo}
                attribute={''}
                title={'Nombre Completo'}
                isRequired={false}
              />
            </Col>
            <Col span={8}>
              <FormText
                data={dataInfo}
                setData={setDataInfo}
                attribute={''}
                title={'Fec. Nacimiento'}
                isRequired={false}
              />
            </Col>
            <Col span={8}>
              <FormText
                data={dataInfo}
                setData={setDataInfo}
                attribute={''}
                title={'Teléfono de contacto'}
                isRequired={false}
              />
            </Col>
          </Row>

          {/*line 4*/}
          <Row gutter={24} style={{ marginBottom: '30px' }}>
            <Col span={8}>
              <FormDate
                data={dataInfo}
                setData={setDataInfo}
                attribute={''}
                title={'Lugar de Emisión'}
                isRequired={false}
              />
            </Col>
            <Col span={8}>
              <FormDate
                data={dataInfo}
                setData={setDataInfo}
                attribute={'Fec. Emisión'}
                title={'Datepicker'}
                isRequired={false}
              />
            </Col>
            <Col span={8}>
              <FormText
                data={dataInfo}
                setData={setDataInfo}
                attribute={''}
                title={'Fec. Vencimiento'}
                isRequired={false}
              />
            </Col>
          </Row>
        </fieldset>
      </Form>

      {/*form 3*/}
      <Form className={'form-search-customer'} name='advanced_search'>
        <fieldset>
          <legend>Información de contrato</legend>
          {/*line 1*/}
          <Row gutter={24} style={{ marginBottom: '30px' }}>
            <Col span={8}>
              <FormSelect
                data={dataInfo}
                setData={setDataInfo}
                attribute={''}
                title={'Número de contrato'}
                isDisabled={true}
              />
            </Col>
            <Col span={8}>
              <FormSelect
                data={dataInfo}
                setData={setDataInfo}
                attribute={''}
                title={'Tipo de contract'}
                isDisabled={true}
              />
            </Col>
            <Col span={8}>
              <FormSelect
                data={dataInfo}
                setData={setDataInfo}
                attribute={''}
                title={'Idioma de contrato'}
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
                title={'Fecha de firma'}
                isRequired={true}
              />
            </Col>
            <Col span={8}>
              <FormText
                data={dataInfo}
                setData={setDataInfo}
                attribute={''}
                title={'Fecha de expiration'}
                isRequired={false}
              />
            </Col>
            <Col span={8}>
              <FormText
                data={dataInfo}
                setData={setDataInfo}
                attribute={''}
                title={'Method de pago'}
                isRequired={false}
              />
            </Col>
          </Row>

          {/*line 3*/}
          <Row gutter={24} style={{ marginBottom: '30px' }}>
            <Col span={8}>
              <FormText
                data={dataInfo}
                setData={setDataInfo}
                attribute={''}
                title={'Ciclo de facturación'}
                isRequired={false}
              />
            </Col>
            <Col span={8}>
              <FormText data={dataInfo} setData={setDataInfo} attribute={''} title={'Pagador'} isRequired={false} />
            </Col>
            <Col span={8}>
              <FormText
                data={dataInfo}
                setData={setDataInfo}
                attribute={''}
                title={'Direccion de facturacion'}
                isRequired={false}
              />
            </Col>
          </Row>

          {/*line 4*/}
          <Row gutter={24} style={{ marginBottom: '30px' }}>
            <Col span={16}>
              <FormText
                data={dataInfo}
                setData={setDataInfo}
                attribute={''}
                title={'Distrito - Prov-Dpto.'}
                isRequired={true}
                isCustomSpan={true}
              />
            </Col>
            <Col span={8}>
              <FormText
                data={dataInfo}
                setData={setDataInfo}
                attribute={''}
                title={'Envio de recibos'}
                isRequired={true}
              />
            </Col>
          </Row>

          {/*line 5*/}
          <Row gutter={24} style={{ marginBottom: '30px' }}>
            <Col span={8}>
              <FormText
                data={dataInfo}
                setData={setDataInfo}
                attribute={''}
                title={'Account manager'}
                isRequired={false}
              />
            </Col>
          </Row>

          {/*line 6*/}
          <Row gutter={24} style={{ marginBottom: '30px' }}>
            <Col span={8}>
              <FormText
                data={dataInfo}
                setData={setDataInfo}
                attribute={''}
                title={'Contacto Autorizado'}
                isRequired={false}
              />
            </Col>
          </Row>

          {/*line 7*/}
          <Row gutter={24} style={{ marginBottom: '30px' }}>
            <Col span={8}>
              <FormText
                data={dataInfo}
                setData={setDataInfo}
                attribute={''}
                title={'Nombres y Apellidos'}
                isRequired={false}
              />
            </Col>
            <Col span={8}>
              <FormText data={dataInfo} setData={setDataInfo} attribute={''} title={'DNI'} isRequired={false} />
            </Col>
            <Col span={8}>
              <FormText
                data={dataInfo}
                setData={setDataInfo}
                attribute={''}
                title={'Posición de cargo'}
                isRequired={false}
              />
            </Col>
          </Row>

          {/*line 8*/}
          <Row gutter={24} style={{ marginBottom: '30px' }}>
            <Col span={8}>
              <FormText data={dataInfo} setData={setDataInfo} attribute={''} title={'Email'} isRequired={false} />
            </Col>
            <Col span={8}>
              <FormText
                data={dataInfo}
                setData={setDataInfo}
                attribute={''}
                title={'PagTel. Contactoador'}
                isRequired={false}
              />
            </Col>
            <Col span={8}></Col>
          </Row>
        </fieldset>
      </Form>
    </>
  )
}

export default CustomerInfoTab
