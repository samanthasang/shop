import React, {useEffect, useState} from 'react';
import { Tabs, Table,
  Row,
  Col,
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
const VerificationTabs = () => {
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
          <div  className="card-container">
            <Tabs defaultActiveKey="1" type='' >
                <TabPane key="5">
                </TabPane>
                <TabPane key="0">
                </TabPane>
                <TabPane tab="اقدام لازم" key="1">
                    <ActionRequired />
                </TabPane>
                <TabPane tab="خلاصه" key="2">
                    <Summary />
                </TabPane>
                <TabPane tab="هزینه های حمل و نقل" key="3">
                    <ShipmentCharges />
                </TabPane>
                <TabPane tab="هزینه های حمل و نقل" key="4">
                    <Quote />
                </TabPane>
            </Tabs>
        </div>
        </Col>
      </Row>
    </section>
  );
};

export default VerificationTabs;
