import React, { useState } from 'react';
import { Table, Row,Col,Card, Form, Input, Button, Radio } from 'antd';


const CompanyForm = (props) => {


    const dataSource = [
        {
          key: '1',
          role: 'مدیر',
          email: 'samanthasang70@gmail.com',
          permissions: 'کامل',
          status: 'فعال',
          action: '',
        },
      ];
      
      const columns = [
        {
          title: 'نقش',
          dataIndex: 'role',
          key: 'role',
        },
        {
          title: 'ایمیل',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: 'دسترسی',
          dataIndex: 'permissions',
          key: 'permissions',
        },
        {
          title: 'وضعیت',
          dataIndex: 'status',
          key: 'status',
        },
        {
          title: 'فعالیت',
          dataIndex: 'action',
          key: 'action',
        },
      ];




    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
  return (
    <Row className='passForm' >
      <Col span={22} offset={1}>
        <Card title="کاربران شرکت">

  <Table dataSource={dataSource} columns={columns} />
        </Card>

      </Col>
    </Row>
  );
};


export default  CompanyForm;