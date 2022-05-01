import React, { useState } from 'react';
import { Row,Col,Card, Form, Input, Button, Radio } from 'antd';


const BookingPromoForm = (props) => {



    const [ editable, setEditable ] = useState(true);

    const EditableOn = () => {
        setEditable(!editable);
    };


    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
  return (
    <Row className='passForm' >
      <Col span={22} offset={1}>
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
      <Form.Item style={{ display: "inline-block", float: "right" }}
          wrapperCol={{
              offset: 0,
              span: 24,
            }}
        name="Name"
        rules={[
          {
            message: 'Please input your Name !',
          },
        ]}
      >
        <Input  />
      </Form.Item>
      <Form.Item style={{ display: "inline-block", float: "right" }}
          wrapperCol={{
              offset: 24,
              span: 4,
            }}
        name="Name"
        rules={[
          {
            message: 'Please input your Name !',
          },
        ]}
      >
        <Button type="primary" htmlType="submit">
          تایید
        </Button>
      </Form.Item>

    </Form> 

      </Col>
    </Row>
  );
};


export default  BookingPromoForm;