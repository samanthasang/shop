import {Form, Input, Button, Col, Row} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';
import '../ForgotPassword.scss';
const ForgotPasswordForm = ({sendEmailForgot}) => {
  const onFinish = values => {
    sendEmailForgot(values);
  };

  return (
    <Row>
      <Col span={24}>
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
            label={'ایمیل'}
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
          <Button
            type="primary"
            size="large"
            style={{width: '100%'}}
            htmlType="submit"
            className="login-form-button"
          >
            ثبت
          </Button>
        </Form>
      </Col>

      <Col span={24}>
        <Link to="/forgatPassword" className="forgot-form-login">
          بازگشت به صفحه ورود
        </Link>
      </Col>
    </Row>
  );
};

export default ForgotPasswordForm;
