import React, { useState } from 'react';
import { Row, Col, Select, Card, Form, Input, Button, Upload, message, Typography } from 'antd';
import {GoogleOutlined, UserOutlined, LockOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';
import Paragraph from 'antd/lib/typography/Paragraph';
import { InboxOutlined } from '@ant-design/icons';



import data from '../../../test.json';
const UploadDoc = ({signUp}) => {
  const onFinish = (values) => {
      console.log('Success:', values);
    };
  
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };


    const {Text} = Typography;
    const {Option} = Select;
    const { Dragger } = Upload;

    const props = {
      name: 'file',
      multiple: true,
      action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (status === 'done') {
          message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
      onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
      },
    };


  return (
    <Form
      name="basic"
      labelCol={{
        span: 24,
      }}
      colon={false}
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
      <Row>
        <Col span={24}>
          <Paragraph>فاکتور تجاری</Paragraph>
        </Col>
        <Col span={24}>
          <Paragraph>فاکتور تجاری شامل همان اطلاعات موجود در یک فاکتور استاندارد، علاوه بر اطلاعات مربوط به حمل و نقل مورد نیاز گمرک برای ترخیص کالا از گمرک است</Paragraph>
        </Col>
      </Row>
    <Row span={24} >
    <Col span={11}>
      <Form.Item
        name="Email"
        rules={[
          {
            message: 'Please input your Email!',
          },
        ]}
      >
        <Dragger {...props}>
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
    <p className="ant-upload-text">تصویر محصول خود را آپلود کنید</p>
    <p className="ant-upload-hint">
    فایل نباید بیش از 7 مگابایت باشد
    </p>
  </Dragger >
      </Form.Item>

</Col>

      <Row>
        <Col span={24}>
          <Paragraph>لیست بسته بندی</Paragraph>
        </Col>
        <Col span={24}>
          <Paragraph>یک لیست بسته بندی اطلاعاتی در مورد حمل و نقل شما در اختیار شما قرار می دهد و پس از دریافت کالا به امضای شما نیاز دارد.</Paragraph>
        </Col>
      </Row>
<Col span={11} >
      <Form.Item
        name="Phone Number"
        rules={[
          {
            message: 'Please input your Phone Number!',
          },
        ]}
      >
        <Dragger {...props}>
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
    <p className="ant-upload-text">اسناد خود را آپلود کنید</p>
    <p className="ant-upload-hint">
    فایل نباید بیش از 7 مگابایت باشد
    </p>
  </Dragger> 
      </Form.Item>

      </Col>
      </Row>

      <Row >
      <Col span={2}>

      <Form.Item
        wrapperCol={{
          offset: 0,
          span: 4,
        }}
      >
        <Button type="primary" htmlType="submit">
          ذخیره 
        </Button>
      </Form.Item>
      </Col>
      </Row>
    </Form>
  );
};

export default UploadDoc;
