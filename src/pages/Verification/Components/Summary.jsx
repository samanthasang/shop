import React, {useEffect, useState} from 'react';
import { Tabs, Table,
    Typography,
    Tooltip, Divider, Alert,
    Rate,
    Button,
    Collapse, Row, Col, Card, Spin} from 'antd';


import '../Verification.scss';
const dataSource = [
  {
    key: '1',
    name: 'Load:',
    address: '1 Pallet(s), 1cm × 1cm × 1cm, 12 KG',
  },
  {
    key: '2',
    name: 'Total Weight:',
    address: '12 KG',
  },
  {
    key: '3',
    name: 'Total Volume:',
    address: '0 CBM',
  },
  {
    key: '4',
    name: 'Commodities:',
    address: '',
  },
  {
    key: '5',
    name: 'Value:',
    address: '$44',
  },
  {
    key: '6',
    name: 'Ready For Pickup:',
    address: 'Apr 24, 2022',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    dataIndex: 'address',
    key: 'address',
  },
];

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const { Panel } = Collapse;
const ActionRequired = () => {
  return (
    <section style={{height: "auto"}}>
      <Row >
        <Col span={22} offset={1}>
        <Collapse defaultActiveKey={['1']} >
    <Panel header="This is panel header 1" key="1">
      <Row>
        <Col>
          <Row>
            <Col span={11}>
              <Card>
              <Table dataSource={dataSource} columns={columns} pagination={false} />
              </Card>
            </Col>
            <Col span={11} offset={1}>
              <Card>
              <Table dataSource={dataSource} columns={columns} pagination={false} />
              </Card>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row>
            <Col span={7}>
              <Card>

              <Table dataSource={dataSource} columns={columns} pagination={false} />
              </Card>
            </Col>
            <Col span={7} offset={1}>
              <Card>

              <Table dataSource={dataSource} columns={columns} pagination={false} />
              </Card>
            </Col>
            <Col span={7} offset={1}>
              <Card>

              <Table dataSource={dataSource} columns={columns} pagination={false} />
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Panel>
    <Panel header="This is panel header 2" key="2" disabled>
      <p>{text}</p>
    </Panel>
    <Panel header="This is panel header 3" key="3" disabled>
      <p>{text}</p>
    </Panel>
  </Collapse>
        </Col>
      </Row>
    </section>
  );
};

export default ActionRequired;
