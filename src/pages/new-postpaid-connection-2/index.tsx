import React, { useMemo, useState } from 'react'
import {Button, Col, Form, Input, Row, Select, Space, Table} from 'antd'
import {FolderOpenFilled} from "@ant-design/icons";

const NewPostpaidConnection2: React.FC = () => {
  const [valueType, setValueType] = useState(null)
  const [valueIdentity, setValueIdentity] = useState(null)
  const [form] = Form.useForm()
  const formStyle = {
    maxWidth: 'none',
    padding: 24
  }

  const options = [
    { value: 'RUC', label: 'RUC' },
    { value: 'DNI', label: 'DNI' }
  ]

  const columns = [
    {
      title: 'No',
      dataIndex: 'no',
      key: 'no',
    },
    {
      title: 'Type of document',
      dataIndex: 'type_of_document',
      key: 'type_of_document',
    },
    {
      title: 'Identity number',
      dataIndex: 'identity_number',
      key: 'identity_number',
    },
    {
      title: 'Customer name',
      dataIndex: 'customer_name',
      key: 'customer_name',
    },
    {
      title: 'Creation date',
      dataIndex: 'creation_date',
      key: 'creation_date',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Quantity of lines',
      dataIndex: 'quantity_of_lines',
      key: 'quantity_of_lines',
    },
    {
      title: 'Quantity of plans',
      dataIndex: 'quantity_of_plans',
      key: 'quantity_of_plans',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
    },
  ];
  const data = [
    {
      key: 1,
      name: 'John Brown sr.',
      age: 60,
      address: 'New York No. 1 Lake Park',

    },

  ];

  const handleChangeType = (e) => {
    setValueType(e)
  }

  const handleChangeIdentity = (e) => {
    setValueIdentity(e?.target?.value)
  }

  const checkFalseIdentity = useMemo(() => {
    if (valueType && valueIdentity) {
      if (valueType === 'RUC' && valueIdentity?.length !== 11) {
        return true
      }
      if (valueType === 'DNI' && valueIdentity?.length !== 8) {
        return true
      }
      return false
    } else {
      return true
    }
  }, [valueIdentity, valueType])

  return (
    <>
      <Row className='site-page-header'>
        <Col span={8} className='display-flex header-icon'>
          <FolderOpenFilled style={{fontSize: '30px', color: '#000000'}} twoToneColor='#eb2f96'/>
          <span className='page-header-heading-title'>Connect Postpaid Subscriptor II</span>
        </Col>
        <Col span={5} className='header-highlight-link grid'>
          <a href={'http://www.sunat.gob.pe/cl-ti-itmrconsruc/jcrS00Alias'} target='_blank'>
            RUC Information
          </a>
          <a href={'https://cel.reniec.gob.pe/valreg/valreg.do\n'} target='_blank'>
            DNI information
          </a>
        </Col>
      </Row>


      <Row className='site-page-content'>
        <Form
          className={'form-search-customer'}
          form={form}
          name='advanced_search'
          style={formStyle}
          // onFinish={onFinish}
        >
          <fieldset>
            <legend>Search customer</legend>
            <Row gutter={24} style={{ marginBottom: '30px' }}>

              <Col span={12} key={2}>
                <Row className={'display-flex'}>
                  <Col span={6}>
                    <span>Identity doc (DNI/RUC,...)</span>
                  </Col>
                  <Col span={16}>
                    <Input
                        size={'large'}
                        // value={valueIdentity}
                        onChange={handleChangeIdentity}
                        // onBlur={onBlur}
                        max={valueType === 'DNI' ? 8 : 11}
                    />
                  </Col>
                </Row>
              </Col>
              <Col span={12} key={1}>
                <Row className={'display-flex'}>
                  <Col span={5}>
                    <span>Status</span>
                  </Col>
                  <Col span={16}>
                    <Select
                      size={'large'}
                      value={valueType}
                      onChange={handleChangeType}
                      style={{
                        width: 400
                      }}
                      options={options}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>

            {valueType && valueIdentity && checkFalseIdentity && (
              <div className={'message-error'}>La cantidad de números requeridos no es suficiente</div>
            )}
            <div
              style={{
                textAlign: 'center',
                padding: '20px 0'
              }}
            >
              <Space size='small'>
                <Button type='default' size={'large'} htmlType='submit' disabled={checkFalseIdentity}>
                  Search
                </Button>
              </Space>
            </div>
          </fieldset>
        </Form>
      </Row>
      <Row className='site-page-content'>
        <Row className={'content-customer-information'}  style={{ margin: 0 }}>
          <form className={'form-search-customer'} name='advanced_search'>
            <fieldset>
              <legend>Result</legend>
              {/*table*/}
              <Row gutter={24} style={{ width: "100%", margin: "10px" }}>
                <Table
                    columns={columns}
                    dataSource={data}
                    pagination={false}
                    bordered={true}
                />
              </Row>
            </fieldset>
          </form>
        </Row>
      </Row>
    </>
  )
}

export default NewPostpaidConnection2
