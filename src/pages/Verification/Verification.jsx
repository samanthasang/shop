import React, {useState} from 'react';
import { Tabs, Row, Col, Card, Spin} from 'antd';

import VerificationTabs from './Components/VerificationTabs';
import VerificationHeader from './Components/VerificationHeader';

import './Verification.scss';


const { TabPane } = Tabs
const Verification = () => {
  return (
    <section>
     <Row className="" >
        <Col span={24} >
            
            <Row className="" >
                <Col span={24} >
                  <VerificationHeader />
                </Col>
            </Row>
            
            <Row className="">
                
              <Col span={24} >
                  <VerificationTabs />

              </Col>
            </Row>
        </Col>
      </Row>
    </section>
  );
};

export default Verification;
