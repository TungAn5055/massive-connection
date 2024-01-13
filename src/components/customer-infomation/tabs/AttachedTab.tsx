import { Button, Col, Form, Row, Table } from 'antd'
import { FormSelect } from '@/components/customer-infomation/form/select'
import Column from 'antd/es/table/Column'
import { EmptyUI } from '@/components/ui-source/empty'
import { NO_DATA, SOURCE_TYPE_OF_DOCUMENT } from '@/ultils/constants'
import { LoadingRegion } from '@/components/ui-source/loading'
import { FormText } from '@/components/customer-infomation/form/text'

const AttachedTab = ({ dataInfo, setDataInfo, setActiveTab }: any) => {
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
          <legend>
            <span className={'legend-color'}>Documentación adjunta</span>
          </legend>
          <span style={{ marginLeft: '20px' }}>La siguiente documentación es SUSTEN</span>
          {/*line 1*/}
          <Row gutter={24} style={{ marginLeft: '10px', marginTop: '20px' }}>
            <Col span={8}>
              <FormSelect
                data={dataInfo}
                setData={setDataInfo}
                attribute={''}
                title={'Type  of document'}
                isRequired={true}
                dataSource={SOURCE_TYPE_OF_DOCUMENT}
              />
            </Col>
            <Col span={8}>
              <FormText data={dataInfo} setData={setDataInfo} attribute={''} title={'Data file'} isRequired={true} />
            </Col>
            <Col span={3}>
              <Button type='default' size={'large'} onClick={() => {}}>
                Seleccionar archivo
              </Button>
            </Col>
            <Col span={3}>
              <Button type='default' size={'large'} onClick={() => {}}>
                Upload
              </Button>
            </Col>
          </Row>
        </fieldset>
      </Form>

      <Form className={'form-search-customer'} name='advanced_search'>
        <fieldset>
          <legend style={{ marginBottom: '0 !important' }}>
            <span className={'legend-color'}>Uploaded Document</span>
          </legend>
          <Table
            rowKey={(record: any) => record.id}
            dataSource={[]}
            pagination={false}
            loading={tableLoading}
            locale={{ emptyText: <EmptyUI content={NO_DATA} /> }}
          >
            <Column
              title={'#'}
              dataIndex=''
              key=''
              // render={(type, record) => {
              //     return BOM_TYPE_DISPLAY[type];
              // }}
            />
            <Column title={'Type of document'} dataIndex='' key='' />
            <Column title={'Mandatory'} dataIndex='' key='' />
            <Column title={'Download document'} dataIndex='material_type_label' key='material_type_label' />
            <Column title={'Status'} dataIndex='' key='' />
          </Table>
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

export default AttachedTab
