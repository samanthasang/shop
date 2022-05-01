import React, { useState } from 'react';
import { Row, Col, Select, Card, Form, Input, Button, Upload, message, Typography } from 'antd';
import Paragraph from 'antd/lib/typography/Paragraph';
import { InboxOutlined } from '@ant-design/icons';



import data from '../../../test.json';

const CommoditiesForm = () => {
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
    <Row span={24} >
    <Col span={11}>
      <Form.Item
        label="نام محصول"
        name="Name"
        rules={[
          {
            message: 'Please input your Name !',
          },
        ]}
      >
        <Input />
      </Form.Item>

      </Col>

<Col span={11} offset={2}>
      <Form.Item
        label="SKU
        (اختیاری)"
        name="Company name"
        rules={[
          {
            message: 'Please input your Company name!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      </Col>
      </Row>
    <Row span={24} >
    <Col span={24}>
      <Form.Item
        label="توضیحات کامل محصول"
        name="Name"
        rules={[
          {
            message: 'Please input your Name !',
          },
        ]}
      >
        <Input />
      </Form.Item>

      </Col>
      </Row>
    <Row span={24} >
    <Col span={11}>
      <Form.Item
        label="استفاده نهایی از محصول"
        name="Email"
        rules={[
          {
            message: 'Please input your Email!',
          },
        ]}
      >
        <Input />
      </Form.Item>

</Col>

<Col span={11} offset={2}>
          <Form.Item
          label="کشور سازنده"
            name="country"
            rules={[
              {
                message: 'کشور را حتما باید وارد کنید',
              },
            ]}
          >
            <Select
              rules={[
                {
                  required: true,
                  message: 'country is required',
                },
              ]}
              showSearch
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              {data.OriginDestinationData.country.map(el => (
                <Option key={el.value} value={el.value}>
                  <img src={el.imgSrc} className="option_img" alt="" />
                  <span className="option_img-description">
                    {el.description}
                  </span>
                </Option>
              ))}
            </Select>
      </Form.Item>

      </Col>
      </Row>
    <Row span={24} >
    <Col span={11}>
      <Form.Item
        label="URL محصول
        (اختیاری)"
        name="Email"
        rules={[
          {
            message: 'Please input your Email!',
          },
        ]}
      >
        <Input />
      </Form.Item>

</Col>

<Col span={11} offset={2}>
      <Form.Item
        label="HS/HTS code
        (Optional)"
        name="Phone Number"
        rules={[
          {
            message: 'Please input your Phone Number!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      </Col>
      </Row>

      <Row>
        <Col span={24}>
          <Paragraph>اسناد و تصاویر پشتیبانی
(اختیاری)</Paragraph>
        </Col>
        <Col span={24}>
          <Paragraph>افزودن اسناد اضافی مانند مشخصات محصول، برگه های داده FDA، مجوزها، فرم های سازمان دولتی و عکس ها به کارگزار گمرکی شما کمک می کند تا محصول شما را با دقت بیشتری طبقه بندی کند.</Paragraph>
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

<Col span={11} offset={2}>
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


export default CommoditiesForm;
