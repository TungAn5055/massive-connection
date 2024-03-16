import { Button, Col, Row } from 'antd'
import { FormText } from '@/components/customer-infomation/form-info/Text'
import { FormSelect } from '@/components/customer-infomation/form-info/Select'
import { FormDate } from '@/components/customer-infomation/form-info/Date'
import { FormRadio } from '@/components/customer-infomation/form-info/Radio.tsx'
import { FormTextAutoComplete } from '@/components/customer-infomation/form-info/TextAutoComplete'
import { SOURCE_METHOD_DE_PAGO } from '@/ultils/constants'
import { convertForDataSource } from '@/ultils/helper'
import { RadioNoti } from '@/components/customer-infomation/form-info/RadioNoti.tsx'
import {SelectionCompleteAccount} from "@/components/customer-infomation/form-info/SelectionCompleteAccount.tsx";
import {FormSelectIdType} from "@/components/customer-infomation/form-info/SelectIdType.tsx";

const CustomerInfoTab = ({ dataInfo, setDataInfo, setActiveTab, dataCustomer = {}, setListTabActive }: any) => {
  const onNextStep = () => {
    let allRequestOK = true
    Object.values(validateField).forEach((func) => {
      if (func instanceof Function) {
        if (func() === false) {
          allRequestOK = false
        }
      }
    })

    if (allRequestOK) {
      setActiveTab((prev) => (parseInt(prev) + 1).toString())
      setListTabActive((prev) => {
        prev.push('1')
        return prev
      })
    } else {
      const listMessageError = document.getElementsByClassName('message-error-data')
      if (listMessageError.length) {
        listMessageError[0].scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        })
      }
    }
  }

  //validate
  const validateField = {}
  const setValidateAll = (index, func) => {
    validateField[index] = func
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
              <FormText
                dataInfo={dataInfo}
                setDataInfo={setDataInfo}
                attribute={'busTypeName'}
                attributeSave={'bus-type'}
                dataCustomer={dataCustomer}
                title={'Tipo de cliente'}
                isDisabled={true}
                isRequired={true}
                setValidateAll={setValidateAll}
              />
            </Col>
            <Col span={8}></Col>
            <Col span={8}></Col>
          </Row>

          {/*line 2*/}
          <Row gutter={24} style={{ marginBottom: '30px' }}>
            <Col span={8}>
              <FormText
                dataInfo={dataInfo}
                setDataInfo={setDataInfo}
                attribute={'typeName'}
                attributeSave={'idType'}
                title={'Tipo de documento'}
                isDisabled={true}
                dataCustomer={dataCustomer}
              />
            </Col>
            <Col span={8}>
              <FormText
                dataInfo={dataInfo}
                setDataInfo={setDataInfo}
                attribute={'idNo'}
                attributeSave={'idNo'}
                title={'N° de documento'}
                isRequired={false}
                readOnly={true}
                dataCustomer={dataCustomer}
              />
            </Col>
            <Col span={8}></Col>
          </Row>

          {/*line 3*/}
          <Row gutter={24} style={{ marginBottom: '30px' }}>
            <Col span={8}>
              <FormText
                dataInfo={dataInfo}
                setDataInfo={setDataInfo}
                attribute={'name'}
                attributeSave={'name'}
                title={'Razón Social'}
                dataCustomer={dataCustomer}
              />
            </Col>
            <Col span={8}>
              <FormText
                dataInfo={dataInfo}
                setDataInfo={setDataInfo}
                attribute={'activitiesField'}
                title={'Campo de actividad'}
                dataCustomer={dataCustomer}
                readOnly={true}
              />
            </Col>
            <Col span={8}></Col>
          </Row>

          {/*line 4*/}
          <Row gutter={24} style={{ marginBottom: '30px' }}>
            <Col span={8}>
              <FormDate
                dataInfo={dataInfo}
                setDataInfo={setDataInfo}
                attribute={'idIssueDate'}
                title={'Fec Emisión'}
                isRequired={true}
                readOnly={true}
                setValidateAll={setValidateAll}
                dataCustomer={dataCustomer}
              />
            </Col>
            <Col span={8}>
              <FormDate
                dataInfo={dataInfo}
                setDataInfo={setDataInfo}
                attribute={'idExpireDate'}
                title={'Fec. Vencimiento'}
                dataCustomer={dataCustomer}
                readOnly={true}
              />
            </Col>
            <Col span={8}>
              <FormText
                dataInfo={dataInfo}
                setDataInfo={setDataInfo}
                attribute={'landlineNo'}
                title={'Número de telefono fijo'}
                dataCustomer={dataCustomer}
                readOnly={true}
              />
            </Col>
          </Row>

          {/*line 5*/}
          <Row gutter={24} style={{ marginBottom: '30px' }}>
            <Col span={8}>
              <FormText
                dataInfo={dataInfo}
                setDataInfo={setDataInfo}
                attribute={'mobileNo'}
                title={'Número Móvil'}
                isRequired={true}
                setValidateAll={setValidateAll}
                dataCustomer={dataCustomer}
                readOnly={true}
              />
            </Col>
            <Col span={8}>
              <FormText
                dataInfo={dataInfo}
                setDataInfo={setDataInfo}
                attribute={'email'}
                title={'Email'}
                isRequired={true}
                setValidateAll={setValidateAll}
                placeholder={'Ej: abc@gmail.com'}
                dataCustomer={dataCustomer}
                readOnly={true}
              />
            </Col>
            <Col span={8}></Col>
          </Row>

          {/*line 6*/}
          <Row gutter={24} style={{ marginBottom: '30px' }}>
            <Col span={8}>
              <FormText
                dataInfo={dataInfo}
                setDataInfo={setDataInfo}
                attribute={'province'}
                attributeSave={'province'}
                title={'Departamento'}
                isRequired={true}
                setValidateAll={setValidateAll}
                dataCustomer={dataCustomer}
                readOnly={true}
              />
            </Col>
            <Col span={8}>
              <FormText
                dataInfo={dataInfo}
                setDataInfo={setDataInfo}
                attribute={'district'}
                attributeSave={'district'}
                title={'Provincia'}
                isRequired={true}
                setValidateAll={setValidateAll}
                dataCustomer={dataCustomer}
                readOnly={true}
              />
            </Col>
            <Col span={8}>
              <FormText
                dataInfo={dataInfo}
                setDataInfo={setDataInfo}
                attribute={'precinct'}
                attributeSave={'precint'}
                title={'Distrito'}
                isRequired={true}
                setValidateAll={setValidateAll}
                dataCustomer={dataCustomer}
                readOnly={true}
              />
            </Col>
          </Row>

          {/*line 7*/}
          <Row gutter={24} style={{ marginBottom: '30px' }}>
            <Col span={8}>
              <FormText
                dataInfo={dataInfo}
                setDataInfo={setDataInfo}
                attribute={'home'}
                title={'Dirección'}
                isRequired={true}
                setValidateAll={setValidateAll}
                dataCustomer={dataCustomer}
                placeholder={'Ef: Calle ABC#123, Urb XYZ'}
                readOnly={true}
              />
            </Col>
            <Col span={16}>
              <FormText
                dataInfo={dataInfo}
                setDataInfo={setDataInfo}
                attribute={'address'}
                attributeSave={'address'}
                title={'Dirección completa'}
                isRequired={true}
                setValidateAll={setValidateAll}
                isCustomSpan={true}
                dataCustomer={dataCustomer}
                placeholder={'LIMA-UMA-LIMA'}
                readOnly={true}
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
                dataInfo={dataInfo}
                setDataInfo={setDataInfo}
                attribute={'repreCustTypeName'}
                attributeSave={'repreCustIdType'}
                title={'Tipo de documento'}
                isDisabled={true}
                dataCustomer={dataCustomer}
                readOnly={true}
              />
            </Col>
            <Col span={8}>
              <FormText
                dataInfo={dataInfo}
                setDataInfo={setDataInfo}
                attribute={'repreCustIdNo'}
                title={'N° de documento'}
                placeholder={'--'}
                dataCustomer={dataCustomer}
                readOnly={true}
              />
            </Col>
            <Col span={8}>
              <FormText
                dataInfo={dataInfo}
                setDataInfo={setDataInfo}
                attribute={'nationality'}
                title={'Nacionalidad'}
                placeholder={'--'}
                dataCustomer={dataCustomer}
                readOnly={true}
              />
            </Col>
          </Row>

          {/*line 2*/}
          <Row gutter={24} style={{ marginBottom: '30px' }}>
            <Col span={8}>
              <FormText
                dataInfo={dataInfo}
                setDataInfo={setDataInfo}
                attribute={'repreLastNameFather'}
                title={'Primer Apellido'}
                isRequired={true}
                setValidateAll={setValidateAll}
                dataCustomer={dataCustomer}
                readOnly={true}
              />
            </Col>
            <Col span={8}>
              <FormText
                dataInfo={dataInfo}
                setDataInfo={setDataInfo}
                attribute={'repreLastNameMother'}
                title={'Segundo Apellido'}
                isRequired={false}
                dataCustomer={dataCustomer}
                readOnly={true}
              />
            </Col>
            <Col span={8}>
              <FormText
                dataInfo={dataInfo}
                setDataInfo={setDataInfo}
                attribute={'repreName'}
                title={'Nombres'}
                isRequired={true}
                setValidateAll={setValidateAll}
                dataCustomer={dataCustomer}
                readOnly={true}
              />
            </Col>
          </Row>

          {/*line 3*/}
          <Row gutter={24} style={{ marginBottom: '30px' }}>
            <Col span={8}>
              <FormText
                dataInfo={dataInfo}
                setDataInfo={setDataInfo}
                attribute={'repreCustName'}
                title={'Nombre Completo'}
                dataCustomer={dataCustomer}
                readOnly={true}
              />
            </Col>
            <Col span={8}>
              <FormDate
                dataInfo={dataInfo}
                setDataInfo={setDataInfo}
                attribute={'repreCustBirthDate'}
                title={'Fec. Nacimiento'}
                isRequired={true}
                setValidateAll={setValidateAll}
                dataCustomer={dataCustomer}
                readOnly={true}
              />
            </Col>
            <Col span={8}>
              <FormText
                dataInfo={dataInfo}
                setDataInfo={setDataInfo}
                attribute={'repreCustTelFax'}
                title={'Teléfono de contacto'}
                dataCustomer={dataCustomer}
                readOnly={true}
              />
            </Col>
          </Row>

          {/*line 4*/}
          <Row gutter={24} style={{ marginBottom: '30px' }}>
            <Col span={8}>
              <FormText
                dataInfo={dataInfo}
                setDataInfo={setDataInfo}
                attribute={'repreCustIdIssuePlace'}
                title={'Lugar de Emisión'}
                dataCustomer={dataCustomer}
                readOnly={true}
              />
            </Col>
            <Col span={8}>
              <FormDate
                dataInfo={dataInfo}
                setDataInfo={setDataInfo}
                attribute={'repreCustIdIssueDate'}
                title={'Fec. Emisión'}
                isRequired={true}
                setValidateAll={setValidateAll}
                dataCustomer={dataCustomer}
                readOnly={true}
              />
            </Col>
            <Col span={8}>
              <FormDate
                dataInfo={dataInfo}
                setDataInfo={setDataInfo}
                attribute={'repreCustIdExpireDate'}
                title={'Fec. Vencimiento'}
                isRequired={true}
                setValidateAll={setValidateAll}
                dataCustomer={dataCustomer}
                readOnly={true}
              />
            </Col>
          </Row>
        </fieldset>
      </form>

      <div className={'button-title button-title-red'}>
        <Button type='default' size={'large'}>
          Buscar contrato
        </Button>
        <span style={{ marginLeft: '10px' }}>
          Este es un contrato normal.{' '}
          <a href={''} target='_blank' style={{ color: '#3e7eb1' }}>
            Detalle
          </a>
        </span>
      </div>
      {/*form 3*/}
      <form className={'form-search-customer'} name='advanced_search'>
        <fieldset>
          <legend>Información de contrato</legend>
          {/*line 1*/}
          <Row gutter={24} style={{ marginBottom: '30px' }}>
            <Col span={8}>
              <FormText dataInfo={dataInfo} setDataInfo={setDataInfo} isDisabled={true} title={'Número de contrato'} />
            </Col>
            <Col span={8}>
              <FormText
                dataInfo={dataInfo}
                setDataInfo={setDataInfo}
                attribute={'contractTypeName'}
                attributeSave={'contractTypeCode'}
                title={'Tipo de contrato'}
                dataCustomer={dataCustomer?.contractInfo}
                readOnly={true}
              />
            </Col>
            <Col span={8}>
              <FormSelect
                dataInfo={dataInfo}
                setDataInfo={setDataInfo}
                attribute={'contractLanguages'}
                attributeSave={'contractLanguageCode'}
                title={'Idioma de contrato'}
                dataSource={convertForDataSource(dataCustomer?.contractInfo?.contractLanguages)}
              />
            </Col>
          </Row>

          {/*line 2*/}
          <Row gutter={24} style={{ marginBottom: '30px' }}>
            <Col span={8}>
              <FormDate
                dataInfo={dataInfo}
                setDataInfo={setDataInfo}
                attribute={'signDate'}
                attributeSave={'signDate'}
                title={'Fecha de firma'}
                isRequired={true}
                setValidateAll={setValidateAll}
                dataCustomer={dataCustomer?.contractInfo}
              />
            </Col>
            <Col span={8}>
              <FormDate
                dataInfo={dataInfo}
                setDataInfo={setDataInfo}
                attribute={''}
                attributeSave={'endDatetime'}
                title={'Fecha de expiración'}
                dataCustomer={dataCustomer?.contractInfo}
              />
            </Col>
            <Col span={8}>
              <FormSelect
                dataInfo={dataInfo}
                setDataInfo={setDataInfo}
                attribute={'payMethodCode'}
                attributeSave={'payMethodCode'}
                title={'Método de pago'}
                dataSource={SOURCE_METHOD_DE_PAGO}
                placholder={'----Select payment method----'}
              />
            </Col>
          </Row>

          {/*line 3*/}
          <Row gutter={24} style={{ marginBottom: '30px' }}>
            <Col span={8}>
              <FormText
                dataInfo={dataInfo}
                setDataInfo={setDataInfo}
                attribute={'billCycleFrom'}
                attributeSave={'billCycleFrom'}
                title={'Ciclo de facturación'}
                isDisabled={true}
                dataCustomer={dataCustomer?.contractInfo}
              />
            </Col>
            <Col span={8}>
              <FormText
                dataInfo={dataInfo}
                setDataInfo={setDataInfo}
                attribute={'payer'}
                attributeSave={'payer'}
                title={'Pagador'}
                isRequired={false}
                dataCustomer={dataCustomer?.contractInfo}
              />
            </Col>
            <Col span={8}>
              <FormText
                isRequired={true}
                setValidateAll={setValidateAll}
                dataInfo={dataInfo}
                setDataInfo={setDataInfo}
                attribute={'home'}
                attributeSave={'home'}
                title={'Dirección de facturación'}
                placeholder={'Ej: Colle ABC#123, Urb XYZ'}
                dataCustomer={dataCustomer?.contractInfo}
              />
            </Col>
          </Row>

          {/*line 4*/}
          <Row gutter={24} style={{ marginBottom: '30px' }}>
            <Col span={16}>
              <FormTextAutoComplete
                dataInfo={dataInfo}
                setDataInfo={setDataInfo}
                attribute={'areaName'}
                attributeSave={'areaCode'}
                title={'Distrito - Prov - Dpto.'}
                isRequired={true}
                setValidateAll={setValidateAll}
                isCustomSpan={true}
                placeholder={'Ingresar Distrla'}
                dataCustomer={dataCustomer?.contractInfo}
              />
            </Col>
            <Col span={8}>
              <RadioNoti
                dataInfo={dataInfo}
                setDataInfo={setDataInfo}
                attribute={'noticeCharge'}
                attributeSave={'noticeCharge'}
                title={'Envío de recibos'}
                isRequired={true}
                setValidateAll={setValidateAll}
                dataCustomer={dataCustomer?.contractInfo}
              />
            </Col>
          </Row>

          {/*line 5*/}
          <Row gutter={24} style={{ marginBottom: '30px' }}>
            <Col span={8}>
              <SelectionCompleteAccount
                dataInfo={dataInfo}
                setDataInfo={setDataInfo}
                attribute={'staffCode'}
                attributeSave={'staffCode'}
                title={'Account manager'}
                isRequired={true}
                setValidateAll={setValidateAll}
              />
            </Col>
          </Row>

          {/*line 6*/}
          <Row gutter={24} style={{ marginBottom: '30px' }}>
            <Col span={8}>
              <FormRadio
                dataInfo={dataInfo}
                setDataInfo={setDataInfo}
                attribute={'typeOfContact'}
                attributeSave={'typeOfContact'}
                title={'Contacto Autorizado'}
                isRequired={true}
                setValidateAll={setValidateAll}
              />
            </Col>
          </Row>

          {/*line 7*/}
          <Row gutter={24} style={{ marginBottom: '30px' }}>
            <Col span={8}>
              <FormText
                dataInfo={dataInfo}
                setDataInfo={setDataInfo}
                attribute={'repreCustName'}
                attributeSave={'contactName'}
                title={'Nombres y Apellidos'}
                isRequired={true}
                setValidateAll={setValidateAll}
                placeholder={'Ingresar Nombres y Apellidos'}
                dataCustomer={dataCustomer}
              />
            </Col>
            <Col span={8}>
              <FormSelectIdType
                  dataInfo={dataInfo}
                  setDataInfo={setDataInfo}
                  attribute={'contactIdType'}
                  attributeSave={'contactIdType'}
                  title={'ID type'}
                  dataSource={SOURCE_METHOD_DE_PAGO}
                  placholder={'Seleccione tipo de documento'}
              />
            </Col>
            <Col span={8}>
              <FormText
                dataInfo={dataInfo}
                setDataInfo={setDataInfo}
                attribute={'repreCustIdNox'}
                attributeSave={'contactId'}
                title={'DNI'}
                isRequired={true}
                setValidateAll={setValidateAll}
                dataCustomer={dataCustomer}
              />
            </Col>
            <Col span={8}>
              <FormText
                dataInfo={dataInfo}
                setDataInfo={setDataInfo}
                attribute={'position'}
                attributeSave={'contactTitle'}
                title={'Posición de cargo'}
                isRequired={true}
                setValidateAll={setValidateAll}
                placeholder={'Ingresar Posición'}
              />
            </Col>
          </Row>

          {/*line 8*/}
          <Row gutter={24} style={{ marginBottom: '30px' }}>
            <Col span={8}>
              <FormText
                dataInfo={dataInfo}
                setDataInfo={setDataInfo}
                attribute={'contactEmail'}
                attributeSave={'contactEmail'}
                title={'Email'}
                isRequired={true}
                setValidateAll={setValidateAll}
                placeholder={'Ej: abc@gmail.com'}
              />
            </Col>
            <Col span={8}>
              <FormText
                dataInfo={dataInfo}
                setDataInfo={setDataInfo}
                attribute={'repreCustTelFax'}
                attributeSave={'contactTelFax'}
                title={'Tel. Contacto'}
                isRequired={true}
                setValidateAll={setValidateAll}
                dataCustomer={dataCustomer}
                type={'number'}
                placeholder={'Ingresar número móvil o fijo '}
              />
            </Col>
            <Col span={8}></Col>
          </Row>
        </fieldset>
      </form>

      <div className={'display-flex-center button-continue'}>
        <Button type='default' size={'large'} onClick={onNextStep}>
          Continuar
        </Button>
      </div>
    </>
  )
}

export default CustomerInfoTab
