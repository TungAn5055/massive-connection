import React from 'react'
import { Button, Col, Form, Input, Row } from 'antd'
import { LoginOutlined } from '@ant-design/icons'

const Login: React.FC = () => {
  // const navigate = useNavigate()
  // const handleLogin = () => {
  //   // navigate('/about')
  // }

  const onFinish = () => {}
  const onFinishFailed = () => {}

  return (
    <>
      <Row className='site-page-header'>
        <Col span={8} className='display-flex header-icon'>
          <LoginOutlined style={{ fontSize: '30px', color: '#000000' }} twoToneColor='#eb2f96' />
          <span className='page-header-heading-title'>Login Page</span>
        </Col>
      </Row>

      <Row className='site-page-content' style={{ justifyContent: 'center' }}>
        <Row className={'login-form'}>
          <Form
            name='basic'
            labelCol={{
              span: 8
            }}
            wrapperCol={{
              span: 16
            }}
            style={{
              maxWidth: 600,
              width: '100%'
            }}
            initialValues={{
              remember: true
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete='off'
          >
            <Form.Item
              label='Username'
              name='username'
              style={{
                marginBottom: '30px'
              }}
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!'
                },
                {
                  required: true,
                  message: 'Please input your E-mail!'
                }
                // {
                //     message: 'this is custom',
                //     validator: (_, value) => {
                //         if (/^[a-zA-Z0-9]+$/.test(value)) {
                //             return Promise.resolve();
                //         } else {
                //             return Promise.reject('Some message here');
                //         }
                //     }
                // }
              ]}
            >
              <Input size={'large'} />
            </Form.Item>

            <Form.Item
              label='Password'
              name='password'
              style={{
                marginBottom: '30px'
              }}
              rules={[
                {
                  required: true,
                  message: 'Please input your password!'
                }
              ]}
            >
              <Input.Password size={'large'} />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16
              }}
            >
              <Button type='default' size={'large'} htmlType='submit'>
                Login
              </Button>
            </Form.Item>
          </Form>
        </Row>
      </Row>
    </>
  )
}

export default Login
