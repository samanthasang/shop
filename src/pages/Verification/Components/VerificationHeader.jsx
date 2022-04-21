import React, {useEffect, useState} from 'react';
import { Tabs, Table,
  Row,
  Col,
  Card,
  Steps,
  Layout,
  ConfigProvider,
  Slider,
  Checkbox,
  Space,
  Typography,
  Tooltip, 
  Divider, 
  Collapse
  } from 'antd';

import {CalendarOutlined, EnvironmentOutlined} from '@ant-design/icons';
import ItemTransferComponent from '../../Result/Components/ItemTransferComponent';
import ShipIcon from '../../../assets/Icons/ShipIcon';
import TruckIcon from '../../../assets/Icons/TruckIcon';



import ActionRequired from './ActionRequired';
import Summary from './Summary';
import ShipmentCharges from './ShipmentCharges';
import Quote from './Quote';

import '../Verification.scss';
import {columns} from './columns';
import data from '../../../test.json';
import { useHistory } from 'react-router-dom';

const { TabPane } = Tabs
const VerificationHeader = () => {
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
      <Row className="centerMenu" style={{height: 'fit-content'}}>
        <Col span={24} offset={0}>
            <Row >
                <Col span={8}>
                    <Card>
                        <Paragraph >اقدام</Paragraph>
                        <Paragraph >خلاصه</Paragraph>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card>
                        <Paragraph >اقدام</Paragraph>
                        <Paragraph >خلاصه</Paragraph>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card>
                        <Paragraph >اقدام</Paragraph>
                        <Paragraph >خلاصه</Paragraph>
                    </Card>
                </Col>
            </Row>
        </Col>
      </Row>
    </section>
  );
};

export default VerificationHeader;
