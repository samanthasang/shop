import { Form, Input, Button, Checkbox, Divider } from 'antd';
import { GoogleOutlined, UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const ProfileForm = () => {
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
        <Button type="primary" size='large' style={{ width: "100%"}} htmlType="submit" className="login-form-button">
          ثبت نام
        </Button>
    <Divider plain>ثبت نام با</Divider>
      </Form.Item>
      <Form.Item>
        <Button icon={<GoogleOutlined />}  size='large' style={{ width: "100%"}} htmlType="submit" className="login-form-button">
          Google
        </Button>
      </Form.Item>
      <Form.Item >
      <p style={{ textAlign: "center", width: '100%'}}>
      با ثبت نام، Freightos را می پذیرم 
      <br/>
      <Link to='/login'> 
      <span> شرایط و ضوابط </span>     
        </Link>
    </p>
      </Form.Item>
      <Form.Item >
      <p style={{ textAlign: "center", width: '100%'}}>
      اکانت دارید 
      <Link to='/login'>   
       <span> وارد </span> 
        </Link>
      شوید
    </p>
      </Form.Item>
    </Form>
  );
};


export default ProfileForm;