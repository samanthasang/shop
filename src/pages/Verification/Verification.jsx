import React, {useState} from 'react';
import { Tabs, Row, Col, Card, Spin} from 'antd';

import VerificationTabs from './Components/VerificationTabs';

import './Verification.scss';


const { TabPane } = Tabs
const Verification = () => {
  return (
    <section>
     <Row className="centerMenu" gutter={[24, 2]}>
        <Col span={22} offset={1}>
            
            <Row className="centerMenu" gutter={[24, 2]}>
                <Col span={22} offset={1}>

                </Col>
            </Row>
        </Col>
        <Col span={22} offset={1}>
            
            <Row className="centerMenu" gutter={[24, 2]}>
                
        <Col span={22} offset={1}>
            <VerificationTabs />

        </Col>
            </Row>
        </Col>
      </Row>
    </section>
  );
};

export default Verification;
