import {Form, Input, Button, Typography, Divider, Row} from 'antd';
import {GoogleOutlined, UserOutlined, LockOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';
import '../ForgotPass.scss';
import FormItem from 'antd/lib/form/FormItem';
const ForgotPassForm = ({signUp}) => {
  const onFinish = values => {
    signUp(values);
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
      <Form.Item>

        <Button
          type="primary"
          size="large"
          style={{width: '100%'}}
          htmlType="submit"
          className="login-form-button"
          >
          ثبت نام
        </Button>
        </Form.Item>
    </Form>
  );
};

export default ForgotPassForm;
