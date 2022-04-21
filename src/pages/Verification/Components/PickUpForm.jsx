import {Form, Col, Input, Button, Typography, Divider, Row} from 'antd';
import {GoogleOutlined, UserOutlined, LockOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';
const PickUpForm = ({signUp}) => {
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
        name="emailadress"
        label="ایمیل"
        rules={[
          {
            message: 'لطفا ایمیل  را وارد کنید',
          },
        ]}
      >
        <Input
          placeholder='لطفا ایمیل را وارد کنید'
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
      </Form.Item></Col>
      </Row>
      <Row>
        <Col span={24}>
      <Form.Item
        name="companybilling"
        label="آدرس"
        rules={[
          {
            message: 'لطفا آدرس را وارد کنید',
          },
        ]}
      >
        <Input
          placeholder='لطفا آدرس دقیق را وارد کنید'
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
        disabled
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
        disabled
          placeholder='لطفا نام منطقه را وارد کنید'
        />
      </Form.Item>

        </Col>
      </Row>
      <Row>
        <Col span={11} >
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
        disabled
          placeholder='لطفا نام کشور را وارد کنید'
        />
      </Form.Item>
      </Col>
        <Col span={11} offset={1}>
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
        تایید
      </Button>
      </Form.Item>
      </Col>
      </Row>
    </Form>
  );
};

export default PickUpForm;
