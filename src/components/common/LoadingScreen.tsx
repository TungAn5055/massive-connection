import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

const LoadingScreen = () => {
  return (
    <div className='flex justify-center items-center w-screen h-screen z-50 fixed top-0 left-0'>
      <Spin
        size='large'
        indicator={
          <LoadingOutlined
            style={{
              fontSize: 24
            }}
            spin
          />
        }
      />
    </div>
  )
}

export default LoadingScreen
