import { Button, Col, Row } from 'antd'
import { FormText } from '@/components/customer-infomation/form-info/Text'
import { FormSelect } from '@/components/customer-infomation/form-info/Select'
import { FormDate } from '@/components/customer-infomation/form-info/Date'
import { FormCheckBox } from '@/components/customer-infomation/form-info/Checkbox.tsx'
import { FormRadio } from '@/components/customer-infomation/form-info/Radio.tsx'
import { FormTextAutoComplete } from '@/components/customer-infomation/form-info/TextAutoComplete'
import { SOURCE_IDIOMA_DE } from '@/ultils/dataSourceConstants.ts'
import { SOURCE_METHOD_DE_PAGO } from '@/ultils/constants'

const CustomerInfoTab = ({ dataInfo, setDataInfo, setActiveTab, dataCustomer = {} }: any) => {
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
                title={'No de documento'}
                isRequired={false}
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
                title={'Razon Social'}
                dataCustomer={dataCustomer}
              />
            </Col>
            <Col span={8}>
              <FormText
                dataInfo={dataInfo}
                setDataInfo={setDataInfo}
                attribute={'activitiesField'}
                title={'Campo de activated'}
                dataCustomer={dataCustomer}
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
                title={'Fec. Emission'}
                isRequired={true}
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
              />
            </Col>
            <Col span={8}>
              <FormText
                dataInfo={dataInfo}
                setDataInfo={setDataInfo}
                attribute={'landlineNo'}
                title={'Numero de telefono fijo'}
                dataCustomer={dataCustomer}
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
                title={'Numero Movil'}
                isRequired={true}
                setValidateAll={setValidateAll}
                dataCustomer={dataCustomer}
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
                title={'Departamento'}
                isRequired={true}
                setValidateAll={setValidateAll}
                dataCustomer={dataCustomer}
              />
            </Col>
            <Col span={8}>
              <FormText
                dataInfo={dataInfo}
                setDataInfo={setDataInfo}
                attribute={'district'}
                title={'Provincia'}
                isRequired={true}
                setValidateAll={setValidateAll}
                dataCustomer={dataCustomer}
              />
            </Col>
            <Col span={8}>
              <FormText
                dataInfo={dataInfo}
                setDataInfo={setDataInfo}
                attribute={'precinct'}
                title={'Distrito'}
                isRequired={true}
                setValidateAll={setValidateAll}
                dataCustomer={dataCustomer}
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
                title={'Direccion'}
                isRequired={true}
                setValidateAll={setValidateAll}
                dataCustomer={dataCustomer}
                placeholder={'Ef: Calle ABC#123, Urb XYZ'}
              />
            </Col>
            <Col span={16}>
              <FormText
                dataInfo={dataInfo}
                setDataInfo={setDataInfo}
                attribute={'address'}
                title={'Dirección completa'}
                isRequired={true}
                setValidateAll={setValidateAll}
                isCustomSpan={true}
                dataCustomer={dataCustomer}
                placeholder={'LIMA-UMA-LIMA'}
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
                title={'Tipo de documento'}
                isDisabled={true}
                dataCustomer={dataCustomer}
              />
            </Col>
            <Col span={8}>
              <FormText
                dataInfo={dataInfo}
                setDataInfo={setDataInfo}
                attribute={'repreCustIdNo'}
                title={'No de documento'}
                placeholder={'--'}
                dataCustomer={dataCustomer}
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
              />
            </Col>
            <Col span={8}>
              <FormDate
                dataInfo={dataInfo}
                setDataInfo={setDataInfo}
                attribute={'repreCustBirthday'}
                title={'Fec. Nacimiento'}
                isRequired={true}
                setValidateAll={setValidateAll}
                dataCustomer={dataCustomer}
              />
            </Col>
            <Col span={8}>
              <FormText
                dataInfo={dataInfo}
                setDataInfo={setDataInfo}
                attribute={'repreCustTelFax'}
                title={'Teléfono de contacto'}
                dataCustomer={dataCustomer}
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
              <FormText
                dataInfo={dataInfo}
                setDataInfo={setDataInfo}
                attribute={'contact_no'}
                title={'Número de contrato'}
              />
            </Col>
            <Col span={8}>
              <FormText
                dataInfo={dataInfo}
                setDataInfo={setDataInfo}
                attribute={'contractTypeName'}
                title={'Tipo de contract'}
                isDisabled={true}
                dataCustomer={dataCustomer?.contractInfo}
              />
            </Col>
            <Col span={8}>
              <FormSelect
                dataInfo={dataInfo}
                setDataInfo={setDataInfo}
                attribute={'send_doc_type'}
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
                dataInfo={dataInfo}
                setDataInfo={setDataInfo}
                attribute={'signDate'}
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
                attribute={'effectDate'}
                title={'Fecha de expiration'}
                dataCustomer={dataCustomer?.contractInfo}
              />
            </Col>
            <Col span={8}>
              <FormSelect
                dataInfo={dataInfo}
                setDataInfo={setDataInfo}
                attribute={''}
                title={'Method de pago'}
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
                title={'Pagador'}
                isRequired={false}
                dataCustomer={dataCustomer?.contractInfo}
              />
            </Col>
            <Col span={8}>
              <FormText
                dataInfo={dataInfo}
                setDataInfo={setDataInfo}
                attribute={'home'}
                title={'Direccion de facturacion'}
                placeholder={'Ej: Colle ABC#123, Urb XYZ'}
                dataCustomer={dataCustomer?.contractInfo}
              />
            </Col>
          </Row>

          {/*line 4*/}
          <Row gutter={24} style={{ marginBottom: '30px' }}>
            <Col span={16}>
              <FormText
                dataInfo={dataInfo}
                setDataInfo={setDataInfo}
                attribute={'areaName'}
                title={'Distrito - Prov-Dpto.'}
                isRequired={true}
                setValidateAll={setValidateAll}
                isCustomSpan={true}
                placeholder={'Ingresar Distrla'}
                dataCustomer={dataCustomer?.contractInfo}
              />
            </Col>
            <Col span={8}>
              <FormCheckBox
                dataInfo={dataInfo}
                setDataInfo={setDataInfo}
                attribute={'noticeCharge'}
                title={'Envio de recibos'}
                isRequired={true}
                setValidateAll={setValidateAll}
                dataCustomer={dataCustomer?.contractInfo}
              />
            </Col>
          </Row>

          {/*line 5*/}
          <Row gutter={24} style={{ marginBottom: '30px' }}>
            <Col span={8}>
              <FormTextAutoComplete
                dataInfo={dataInfo}
                setDataInfo={setDataInfo}
                attribute={'staffCode'}
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
                attribute={'staffCode'}
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
                title={'Nombres y Apellidos'}
                isRequired={true}
                setValidateAll={setValidateAll}
                placeholder={'Ingresar Nombres y Apellidos'}
                dataCustomer={dataCustomer}
              />
            </Col>
            <Col span={8}>
              <FormText
                dataInfo={dataInfo}
                setDataInfo={setDataInfo}
                attribute={'repreCustIdNo'}
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
                title={'Posición de cargo'}
                isRequired={true}
                setValidateAll={setValidateAll}
              />
            </Col>
          </Row>

          {/*line 8*/}
          <Row gutter={24} style={{ marginBottom: '30px' }}>
            <Col span={8}>
              <FormText
                dataInfo={dataInfo}
                setDataInfo={setDataInfo}
                attribute={'email_new'}
                title={'Email'}
                isRequired={true}
                setValidateAll={setValidateAll}
              />
            </Col>
            <Col span={8}>
              <FormText
                dataInfo={dataInfo}
                setDataInfo={setDataInfo}
                attribute={'repreCustTelFax'}
                title={'Tel. Contacto'}
                isRequired={true}
                setValidateAll={setValidateAll}
                dataCustomer={dataCustomer}
                type={'number'}
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
