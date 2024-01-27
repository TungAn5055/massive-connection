import { Button, Col, Form, Input, Row, Select, Space, Table, Upload } from 'antd'
import Column from 'antd/es/table/Column'
import { EmptyUI } from '@/components/ui-source/empty'
import { NO_DATA, STATE } from '@/ultils/constants'
import { LoadingRegion } from '@/components/ui-source/loading'
import { useEffect, useMemo, useState } from 'react'
import { NotificationSuccess, NotificationWarning } from '@/components/common/Notification'
import useUploadFile from '@/hooks/useUploadFile'
import useSaveContract from '@/hooks/useSaveContract.ts'
import useSaveGroup from '@/hooks/useSaveGroup.ts'
import downloadIcon from '@/assets/images/downloadicon.svg'
import useGetGroupInfo from '@/hooks/useGetGroupInfo'
import useDownloadFileSim from '@/hooks/useDownloadFileSim'
const { Option } = Select

const AttachedTab = ({ dataInfo, contractNo, setActiveTab, setContractNo }: any) => {
  const [listDataFiles, setListDataFiles] = useState<any>([])
  const [currentFile, setCurrentFile] = useState<any>('')
  const [currentType, setCurrentType] = useState<any>('')
  const [currentClickItem, setCurrentClickItem] = useState<any>({})
  const [showError] = useState<boolean>(false)

  const { responseGetGroupInfo, requestGetGroupInfo } = useGetGroupInfo()
  const { responseUploadFile, requestUploadFile } = useUploadFile()
  const { responseDownloadFile, requestDownloadFile } = useDownloadFileSim()
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
      setCurrentClickItem(item)
      requestDownloadFile({
        fileName: item?.link_file,
        fileType: item?.type,
        idNo: dataInfo?.idNo
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
      NotificationSuccess('Upload file success', null)
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
    }
  }, [responseUploadFile])

  useEffect(() => {
    if (responseDownloadFile?.data && responseDownloadFile?.state === STATE?.SUCCESS) {
      const url = window.URL.createObjectURL(new Blob([responseSaveGroup?.data]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', currentClickItem?.link_file) //or any other extension
      document.body.appendChild(link)
      link.click()
      setCurrentClickItem({})
    }
  }, [responseDownloadFile])

  useEffect(() => {
    if (responseSaveContract?.data && responseSaveContract?.state === STATE?.SUCCESS) {
      setContractNo(responseSaveContract?.data)
      requestSaveGroup([])
    }
  }, [responseSaveContract])

  useEffect(() => {
    if (responseSaveGroup?.data && responseSaveGroup?.state === STATE?.SUCCESS) {
      setActiveTab('4')
    }
  }, [responseSaveGroup])

  useEffect(() => {
    if (contractNo) {
      requestGetGroupInfo(`/api/get-group-info?ContractNo=${contractNo}`)
    }
  }, [contractNo])

  useEffect(() => {
    if (responseGetGroupInfo?.data && responseGetGroupInfo?.state === STATE?.SUCCESS) {
      setListDataFiles(responseGetGroupInfo?.data)
    }
  }, [responseGetGroupInfo])

  return (
    <>
      <Form className={'form-search-customer'} name='advanced_search'>
        <fieldset>
          <legend>
            <span className={'legend-color'}>Line upload</span>
          </legend>
          {/*line 1*/}
          <Row gutter={24} style={{ marginLeft: '10px', marginTop: '20px' }}>
            <Col span={8}>
              <Form.Item>
                <Row className={'display-flex'}>
                  <Col span={6}>
                    <span>Group</span>
                  </Col>
                  <Col span={18}>
                    <Select
                      size={'large'}
                      value={currentType}
                      onChange={(e) => {
                        setCurrentType(e)
                      }}
                    >
                      {responseGetGroupInfo?.data?.map((item, itemIndex) => {
                        return (
                          <Option key={itemIndex} value={item.groupId}>
                            {item.groupName}
                          </Option>
                        )
                      })}
                    </Select>
                  </Col>
                </Row>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24} style={{ marginLeft: '10px', marginTop: '20px' }}>
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

            <Col span={3} style={{ marginLeft: '30px' }}>
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
            <Col span={2}>
              <Button
                type='default'
                size={'large'}
                onClick={() => onUploadFile()}
                loading={responseUploadFile?.loading}
              >
                Upload
              </Button>
            </Col>
            <Col span={4} style={{ paddingTop: '10px', color: '#6396bc' }}>
              <a
                href={
                  'https://docs.google.com/spreadsheets/d/13lUIfjn_Zu9-VWLhpuIC6_Q5VlW3t-Ll/edit?usp=drive_link&ouid=108812830668437018115&rtpof=true&sd=true'
                }
              >
                Click here to download template
              </a>
            </Col>
            {showError && (
              <Col span={4}>
                <span>Pof favor, subir la cantidad correcta de seriales solicitados</span>
              </Col>
            )}
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
            <Column title={'No of group'} dataIndex='title_type' key='title_type' />
            <Column
              title={'Number'}
              dataIndex='mandatory'
              key='mandatory'
              render={(val) => {
                return <Space>{val ? 'YES' : 'NO'}</Space>
              }}
            />
            <Column
              title={'Plan'}
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
                  return <span>OK</span>
                } else {
                  return <span>NOK</span>
                }
              }}
            />
            <Column
              title={'Download file'}
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
