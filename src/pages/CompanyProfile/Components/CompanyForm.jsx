import React, { useState } from 'react';
import { Row,Col,Card, Form, Input, Button, Radio } from 'antd';


const CompanyForm = (props) => {



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
        <Card title="مشخصات شرکت">
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
        label="نام شرکت"
        name="Name"
        rules={[
          {
            message: 'Please input your Name !',
          },
        ]}
      >
        <Input disabled={editable} />
      </Form.Item>

      <Form.Item
        label="نام "
        name="Company name"
        rules={[
          {
            message: 'Please input your Company name!',
          },
        ]}
      >
        <Input disabled={editable}/>
      </Form.Item>
      <Form.Item
        label="کشور"
        name="Email"
        rules={[
          {
            message: 'Please input your Email!',
          },
        ]}
      >
        <Input disabled={editable}/>
      </Form.Item>
      <Form.Item
        label="شهر"
        name="Phone Number"
        rules={[
          {
            message: 'Please input your Phone Number!',
          },
        ]}
      >
        <Input disabled={editable}/>
      </Form.Item>

{editable ? 
      <Form.Item
      wrapperCol={{
          offset: 0,
          span: 4,
        }}
        >
        <Button onClick={EditableOn} type="primary" htmlType="submit">
          ویرایش
        </Button>
      </Form.Item>
    :
      <Form.Item
      wrapperCol={{
          offset: 0,
          span: 4,
        }}
        >
        <Button type="primary" htmlType="submit">
          تایید
        </Button>
        <Button style={{ marginRight: "1em" }} onClick={EditableOn} htmlType="submit">
          انصراف
        </Button>
      </Form.Item>
    }
    </Form> 
        </Card>

      </Col>
    </Row>
  );
};


export default  CompanyForm;