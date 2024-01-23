import { Button, Col, Form, Input, Row, Select, Space, Table, Upload } from 'antd'
import Column from 'antd/es/table/Column'
import { EmptyUI } from '@/components/ui-source/empty'
import { NO_DATA, SOURCE_TYPE_OF_DOCUMENT, STATE } from '@/ultils/constants'
import { LoadingRegion } from '@/components/ui-source/loading'
import { useEffect, useMemo, useState } from 'react'
import { NotificationWarning } from '@/components/common/Notification'
import useUploadFile from '@/hooks/useUploadFile'
import { SOURCE_UPLOAD_FILE } from '@/ultils/dataSourceConstants'
import useDownloadFile from '@/hooks/useDownloadFile'
import useSaveContract from '@/hooks/useSaveContract.ts'
import useSaveGroup from '@/hooks/useSaveGroup.ts'
import downloadIcon from '@/assets/images/downloadicon.svg'
import checkMarkIcon from '@/assets/images/check-mark-circle-icon.svg'
import circleIcon from '@/assets/images/circle-line-icon.svg'
const { Option } = Select

const AttachedTab = ({ dataInfo, dataInfoGroup, setActiveTab, setContractNo }: any) => {
  const [listSourceType, setListSourceType] = useState<any>(SOURCE_TYPE_OF_DOCUMENT)
  const [listDataFiles, setListDataFiles] = useState<any>(SOURCE_UPLOAD_FILE)
  const [currentFile, setCurrentFile] = useState<any>('')
  const [currentType, setCurrentType] = useState<any>('')

  const { responseUploadFile, requestUploadFile } = useUploadFile()
  const { responseDownloadFile, requestDownloadFile } = useDownloadFile()
  const { responseSaveContract, requestSaveContract } = useSaveContract()
  const { responseSaveGroup, requestSaveGroup } = useSaveGroup()
  const tableLoading = {
    spinning: false,
    indicator: <LoadingRegion />
  }

  const onChangeFile = async (file) => {
    if (file?.file?.originFileObj) {
      setCurrentFile(file?.file?.originFileObj)
    }
  }
  const onUploadFile = async () => {
    const formData = new FormData()
    if (currentFile && currentType) {
      formData.append('file', currentFile)
      formData.append('fileType', currentType)
      formData.append('idNo', dataInfo?.idNo)

      requestUploadFile(formData)
    } else {
      if (!currentType) {
        NotificationWarning('Please choice Type of document')
      } else if (currentFile) {
        NotificationWarning('Not have file')
      }
    }
  }

  const downloadFile = async (item) => {
    if (item?.link_file && item?.type) {
      requestDownloadFile({
        fileName: item?.link_file,
        fileType: item?.type,
        idNo: dataInfo?.idNo ?? '10432498404'
      })
    } else {
      NotificationWarning('File not found')
    }
  }

  const onSaveDataContract = () => {
    requestSaveContract(dataInfo)
  }

  const isdDisableButtonNext = useMemo(() => {
    let flag = false
    if (listDataFiles?.length > 0) {
      listDataFiles
        .filter((it) => it?.mandatory)
        ?.forEach((it) => {
          if (!it?.link_file) {
            flag = true
          }
        })
    }

    return flag
  }, [listDataFiles])

  useEffect(() => {
    if (responseUploadFile?.data?.fileType && responseUploadFile?.state === STATE?.SUCCESS) {
      setListDataFiles((prev) => {
        prev = prev?.map((it) => {
          if (it?.type == responseUploadFile?.data?.fileType) {
            return { ...it, status: true, link_file: responseUploadFile?.data?.fileName }
          } else {
            return it
          }
        })

        return prev
      })
      setCurrentType('')
      setCurrentFile('')
      setListSourceType((prev) => {
        prev = prev?.map((it) => {
          if (it?.value == responseUploadFile?.data?.fileType) {
            return { ...it, disabled: true }
          } else {
            return it
          }
        })

        return prev
      })
    }
  }, [responseUploadFile])

  useEffect(() => {
    if (responseDownloadFile?.data?.idType && responseDownloadFile?.state === STATE?.SUCCESS) {
    }
  }, [responseDownloadFile])

  useEffect(() => {
    if (responseSaveContract?.data && responseSaveContract?.state === STATE?.SUCCESS && dataInfoGroup?.length > 0) {
      const data = dataInfoGroup.map((it) => ({
        ...it,
        contractNo: responseSaveContract?.data
      }))
      setContractNo(responseSaveContract?.data)
      requestSaveGroup(data)
    }
  }, [responseSaveContract])

  useEffect(() => {
    console.log('responseSaveContract+++', responseSaveGroup)
    if (responseSaveGroup?.data && responseSaveGroup?.state === STATE?.SUCCESS) {
      setActiveTab('4')
    }
  }, [responseSaveGroup])

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
                      // options={listSourceType}
                    >
                      {listSourceType.map((item, itemIndex) => {
                        return (
                          <Option key={itemIndex} value={item.value} disabled={item?.disabled}>
                            {item.label}
                          </Option>
                        )
                      })}
                    </Select>
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
                onChange={onChangeFile}
                customRequest={() => {
                  return false
                }}
                multiple={false}
                accept={'.pdf'}
              >
                <Button type='default' size={'large'} onClick={() => {}} loading={responseUploadFile?.loading}>
                  Seleccionar archivo
                </Button>
              </Upload>
            </Col>
            <Col span={3}>
              <Button
                type='default'
                size={'large'}
                onClick={() => onUploadFile()}
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
              render={(val, record) => {
                if (val) {
                  return (
                    <img
                      src={downloadIcon}
                      alt='download'
                      onClick={() => downloadFile(record)}
                      style={{ height: '30px' }}
                    />
                  )
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
                  return <img src={checkMarkIcon} alt='download' style={{ height: '30px' }} />
                } else {
                  return <img src={circleIcon} alt='download' style={{ height: '30px' }} />
                }
              }}
            />
          </Table>
        </fieldset>
      </Form>
      {isdDisableButtonNext && (
        <div className={'message-error'}>Por Favor subir todos los documentos sustentatorios del Client</div>
      )}
      <div className={'display-flex-center button-continue'}>
        <Button
          type='default'
          size={'large'}
          onClick={onSaveDataContract}
          disabled={isdDisableButtonNext}
          loading={responseSaveContract?.loading || responseSaveContract?.loading}
        >
          Registrar solicitud
        </Button>
      </div>
    </>
  )
}

export default AttachedTab
