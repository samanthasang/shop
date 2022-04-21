import React, {useEffect, useState} from 'react';
import { Tabs, Table,
    Typography,
    Tooltip, Divider, Alert,
    Rate,
    Button,
    Collapse, Row, Col, Card, Spin} from 'antd';


import '../Verification.scss';

import {CalendarOutlined, EnvironmentOutlined} from '@ant-design/icons';
import ItemTransferComponent from '../../Result/Components/ItemTransferComponent';
import ShipIcon from '../../../assets/Icons/ShipIcon';
import TruckIcon from '../../../assets/Icons/TruckIcon';


import '../Verification.scss';
import {columns} from './columns';
import data from '../../../test.json';
import { useHistory } from 'react-router-dom';


const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const { Panel } = Collapse;
const Quote = () => {
    let history = useHistory();
    const {Text, Title, Paragraph} = Typography;
    const {Panel} = Collapse;
    const [tableColumn, setTableColumn] = useState(columns);
    const [tableData, setTableData] = useState(data.itemTransfer.tableData);
    const [itemsContent, setItemsContent] = useState(data.itemTransfer.items);
    useEffect(() => {
      setTableColumn(columns);
      setTableData(data.itemTransfer.tableData);
      setItemsContent(data.itemTransfer.items);
    }, []);
    const handleSelectItem = () => {
      history.push('/booking');
    };
  return (
    <section>
    <Row>
      <Col span={22} offset={1}>
{itemsContent.map(item => (<>
  <Row>
    <Col span={24}>
      <Row className="expand-table-title">
        <Title>هزینه های مبدا</Title>
      </Row>
    </Col>

    <Col span={24}>
      <Table
        pagination={false}
        columns={columns}
        dataSource={tableData}
        className="expand-table"
      />
      <Row className="expand-table-footer">
        <Text>
          جمع فرعی: $ {item.expandContent.originCosts} دلار آمریکا
        </Text>
      </Row>
    </Col>
  </Row>
  <Divider />
  <Row>
    <Col span={24}>
      <Row className="expand-table-title">
        <img
          className="expand-table-img"
          src="https://festatic.freightos.com/microfrontsc/quote-view/1d7d9a7c9bcffb9bb3c598ae65d3295ec89dcefe/assets/images/modes/express.svg"
          alt=""
        />
        <Title>26300, Xilingol League 54701, Eau Claire </Title>
      </Row>
    </Col>

    <Col span={24}>
      <Table
        pagination={false}
        columns={columns}
        dataSource={tableData}
        className="expand-table"
      />
      <Row className="expand-table-footer">
        <Text>
          جمع فرعی: $ {item.expandContent.sceondCosts} دلار آمریکا
        </Text>
      </Row>
    </Col>
  </Row>
  <Divider />
  <Row>
    <Col span={24}>
      <Row className="expand-table-title">
        <Title>بیمه</Title>
      </Row>
    </Col>

    <Col span={24}>
      <Table
        pagination={false}
        columns={tableColumn}
        dataSource={tableData}
        className="expand-table"
      />
      <Row className="expand-table-footer">
        <Text>
          جمع فرعی: $ {item.expandContent.insurance} دلار آمریکا
        </Text>
      </Row>
    </Col>
  </Row>
  <Row>
    <Alert
      message={`جمع کل: ${item.expandContent.totalCosts} دلار (USD)`}
      type="info"
      className="expand-footer-alert"
    />
  </Row>
  <Row className="expand-footer-comment">
    <Col span={24}>
      <Text>{item.expandContent.titleAlert}</Text>
    </Col>
    <Divider />
    <Col span={24}>
      <Row className="expand-footer-comment-paragraph">
        <Text className="expand-footer-comment-paragraph-text">
          حامل:{item.expandContent.carrier}، خدمات:
          {item.expandContent.service}
        </Text>
      </Row>
      <Row className="expand-footer-comment-paragraph">
        <Paragraph>{item.expandContent.notice} </Paragraph>
      </Row>
    </Col>
  </Row></>
))}</Col>
    </Row>
    </section>
  );
};

export default Quote;
