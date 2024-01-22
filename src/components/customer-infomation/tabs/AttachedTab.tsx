import { Button, Col, Form, Input, Row, Select, Space, Table, Upload } from 'antd'
import Column from 'antd/es/table/Column'
import { EmptyUI } from '@/components/ui-source/empty'
import { NO_DATA, SOURCE_TYPE_OF_DOCUMENT, STATE } from '@/ultils/constants'
import { LoadingRegion } from '@/components/ui-source/loading'
import { useEffect, useState } from 'react'
import { CheckCircleFilled, DropboxSquareFilled, ExclamationCircleFilled } from '@ant-design/icons'
import { NotificationWarning } from '@/components/common/Notification'
// import { getBase64 } from '@/ultils/helper'
import useUploadFile from '@/hooks/useUploadFile'
import { SOURCE_UPLOAD_FILE } from '@/ultils/dataSourceConstants'

const AttachedTab = ({ dataInfo, setActiveTab }: any) => {
  const [listDataFiles, setListDataFiles] = useState<any>(SOURCE_UPLOAD_FILE)
  const [currentFile, setCurrentFile] = useState<any>('')
  const [currentType, setCurrentType] = useState<any>('')

  const { responseUploadFile, requestUploadFile } = useUploadFile()

  const tableLoading = {
    spinning: false,
    indicator: <LoadingRegion />
  }

  const onBeforeUploadFile = async (file) => {
    if (file) {
      console.log('file+++123', file)
      setCurrentFile(file)
    }
  }
  const onUploadFile = async (info) => {
    console.log('info+++', info)
    // console.log('currentFile+++', currentFile)
    // console.log('dataInfo+++', dataInfo)
    setListDataFiles([])

    let formData = new FormData();

    formData.append("file", info?.file?.originFileObj);
    formData.append("fileType", currentType);
    formData.append("idNo", dataInfo?.idNo ?? '10432498404');

    // const params = {
    //   file: currentFile.base64.slice(currentFile.base64.indexOf(',') + 1),
    //   idType: currentType,
    //   idNo: dataInfo?.idNo ?? '10432498404'
    // }
    requestUploadFile(formData)

    if (currentFile && currentType) {
    //   // currentFile.base64 = await getBase64(currentFile)
    //   if (currentFile) {
    //     formData.append("file", info?.originFileObj);
    //     formData.append("idType", currentType);
    //     formData.append("idNo", dataInfo?.idNo ?? '10432498404');
    //
    //     // const params = {
    //     //   file: currentFile.base64.slice(currentFile.base64.indexOf(',') + 1),
    //     //   idType: currentType,
    //     //   idNo: dataInfo?.idNo ?? '10432498404'
    //     // }
    //     requestUploadFile(formData)
    //   }
    } else {
      if (!currentType) {
        NotificationWarning('NOOOOOO')
      } else if (currentFile) {
        NotificationWarning('Not have file')
      }
    }
  }

  const onNextStep = () => {
    setActiveTab((prev) => (parseInt(prev) + 1).toString())
  }

  useEffect(() => {
    console.log('responseUploadFile+++', responseUploadFile)
    if (responseUploadFile?.data?.length > 0 && responseUploadFile?.state === STATE?.SUCCESS) {
      console.log(responseUploadFile?.data)
    }
  }, [responseUploadFile])

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
              <Form.Item>
                <Row className={'display-flex'}>
                  <Col span={6}>
                    <span>Type of document</span>
                  </Col>
                  <Col span={18}>
                    <Select
                      size={'large'}
                      value={currentType}
                      onChange={(e) => {
                        setCurrentType(e)
                      }}
                      style={{
                        width: '90%'
                      }}
                      options={SOURCE_TYPE_OF_DOCUMENT}
                    />
                  </Col>
                </Row>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item>
                <Row className={'display-flex'}>
                  <Col span={6}>
                    <span>Data file</span>
                  </Col>
                  <Col span={18}>
                    <Input size={'large'} value={currentFile?.name ?? ''} disabled={true} />
                  </Col>
                </Row>
              </Form.Item>
            </Col>
            <Col span={3}>
              <Upload
                showUploadList={false}
                beforeUpload={onBeforeUploadFile}
                onChange={onUploadFile}
                customRequest={() => { return false}}
                multiple={false}
              >
                <Button type='default' size={'large'} onClick={() => {}}>
                  Seleccionar archivo
                </Button>
              </Upload>
            </Col>
            <Col span={3}>
              <Button
                type='default'
                size={'large'}
                // onClick={() => onUploadFile()}
                loading={responseUploadFile?.loading}
              >
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
            dataSource={listDataFiles}
            pagination={false}
            loading={tableLoading}
            locale={{ emptyText: <EmptyUI content={NO_DATA} /> }}
          >
            <Column
              title={'#'}
              dataIndex='idx'
              key='idx'
              render={(val) => {
                return <Space>{val}</Space>
              }}
            />
            <Column title={'Type of document'} dataIndex='title_type' key='title_type' />
            <Column
              title={'Mandatory'}
              dataIndex='mandatory'
              key='mandatory'
              render={(val) => {
                return <Space>{val ? 'YES' : 'NO'}</Space>
              }}
            />
            <Column
              title={'Download document'}
              dataIndex='link_file'
              key='link_file'
              render={(val) => {
                if (val) {
                  return <DropboxSquareFilled style={{ fontSize: 30 }} />
                } else {
                  return <></>
                }
              }}
            />
            <Column
              title={'Status'}
              dataIndex='status'
              key='status'
              render={(val) => {
                if (val) {
                  return <CheckCircleFilled style={{ fontSize: 30 }} />
                } else {
                  return <ExclamationCircleFilled style={{ fontSize: 30 }} />
                }
              }}
            />
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
