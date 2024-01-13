import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

export const LoadingRegion = () => {
  return <Spin size={'large'} style={{ color: '#CD9D2F' }} indicator={<LoadingOutlined spin />} />
}
