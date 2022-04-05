import {Form, Input, Button, Checkbox, Divider, Typography, Row} from 'antd';
import {GoogleOutlined, UserOutlined, LockOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';

import '../login.scss';
const LoginForm = ({login}) => {
  const onFinish = values => {
    // console.log('Received values of form: ', values);
    login(values);
  };
  const {Text} = Typography;
  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'لطفا ایمیل خود را وارد کنید',
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="ایمیل"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'لطفا رمز عبور را وارد کنید',
          },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="رمز عبور"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>
            <Text>مرا بخاطر بسپار</Text>
          </Checkbox>
        </Form.Item>

        <Link className="login-form-forgot" style={{float: 'left'}}>
          فراموشی رمز
        </Link>
      </Form.Item>
      <Button
        type="primary"
        size="large"
        style={{width: '100%'}}
        htmlType="submit"
        className="login-form-button"
      >
        ورود
      </Button>

      <Divider plain>ورود با</Divider>
      <Form.Item>
        <Button
          size="large"
          style={{width: '100%'}}
          htmlType="submit"
          className="login-form-button"
        >
          Google
          <GoogleOutlined style={{marginRight: '10px'}} />
        </Button>
      </Form.Item>
      <Row justify="center">
        اکانت ندارید
        <Link to="/singup">
          <Text className="signupLink"> ثبت نام </Text>
        </Link>
        کنید
      </Row>
    </Form>
  );
};

export default LoginForm;
