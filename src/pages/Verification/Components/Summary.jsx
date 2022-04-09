import React, {useEffect, useState} from 'react';
import { Tabs, Table,
    Typography,
    Tooltip, Divider, Alert,
    Rate,
    Button,
    Collapse, Row, Col, Card, Spin} from 'antd';


import '../Verification.scss';


const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const { Panel } = Collapse;
const ActionRequired = () => {
  return (
    <section>
      <Row className="centerMenu" gutter={[24, 0]}>
        <Col span={24} offset={0}>
        <Collapse defaultActiveKey={['1']} >
    <Panel header="This is panel header 1" key="1">
      <p>{text}</p>
    </Panel>
    <Panel header="This is panel header 2" key="2">
      <p>{text}</p>
    </Panel>
    <Panel header="This is panel header 3" key="3">
      <p>{text}</p>
    </Panel>
  </Collapse>
        </Col>
      </Row>
    </section>
  );
};

export default ActionRequired;
