import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

export const LoadingRegion = ({ tip, color = '#CD9D2F' }) => {
  return <Spin tip={tip} size={'large'} style={{ color: color }} indicator={<LoadingOutlined spin />} />
}

// load all
// <Row className={'loading-icon'}>
//   <LoadingRegion />
// </Row>

// <div className="full-page-loading">
//   <LoadingRegion />
// </div>
