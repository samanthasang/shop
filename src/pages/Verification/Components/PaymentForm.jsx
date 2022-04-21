import {Form, Input, Button, Typography, Divider, Row, Col} from 'antd';
import {GoogleOutlined, UserOutlined, LockOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';
const PaymentForm = ({signUp}) => {
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
      <Row >
        <Col span={24}>
      <Form.Item
        name="fullname"
        label="نام و نام خانوادگی"
        rules={[
          {
            message: 'لطفا ایمیل خود را وارد کنید',
          },
        ]}
      >
        <Input
          placeholder="لطفا نام و نام خانوادگی را وارد کنید"
        />
      </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={11}>
      <Form.Item
        name="companyname"
        label="نام شرکت"
        rules={[
          {
            message: 'لطفا نام شرکت را وارد کنید',
          },
        ]}
      >
        <Input
          placeholder='لطفا نام شرکت را وارد کنید'
        />
      </Form.Item>
      </Col>
        <Col span={11} offset={1}>
      <Form.Item
        name="phonenumber"
        label="شماره تلفن"
        rules={[
          {
            message: 'لطفا شماره تلفن را وارد کنید',
          },
        ]}
      >
        <Input
          type="Phone"
          placeholder='لطفا شماره تلفن را وارد کنید'
        />
      </Form.Item>
      </Col>
      </Row>
      <Row>
        <Col span={11}>
      <Form.Item
        name="businessname"
        label="انجام تجارت به عنوان
        (اختیاری)"
        rules={[
          {
            message: 'لطفا نام تجاری را وارد کنید',
          },
        ]}
      >
        <Input
          placeholder='لطفا نام تجاری را وارد کنید'
        />
      </Form.Item>
      </Col>
        <Col span={11} offset={1}>
      <Form.Item
        name="vatname"
        label="VAT / شناسه مالیاتی
        (اختیاری)"
        rules={[
          {
            message: 'لطفا شناسه مالیاتی را وارد کنید',
          },
        ]}
      >
        <Input
          placeholder='لطفا شناسه مالیاتی را وارد کنید'
        />
      </Form.Item></Col>
      </Row>
      <Row>
        <Col span={24}>
      <Form.Item
        name="companybilling"
        label="آدرس صورتحساب شرکت"
        rules={[
          {
            message: 'لطفا آدرس صورتحساب شرکت را وارد کنید',
          },
        ]}
      >
        <Input
          placeholder='لطفا آدرس صورتحساب شرکت را وارد کنید'
        />
      </Form.Item>
      </Col>
      </Row>
      <Row>
        <Col span={11}>
      <Form.Item
        name="cityname"
        label="شهر"
        rules={[
          {
            message: 'لطفا نام شهر را وارد کنید',
          },
        ]}
      >
        <Input
          placeholder='لطفا نام شهر را وارد کنید'
        />
      </Form.Item>
      </Col>
        <Col span={11} offset={1}>

      <Form.Item
        name="regionname"
        label="منطقه
        (اختیاری)"
        rules={[
          {
            message: 'لطفا نام منطقه را وارد کنید',
          },
        ]}
      >
        <Input
          placeholder='لطفا نام منطقه را وارد کنید'
        />
      </Form.Item>

        </Col>
      </Row>
      <Row>
        <Col span={11}>
      <Form.Item
        name="zipcode"
        label="کد پستی
        "
        rules={[
          {
            message: 'لطفا کد پستی را وارد کنید',
          },
        ]}
      >
        <Input
          placeholder='لطفا کد پستی را وارد کنید'
        />
      </Form.Item>
      </Col>
        <Col span={11} offset={1}>
      <Form.Item
        name="countryname"
        label="کشور"
        rules={[
          {
            message: 'لطفا نام کشور را وارد کنید',
          },
        ]}
      >
        <Input
          placeholder='لطفا نام کشور را وارد کنید'
        />
      </Form.Item>
      </Col>
      </Row>
      <Row>
        <Col span={2} >
      <Form.Item >
      <Button
        type="primary"
        size="large"
        style={{width: '100%'}}
        htmlType="submit"
        className="login-form-button"
      >
        ذخیره
      </Button>
      </Form.Item>
      </Col>
      </Row>
    </Form>
  );
};

export default PaymentForm;
