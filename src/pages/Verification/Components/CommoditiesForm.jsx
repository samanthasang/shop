import {Form, Input, Button, Typography, Divider, Row} from 'antd';
import {GoogleOutlined, UserOutlined, LockOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';
const CommoditiesForm = ({signUp}) => {
  const onFinish = values => {
    signUp(values);
    // console.log('Received values of form: ', values);
  };

  const {Text} = Typography;
  return (
    <Form
      name="normal_login"
      layout="vertical"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="password"
        label="URL"
        rules={[
          {
            required: true,
            message: 'لطفا رمز عبور را وارد کنید',
          },
        ]}
      >
        <Input
          type="password"
          placeholder="رمز عبور"
        />
      </Form.Item>
      <Form.Item
        name="password"
        label="URL"
        rules={[
          {
            required: true,
            message: 'لطفا رمز عبور را وارد کنید',
          },
        ]}
      >
        <Input
          type="password"
          placeholder="رمز عبور"
        />
      </Form.Item>
      <Form.Item
        name="password"
        label="URL"
        rules={[
          {
            required: true,
            message: 'لطفا رمز عبور را وارد کنید',
          },
        ]}
      >
        <Input
          type="password"
          placeholder="رمز عبور"
        />
      </Form.Item>
      <Form.Item
        name="password"
        label="URL"
        rules={[
          {
            required: true,
            message: 'لطفا رمز عبور را وارد کنید',
          },
        ]}
      >
        <Input
          type="password"
          placeholder="رمز عبور"
        />
      </Form.Item>
      <Form.Item
        name="password"
        label="URL"
        rules={[
          {
            required: true,
            message: 'لطفا رمز عبور را وارد کنید',
          },
        ]}
      >
        <Input
          type="password"
          placeholder="رمز عبور"
        />
      </Form.Item>
      <Form.Item
        name="password"
        label="URL"
        rules={[
          {
            required: true,
            message: 'لطفا رمز عبور را وارد کنید',
          },
        ]}
      >
        <Input
          type="password"
          placeholder="رمز عبور"
        />
      </Form.Item>
      <Form.Item
        name="password"
        label="URL"
        rules={[
          {
            required: true,
            message: 'لطفا رمز عبور را وارد کنید',
          },
        ]}
      >
        <Input
          type="password"
          placeholder="رمز عبور"
        />
      </Form.Item>
      <Form.Item
        name="password"
        label="URL"
        rules={[
          {
            required: true,
            message: 'لطفا رمز عبور را وارد کنید',
          },
        ]}
      >
        <Input
          type="password"
          placeholder="رمز عبور"
        />
      </Form.Item>
      <Form.Item
        name="password"
        label="URL"
        rules={[
          {
            required: true,
            message: 'لطفا رمز عبور را وارد کنید',
          },
        ]}
      >
        <Input
          type="password"
          placeholder="رمز عبور"
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

export default CommoditiesForm;
