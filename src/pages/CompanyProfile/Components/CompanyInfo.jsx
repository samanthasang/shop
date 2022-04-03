import React, { useState } from 'react';
import { Row,Col,Card, Form, Input, Button, Tabs, Radio } from 'antd';


import CompanyForm from './CompanyForm';
import CompanyTable from './CompanyTable';

const { TabPane } = Tabs;

const Companyinfo = (props) => {




    function callback(key) {
      console.log(key);

    }

    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
  return (
    <Row className='passForm' >
      <Col span={22} offset={1}>
        <Card >
        <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="اطلاعلات شرکت" key="1">   
            <CompanyForm />
            </TabPane>
            <TabPane tab="کاربران" key="2">
                <CompanyTable />
            </TabPane>
        </Tabs>
  
        </Card>
      </Col>
    </Row>
  );
};


export default  Companyinfo;