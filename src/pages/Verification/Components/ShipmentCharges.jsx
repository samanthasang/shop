import React, {useEffect, useState} from 'react';
import { Tabs, Table, Dropdown,
    Typography,
    Tooltip, Divider, Alert,
    Rate,
    Button,
    Collapse, Row, Col, Card, Spin} from 'antd';


import '../Verification.scss';

import {DownOutlined, CalendarOutlined, EnvironmentOutlined} from '@ant-design/icons';
import ItemTransferComponent from '../../Result/Components/ItemTransferComponent';
import ShipIcon from '../../../assets/Icons/ShipIcon';
import TruckIcon from '../../../assets/Icons/TruckIcon';


import '../Verification.scss';
import { useHistory } from 'react-router-dom';

const dataSource = [
  {
    key: '1',
    date: '	Apr 9, 2022',
    chargetype: 'Shipment charges',
    description: 'New York, NY, USA > New York, NY, USA',
    serviceprovider: 'Primorus Worldwide',
    amount: '+ £489.00',
  },
  {
    key: '2',
    date: '	Apr 9, 2022',
    chargetype: 'Insurance',
    description: 'New York, NY, USA > New York, NY, USA',
    serviceprovider: 'xcover.com',
    amount: '+ £30.68',
  },
];
const columns = [
  { title: 'DATE', dataIndex: 'date', key: 'date' },
  { title: 'CHARGE-Type', dataIndex: 'chargetype', key: 'chargetype' },
  { title: 'DESCRIPTION', dataIndex: 'description', key: 'description' },
  { title: 'SERVICE PROVIDER', dataIndex: 'serviceprovider', key: 'serviceprovider' },
  { title: 'AMOUNT', dataIndex: 'amount', key: 'amount' },
  
];

const data = [
  {
    key: 1,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
  },
  {
    key: 2,
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
  },
  {
    key: 3,
    name: 'Not Expandable',
    age: 29,
    address: 'Jiangsu No. 1 Lake Park',
    description: 'This not expandable',
  },
  {
    key: 4,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
  },
];
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

function callback(key) {
  console.log(key);
}

const { Panel } = Collapse;
const ShipmentCharges = () => {
    let history = useHistory();
    const {Text, Title, Paragraph} = Typography;
    const {Panel} = Collapse;
  return (
    <section>
  <Row>
    <Col span={22} offset={1}>
      <Row className="expand-table-title">
        <Col span={24}>
          <Card title="Card title" bordered={false}>
          <Row>
            <Col span={8}>
                  <Card >
            <p>Card content</p>
            <p>Card content</p>
          </Card>
                </Col>
            <Col span={8}>
          <Card >
            <p>Card content</p>
            <p>Card content</p>
          </Card>
                </Col>
            <Col span={8}>
          <Card >
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
      </Row>

          </Card>
        </Col>
      </Row>
    </Col>
    <Col span={22} offset={1}>
      <Row className="expand-table-title">
        <Col span={24}>
          <Card title="Card title" bordered={false}>
          <Row>
            <Col span={24}>
            <Collapse defaultActiveKey={['1']} onChange={callback}>
              <Panel header="This is panel header 1" key="1">
                <Table dataSource={dataSource} columns={columns} pagination={false} />
              </Panel>
            </Collapse>
                </Col>
          </Row>

          </Card>
        </Col>
            <Col span={4} offset={20} bordered={false}>
          <Card bordered={false}>
            <p>subtotal: £519.68</p>
            <p>Platform fee: £15.59</p>
            <p>Total: £535.27</p>
          </Card>
        </Col>
      </Row>
    </Col>
    </Row>
    </section>
  );
};

export default ShipmentCharges;
