import React, { useState } from 'react';
import { Row,Col,Card, Form, Input, Button, Radio } from 'antd';

const ProfileForm = (props) => {
    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
  return (
    <Row  >
      <Col span={22} offset={1}>
        <Card title="ویرایش پروفایل">
    <Form
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
      <Form.Item
        label="نام"
        name="Name"
        rules={[
          {
            message: 'Please input your Name !',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="نام شرکت"
        name="Company name"
        rules={[
          {
            message: 'Please input your Company name!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="ایمیل"
        name="Email"
        rules={[
          {
            message: 'Please input your Email!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="شماره تماس"
        name="Phone Number"
        rules={[
          {
            message: 'Please input your Phone Number!',
          },
        ]}
      >
        <Input />
      </Form.Item>


      <Form.Item
        wrapperCol={{
          offset: 0,
          span: 4,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button style={{ marginRight: "1em" }} onClick={props.showProfileCard} htmlType="submit">
          cancel
        </Button>
      </Form.Item>
    </Form>
        </Card>

      </Col>
    </Row>
  );
};


export default  ProfileForm;