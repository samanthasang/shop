import React, { useState } from 'react';
import { Row,Col,Card, Form, Input, Button, Radio } from 'antd';

import '../AccountDetails.scss'

const PasswordForm = (props) => {
    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
  return (
    <Row className='passForm' >
      <Col span={22} offset={1}>
        <Card title="ویرایش رمز عبور"style={{textAlign: 'right'}} >
    <Form style={{textAlign: 'right'}}
      name="basic"
      labelCol={{
        span: 24,
      }}
      wrapperCol={{
        span: 24,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item style={{textAlign: 'right'}}
        label="رمز عبور کنونی"
        name="Current"
        rules={[
          {
            message: 'Please input your Current !',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="رمز عبور جدید"
        name="New"
        rules={[
          {
            message: 'Please input your password!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="تکرار رمز عبور جدید"
        name="Re-type new"
        rules={[
          {
            message: 'Please input your password!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Row >
      <Col span={2}>

      <Form.Item
        wrapperCol={{
          offset: 0,
          span: 4,
        }}
        >
        <Button type="primary" htmlType="submit">
        تغییر رمز عبور
        </Button>
      </Form.Item>
      </Col>
      <Col span={2}>
        <Form.Item
          wrapperCol={{
            offset: 0,
            span: 4,
          }}
          >
        <Button style={{ marginRight: "1em" }} onClick={props.showProfileCard} htmlType="submit">
        انصراف
        </Button>
      </Form.Item>
      </Col>
      </Row>
    </Form>
        </Card>

      </Col>
    </Row>
  );
};


export default  PasswordForm;