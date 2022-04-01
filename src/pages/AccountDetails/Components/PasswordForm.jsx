import React, { useState } from 'react';
import { Form, Input, Button, Radio } from 'antd';

const PasswordForm = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
  return (
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
        label="Current"
        name="Current"
        rules={[
          {
            required: true,
            message: 'Please input your Current !',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="New"
        name="New"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Re-type new"
        name="Re-type new"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
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
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 1,
          span: 4,
        }}
      >
        <Button  htmlType="submit">
          cancel
        </Button>
      </Form.Item>
    </Form>
  );
};


export default  PasswordForm;