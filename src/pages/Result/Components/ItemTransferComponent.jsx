import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {
  Row,
  Col,
  Divider,
  Typography,
  Tooltip,
  Collapse,
  Rate,
  Button,
  Table,
  Alert,
} from 'antd';
import {CalendarOutlined, EnvironmentOutlined} from '@ant-design/icons';
import ShipIcon from '../../../assets/Icons/ShipIcon';
import TruckIcon from '../../../assets/Icons/TruckIcon';
import {columns} from './columns';
import '../Result.scss';
import data from '../../../test.json';
const ItemTransferComponent = () => {
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
    <>
      {itemsContent.map(item => (
        <Collapse
          // defaultActiveKey={['1']}
          key={item}
          className="result-layout-content-item"
        >
          <Panel
            className="result-layout-content-item-panel"
            header={
              <Row
                justify="space-between"
                className="result-layout-content-item-header"
              >
                <Col span={18}>
                  <Row className="result-layout-content-item-parent">
                    <Tooltip title="بهترین">
                      <span
                        // type="primary"
                        className="result-layout-content-item-option bestValue"
                      >
                        بهترین ارزش
                      </span>
                    </Tooltip>
                    <Tooltip title="ظرفیت محدود به این معنی است که تعداد بیشتری از محموله‌ها لغو می‌شوند. فروشندگان قهرمان FCL ما محموله های بیشتری را در راه خود دریافت می کنند.">
                      <span className="result-layout-content-item-option cancellation">
                        FCL Hero - لغو کم
                      </span>
                    </Tooltip>
                    <Tooltip title="این ارائه دهنده تدارکات بر اساس قابلیت اطمینان، پاسخگویی و تحویل به موقع امتیاز بالایی می دهد">
                      <span className="result-layout-content-item-option provider">
                        ارائه دهنده برتر لجستیک
                      </span>
                    </Tooltip>
                  </Row>
                  <Row
                    justify="middle"
                    className="result-layout-content-item-body first_body"
                  >
                    <Col>
                      {item.panelContent.icon === 'sea' && <ShipIcon />}
                    </Col>
                    <Col>
                      <Text className="result-layout-content-item-body-text">
                        {item.panelContent.way}
                      </Text>
                    </Col>
                    <Col>
                      <Divider type="vertical" />
                    </Col>
                    <Col>
                      <Row
                        justify="space-between"
                        className="result-layout-content-item-body-est"
                      >
                        <Text className="result-layout-content-item-body-text">
                          برآورد
                        </Text>
                        <Text className="result-layout-content-item-body-text">
                          {item.panelContent.est} روز
                        </Text>
                        <Text className="result-layout-content-item-body-text">
                          {item.panelContent.estDetail}
                        </Text>
                      </Row>
                    </Col>
                  </Row>
                  <Row
                    justify="middle"
                    className="result-layout-content-item-body"
                  >
                    <Col>
                      <EnvironmentOutlined />
                    </Col>
                    <Col>{' '}</Col>
                    <Col className="result-layout-content-item-body-city">
                      <Text className="result-layout-content-item-body-text">
                        1387574
                      </Text>
                      {' , '}
                      <Text className="result-layout-content-item-body-text">
                        بندانزلی{' '}
                      </Text>
                    </Col>
                    <Col>
                      <Divider className="result-layout-content-item-body-truck">
                        <TruckIcon />
                      </Divider>
                    </Col>
                    <Col>
                      <Row
                        justify="space-between"
                        align="middle"
                        style={{marginRight: '1.5rem'}}
                      >
                        <Col>
                          <Text className="result-layout-content-item-body-text">
                            CNZX
                          </Text>
                        </Col>
                        <Col>
                          <Divider className="result-layout-content-item-body-truck">
                            <ShipIcon />
                          </Divider>
                        </Col>
                        <Col>
                          <Text
                            className="result-layout-content-item-body-text"
                            style={{marginRight: '1.5rem'}}
                          >
                            ULAX
                          </Text>
                        </Col>
                        <Col>
                          <Divider className="result-layout-content-item-body-truck">
                            <TruckIcon />
                          </Divider>
                        </Col>
                        <Col>
                          <EnvironmentOutlined />
                        </Col>
                        <Col>{' '}</Col>
                        <Col>
                          <Text className="result-layout-content-item-body-text">
                            89101 , تهران
                          </Text>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row
                    justify="middle"
                    className="result-layout-content-item-body"
                  >
                    <Col>
                      <img
                        width="40px"
                        height="22px"
                        src="https://festatic.freightos.com/sellers/logos/agpzfnRyYWRlb3Mxch0LEhB1c2VyL0xlZ2FsRW50aXR5GICAiNS6pqIKDA/en.png"
                        alt=""
                      />
                    </Col>
                    <Col className="result-layout-content-item-body-city">
                      <Text className="result-layout-content-item-body-text worldWide">
                        {item.panelContent.company} در سراسر جهان
                      </Text>
                    </Col>
                    <Col>
                      <Row>
                        <Rate
                          defaultValue={item.panelContent.star}
                          className="result-layout-content-item-body-lastOption-rate"
                          onChange={e => console.log(e)}
                        />
                      </Row>
                    </Col>
                  </Row>
                </Col>

                <Col className="result-layout-content-item-choose" span={6}>
                  <Row justify="center">
                    <Col span="24">
                      <Row justify="center">
                        <Text className="result-layout-content-item-choose-cost">
                          {item.panelContent.costOrigin} تومان
                          <div className="result-layout-content-item-choose-cost-off"></div>
                        </Text>
                      </Row>
                    </Col>
                    <Col span="24">
                      <Row justify="center">
                        <Text>{item.panelContent.costOff} تومان</Text>
                      </Row>
                    </Col>
                  </Row>
                  <Row justify="center">
                    <Col span="24">
                      <Row justify="center">
                        <Button
                          type="primary"
                          className="result-layout-content-item-choose-button"
                          onClick={handleSelectItem}
                        >
                          انتخاب
                        </Button>
                      </Row>
                    </Col>
                    <Col span="24">
                      <Row
                        justify="center"
                        className="result-layout-content-item-choose-calendar"
                      >
                        <CalendarOutlined />
                        <Text className="result-layout-content-item-choose-calendar-text">
                          دروازه ورودی:{item.panelContent.dateExpries}
                        </Text>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            }
            key="1"
          >
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
            </Row>
          </Panel>
        </Collapse>
      ))}
    </>
  );
};
export default ItemTransferComponent;
