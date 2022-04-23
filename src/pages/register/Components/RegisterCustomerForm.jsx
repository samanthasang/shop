import {Form, Input, Button, Typography, Divider, Row} from 'antd';
import {
  GoogleOutlined,
  UserOutlined,
  LockOutlined,
  UserSwitchOutlined,
} from '@ant-design/icons';
import {Link} from 'react-router-dom';
import '../SingUp.scss';
const RegisterCustomerForm = ({registerCustomer}) => {
  const onFinish = values => {
    registerCustomer(values);
    // console.log('Received values of form: ', values);
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
        name="email"
        rules={[
          {
            required: true,
            message: 'لطفا ایمیل خود را صحیح وارد کنید',
            pattern: new RegExp(/\S+@\S+\.\S+/),
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="ایمیل"
        />
      </Form.Item>
      <Form.Item
        name="phoneNumber"
        rules={[
          {
            required: true,
            message: 'لطفا شماره همراه خود را صحیح وارد کنید',
            pattern: new RegExp(/^[0-9]+$/),
          },
        ]}
      >
        <Input
          prefix={<UserSwitchOutlined className="site-form-item-icon" />}
          placeholder="شماره همراه مانند :                                 09123456789"
        />
      </Form.Item>
      <Form.Item
        name="password"
        // label="رمز عبور"
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
      <Form.Item
        name="confirmPassword"
        // label="تکرار رمز عبور"
        rules={[
          {
            required: true,
            message: 'لطفا رمز عبور را مجددا وارد کنید',
          },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="تکرار رمز عبور"
        />
      </Form.Item>
      <Button
        type="primary"
        size="large"
        style={{width: '100%'}}
        htmlType="submit"
        className="login-form-button"
      >
        ثبت نام
      </Button>
      <Divider plain>ثبت نام با</Divider>

      <Button
        icon={<GoogleOutlined />}
        size="large"
        style={{width: '100%'}}
        htmlType="submit"
        className="login-form-button"
      >
        Google
      </Button>
      <Row justify="center">
        با ثبت نام، Freightos را می پذیرم
        <br />
        <Link to="/login">
          <Text className="linkText"> شرایط و ضوابط </Text>
        </Link>
      </Row>
      <Row justify="center">
        اکانت دارید
        <Link to="/login">
          <Text className="linkText"> وارد </Text>
        </Link>
        شوید
      </Row>
    </Form>
  );
};

export default RegisterCustomerForm;
