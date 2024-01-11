import React, { useMemo, useState } from 'react'
import { Button, Col, Form, Input, Row, Select } from 'antd'
import { FormText } from '@/components/customer-infomation/form/text'
import { FormSelect } from '@/components/customer-infomation/form/select'
import { FormDate } from '@/components/customer-infomation/form/date'
import {FormCheckBox} from "@/components/customer-infomation/form/checkbox.tsx";
import {FormRadio} from "@/components/customer-infomation/form/radio.tsx";
import {SOURCE_IDIOMA_DE} from "@/ultils/dataSourceConstants.ts";

const CustomerInfoTab: React.FC = ({ dataInfo, setDataInfo, setActiveTab }) => {
  const onNextStep = () => {
    setActiveTab((prev) => (parseInt(prev) + 1).toString())
  }
  return (
    <>
      {/*form 1*/}
      <form className={'form-search-customer'} name='advanced_search'>
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
                isRequired={true}
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
                isDisabled={true}
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
              />
            </Col>
            <Col span={8}>
              <FormText
                data={dataInfo}
                setData={setDataInfo}
                attribute={''}
                title={'Campo de activated'}
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
                isRequired={true}
              />
            </Col>
            <Col span={8}>
              <FormDate
                data={dataInfo}
                setData={setDataInfo}
                attribute={'Fec. Vencimiento'}
                title={'Datepicker'}
              />
            </Col>
            <Col span={8}>
              <FormText
                data={dataInfo}
                setData={setDataInfo}
                attribute={''}
                title={'Numero de telefono fijo'}
              />
            </Col>
          </Row>

          {/*line 5*/}
          <Row gutter={24} style={{ marginBottom: '30px' }}>
            <Col span={8}>
              <FormText data={dataInfo} setData={setDataInfo} attribute={''} title={'Numero Movil'} isRequired={true} />
            </Col>
            <Col span={8}>
              <FormText data={dataInfo} setData={setDataInfo} attribute={''} title={'Email'} isRequired={true} placeholder={"Ej: abc@gmail.com "}/>
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
              <FormText data={dataInfo} setData={setDataInfo} attribute={''} title={'Direccion'} isRequired={true} placeholder={"Ef: Calle ABC#123, Urb XYZ"} />
            </Col>
            <Col span={16}>
              <FormText
                data={dataInfo}
                setData={setDataInfo}
                attribute={''}
                title={'Dirección completa'}
                isRequired={true}
                isCustomSpan={true}
                placeholder={"LIMA-UMA-LIMA"}
              />
            </Col>
          </Row>
        </fieldset>
      </form>

      {/*form 2*/}
      <form className={'form-search-customer'} name='advanced_search'>
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
              <FormText
                data={dataInfo}
                setData={setDataInfo}
                attribute={''}
                title={'No de documento'}
                placeholder={"--"}
              />
            </Col>
            <Col span={8}>
              <FormText
                data={dataInfo}
                setData={setDataInfo}
                attribute={''}
                title={'Nacionalidad'}
                placeholder={"--"}
              />
            </Col>
          </Row>

          {/*line 2*/}
          <Row gutter={24} style={{ marginBottom: '30px' }}>
            <Col span={8}>
              <FormText
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
              />
            </Col>
            <Col span={8}>
              <FormDate
                data={dataInfo}
                setData={setDataInfo}
                attribute={''}
                title={'Fec. Nacimiento'}
                isRequired={true}
              />
            </Col>
            <Col span={8}>
              <FormText
                data={dataInfo}
                setData={setDataInfo}
                attribute={''}
                title={'Teléfono de contacto'}
                isRequired={true}
              />
            </Col>
          </Row>

          {/*line 4*/}
          <Row gutter={24} style={{ marginBottom: '30px' }}>
            <Col span={8}>
              <FormText
                data={dataInfo}
                setData={setDataInfo}
                attribute={''}
                title={'Lugar de Emisión'}
              />
            </Col>
            <Col span={8}>
              <FormText
                data={dataInfo}
                setData={setDataInfo}
                attribute={'Fec. Emisión'}
                title={'Datepicker'}
                isRequired={true}
              />
            </Col>
            <Col span={8}>
              <FormText
                data={dataInfo}
                setData={setDataInfo}
                attribute={''}
                title={'Fec. Vencimiento'}
                isRequired={true}
              />
            </Col>
          </Row>
        </fieldset>
      </form>

      <div className={"button-title"}>
        <Button type='default' size={'large'} htmlType='submit'>
          Buscar contrato
        </Button>
        <span style={{ marginLeft: "10px"}}>
          Este es un contrato normal.  <a href={''} target='_blank' style={{ color: "#3e7eb1"}}>Detalle</a>
        </span>
      </div>
      {/*form 3*/}
      <form className={'form-search-customer'} name='advanced_search'>
        <fieldset>
        <legend>Información de contrato</legend>
          {/*line 1*/}
          <Row gutter={24} style={{ marginBottom: '30px' }}>
            <Col span={8}>
              <FormText
                data={dataInfo}
                setData={setDataInfo}
                attribute={''}
                title={'Número de contrato'}
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
                dataSource={SOURCE_IDIOMA_DE}
                defaultValue={1}
              />
            </Col>
          </Row>

          {/*line 2*/}
          <Row gutter={24} style={{ marginBottom: '30px' }}>
            <Col span={8}>
              <FormDate
                data={dataInfo}
                setData={setDataInfo}
                attribute={''}
                title={'Fecha de firma'}
                isRequired={true}
              />
            </Col>
            <Col span={8}>
              <FormDate
                data={dataInfo}
                setData={setDataInfo}
                attribute={'effect_date'}
                title={'Fecha de expiration'}
              />
            </Col>
            <Col span={8}>
              <FormSelect
                data={dataInfo}
                setData={setDataInfo}
                attribute={''}
                title={'Method de pago'}
                placholder={"----Select payment method----"}
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
                isDisabled={true}
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
                placeholder={"Ej: Colle ABC#123, Urb XYZ"}
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
                placeholder={"Ingresar Distrla"}
              />
            </Col>
            <Col span={8}>
              <FormCheckBox
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
              <FormRadio
                data={dataInfo}
                setData={setDataInfo}
                attribute={'staff_code'}
                title={'Account manager'}
                isRequired={true}
              />
            </Col>
          </Row>

          {/*line 6*/}
          <Row gutter={24} style={{ marginBottom: '30px' }}>
            <Col span={8}>
              <FormText
                data={dataInfo}
                setData={setDataInfo}
                attribute={'contacto_autorizado'}
                title={'Contacto Autorizado'}
                isRequired={true}
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
                isRequired={true}
              />
            </Col>
            <Col span={8}>
              <FormText data={dataInfo} setData={setDataInfo} attribute={''} title={'DNI'} isRequired={true} />
            </Col>
            <Col span={8}>
              <FormText
                data={dataInfo}
                setData={setDataInfo}
                attribute={''}
                title={'Posición de cargo'}
                isRequired={true}
              />
            </Col>
          </Row>

          {/*line 8*/}
          <Row gutter={24} style={{ marginBottom: '30px' }}>
            <Col span={8}>
              <FormText data={dataInfo} setData={setDataInfo} attribute={''} title={'Email'} isRequired={true} />
            </Col>
            <Col span={8}>
              <FormText
                data={dataInfo}
                setData={setDataInfo}
                attribute={''}
                title={'PagTel. Contactoador'}
                isRequired={true}
              />
            </Col>
            <Col span={8}></Col>
          </Row>
        </fieldset>
      </form>

      <div className={"display-flex-center button-continue"}>
        <Button type='default' size={'large'} onClick={onNextStep}>
          Continuar
        </Button>
      </div>

    </>
  )
}

export default CustomerInfoTab
