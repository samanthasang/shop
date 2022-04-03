import { Form, Input, Button, Checkbox, Divider } from 'antd';
import { GoogleOutlined, UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

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
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="ایمیل" />
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
          <Checkbox>مرا به خاطر بسپار</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="" style={{ float: "left"}}>
          فراموشی رمز
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" size='large' style={{ width: "100%"}} htmlType="submit" className="login-form-button">
          ورود
        </Button>
    <Divider plain>ورود با</Divider>
      </Form.Item>
      <Form.Item>
        <Button icon={<GoogleOutlined />}  size='large' style={{ width: "100%"}} htmlType="submit" className="login-form-button">
          Google
        </Button>
      </Form.Item>
      <Form.Item >
      <p style={{ textAlign: "center", width: '100%'}}>
      اکانت ندارید 
      <Link to='/singup'> 
      <span> ثبت نام </span>     
        </Link> کنید
    </p>
      </Form.Item>
    </Form>
  );
};


export default LoginForm;