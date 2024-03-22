import { Button, Col, Form, Input, Row, Select, Space, Table, Upload } from 'antd'
import Column from 'antd/es/table/Column'
import { EmptyUI } from '@/components/ui-source/empty'
import { NO_DATA, STATE } from '@/ultils/constants'
import { LoadingRegion } from '@/components/ui-source/loading'
import { useEffect, useMemo, useState } from 'react'
import { NotificationError, NotificationSuccess, NotificationWarning } from '@/components/common/Notification'
import downloadIcon from '@/assets/images/downloadicon.svg'
import useGetGroupInfo from '@/hooks/useGetGroupInfo'
import useDownloadFileSim from '@/hooks/useDownloadFileSim'
import useUploadSim from '@/hooks/useUploadSim'
import useUpdateStatusOrder from '@/hooks/useUpdateStatusOrder'
import axiosInstance from '@/configs/axios.ts'
import { useNavigate } from 'react-router-dom'
import useDownloadFileTempleSim from '@/hooks/useDownloadFileTempleSim'
const { Option } = Select

const AttachedTab = ({ contractNo, setActiveTab }: any) => {
  const navigate = useNavigate()
  const [listDataFiles, setListDataFiles] = useState<any>([])
  const [currentFile, setCurrentFile] = useState<any>('')
  const [currentType, setCurrentType] = useState<any>('')
  const [currentClickItem, setCurrentClickItem] = useState<any>({})
  const [showError] = useState<boolean>(false)
  const { responseGetGroupInfo, requestGetGroupInfo } = useGetGroupInfo()
  const { responseUploadFile, requestUploadFile } = useUploadSim()
  const { responseDownloadFile, requestDownloadFile } = useDownloadFileSim()
  const { responseDownloadTempleFile, requestDownloadTempleFile } = useDownloadFileTempleSim()
  const { responseUpdateStatusOrder, requestUpdateStatusOrder } = useUpdateStatusOrder()

  const tableLoading = {
    spinning: false,
    indicator: <LoadingRegion />
  }
  const onChangeFile = async (file) => {
    if (file?.file?.originFileObj) {
      setCurrentFile(file?.file)
    }
  }
  const onUploadFile = async () => {
    const formData = new FormData()
    if (currentFile && currentType) {
      formData.append('file', currentFile?.originFileObj)
      formData.append('groupId', currentType?.groupId)
      // formData.append('quantityOfLines', '21')
      formData.append('quantityOfLines', currentType?.quantityOfLines)
      formData.append('contractNo', contractNo)

      setListDataFiles((prev) => {
        prev = prev?.map((it) => {
          if (it?.groupId == currentType?.groupId) {
            return { ...it, dataFile: currentFile }
          } else {
            return it
          }
        })

        return prev
      })

      requestUploadFile(formData)
    } else {
      if (!currentType) {
        NotificationWarning('Por favor seleccione el tipo de documento')
      } else if (currentFile) {
        NotificationWarning('Not have file')
      }
    }
  }

  const downloadFile = async (item) => {
    if (item?.fileName && item?.groupId) {
      setCurrentClickItem(item)
      requestDownloadFile({
        fileName: item?.fileName,
        groupId: item?.groupId,
        contractNo: contractNo
      })
    } else {
      NotificationWarning('Archivo no encontrado')
    }
  }

  const onSaveDataContract = async () => {
    await Promise.all(
      listDataFiles
        ?.filter((it) => it?.status)
        .map(async (it) => {
          const formData1 = new FormData()
          formData1.append('file', it?.dataFile?.originFileObj)
          formData1.append('groupId', currentType?.groupId)
          formData1.append('contractNo', contractNo)
          return await axiosInstance.post('/api/save-list-sims', formData1, {
            headers: {
              'content-type': 'multipart/form-data'
            }
          })
        })
    ).then(function (res) {
      if (res?.length > 0) {
        const dataActive = listDataFiles?.filter((it) => it?.status)
        let flag = true
        let text = ''
        res.forEach((it: any, index: number) => {
          if (it?.data == false && dataActive[index]) {
            flag = false
            text += dataActive[index]?.fileName + ','
          }
        })

        if (!flag) {
          NotificationError(`Save file error: ${text}`)
        }

        if (flag) {
          requestUpdateStatusOrder({
            status: 2,
            contractNo: contractNo
          })
        }
      }
    })

    requestUpdateStatusOrder({
      status: 2,
      contractNo: contractNo
    })
  }

  const isdDisableButtonNext = useMemo(() => {
    let flag = false
    if (listDataFiles?.length > 0) {
      const res = listDataFiles.filter((it) => !it?.status)
      if (res?.length > 0) {
        flag = true
      }
    }

    return flag
  }, [listDataFiles])

  useEffect(() => {
    if (responseUploadFile?.data?.fileName && responseUploadFile?.state === STATE?.SUCCESS) {
      NotificationSuccess('Archivo cargado correctamente', null)
      setListDataFiles((prev) => {
        prev = prev?.map((it) => {
          if (it?.groupId == responseUploadFile?.data?.groupId) {
            return { ...it, status: true, fileName: responseUploadFile?.data?.fileName }
          } else {
            return it
          }
        })

        return prev
      })
      // setCurrentType('')
      setCurrentFile('')
    }
    if (responseUploadFile?.message && responseUploadFile?.state === STATE?.ERROR) {
      NotificationError(responseUploadFile?.message)
    }
  }, [responseUploadFile])

  useEffect(() => {
    if (responseDownloadFile?.data && responseDownloadFile?.state === STATE?.SUCCESS) {
      const url = window.URL.createObjectURL(new Blob([responseDownloadFile?.data]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', currentClickItem?.fileName) //or any other extension
      document.body.appendChild(link)
      link.click()
      setCurrentClickItem({})
    }
  }, [responseDownloadFile])

  useEffect(() => {
    if (responseDownloadTempleFile?.data && responseDownloadTempleFile?.state === STATE?.SUCCESS) {
      const url = window.URL.createObjectURL(new Blob([responseDownloadTempleFile?.data]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', 'Template_file_upload_sim.xlsx') //or any other extension
      document.body.appendChild(link)
      link.click()
      setCurrentClickItem({})
    }
  }, [responseDownloadTempleFile])

  useEffect(() => {
    if (responseUpdateStatusOrder?.data && responseUpdateStatusOrder?.state === STATE?.SUCCESS) {
      setActiveTab('2')
    }
  }, [responseUpdateStatusOrder])

  useEffect(() => {
    if (responseGetGroupInfo?.data && responseGetGroupInfo?.state === STATE?.SUCCESS) {
      setListDataFiles(responseGetGroupInfo?.data)
    }
    if (responseGetGroupInfo?.message && responseGetGroupInfo?.state === STATE?.ERROR) {
      NotificationError(responseGetGroupInfo?.message)
    }
  }, [responseGetGroupInfo])

  useEffect(() => {
    if (contractNo) {
      requestGetGroupInfo(`/api/get-group-info?contractNo=${contractNo}`)
    }
  }, [contractNo])

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
                      value={currentType?.groupId}
                      onChange={(e, info: any) => {
                        setCurrentType({
                          groupId: e,
                          quantityOfLines: info?.quantityOfLines
                        })
                      }}
                      placeholder={'- Select group of new lines -'}
                    >
                      {responseGetGroupInfo?.data?.map((item, itemIndex) => {
                        return (
                          <Option key={itemIndex} value={item.groupId} quantityOfLines={item?.quantityOfLines}>
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
                    <Input
                      size={'large'}
                      value={currentFile?.name ?? ''}
                      disabled={true}
                      placeholder={'- Insert file here xls-'}
                    />
                  </Col>
                </Row>
              </Form.Item>
            </Col>

            <Col span={4} style={{ marginLeft: '30px' }}>
              <Upload
                showUploadList={false}
                onChange={onChangeFile}
                customRequest={() => {
                  return false
                }}
                multiple={false}
                accept={'.xlsx, .xls'}
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
            <Col span={5} style={{ paddingTop: '10px', color: '#6396bc' }}>
              <span
                onClick={() => {
                  requestDownloadTempleFile()
                }}
              >
                Click here to download template
              </span>
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
            <span className={'legend-color'}>Table of files</span>
          </legend>
          <Table
            rowKey={(record: any) => record.id}
            // dataSource={listDataFiles}
            dataSource={listDataFiles}
            pagination={false}
            loading={tableLoading}
            locale={{ emptyText: <EmptyUI content={NO_DATA} /> }}
          >
            <Column
              title={'#'}
              dataIndex=''
              key='ddd'
              render={(val, info, index) => {
                return info && val && <Space>{index + 1}</Space>
              }}
            />
            <Column title={'No of group'} dataIndex='groupName' key='groupName' />
            <Column
              title={'Number'}
              dataIndex='quantityOfLines'
              key='quantityOfLines'
              render={(val) => {
                return <Space>{val}</Space>
              }}
            />
            <Column
              title={'Plan'}
              dataIndex='productName'
              key='productName'
              render={(val) => {
                return <Space>{val}</Space>
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
              dataIndex='fileName'
              key='fileName'
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
        <div className={'message-error'}>Por favor, subir documento para todos los grupos creados</div>
      )}
      <div className={'display-flex-center button-continue'}>
        <Button type='default' size={'large'} onClick={() => navigate(-1)} style={{ marginRight: '10px' }}>
          Go back
        </Button>
        <Button
          type='default'
          size={'large'}
          onClick={onSaveDataContract}
          disabled={isdDisableButtonNext}
          loading={responseUpdateStatusOrder?.loading}
        >
          Continue
        </Button>
      </div>
    </>
  )
}

export default AttachedTab
