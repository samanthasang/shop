import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Row,
  Col,
  Steps,
  Divider,
  Popover,
  Layout,
  Typography,
  Tooltip,
  Collapse,
  ConfigProvider,
  Select,
  Slider,
  Checkbox,
  Space,
  Card,
  Button,
} from 'antd';
import OriginForm from '../Home/components/OriginForm';
import GoodsForm from '../Home/components/GoodsForm';
import LoadForm from '../Home/components/LoadForm';
import { ExclamationCircleOutlined, ArrowLeftOutlined, EnvironmentOutlined, LineOutlined } from '@ant-design/icons';
import ShipIcon from '../../assets/Icons/ShipIcon';
import '../Home/Home.scss';
import './Result.scss';

const Result = () => {
  const { Header, Footer, Sider, Content } = Layout;
  const { Text } = Typography;
  const { Panel } = Collapse;
  const { Option } = Select;
  const { Step } = Steps;
  const [priceRange, setPriceRange] = useState([12, 80]);
  const [dateRange, setDateRange] = useState([12, 80]);

  return (
    <ConfigProvider direction="rtl">
      <Row>
        <Col span={24}>
          <Space direction="vertical" style={{ width: '100%' }}>
            <Row justify="center" className="">
              <Col span={14}>
                <Steps size="small" current={1}>
                  <Step title="جستجو" />
                  <Step title="نتیجه" />
                  <Step title="رزرو" />
                  <Step title="تایید نهایی" />
                </Steps>
              </Col>
            </Row>
            <Row className="result-Header">
              <div className="Home-center-Forms">
                <div className="Home-center-Forms-details">
                  <Row className="centerMenu">
                    <Col span={5}>
                      <Popover
                        content={<OriginForm origin={true} />}
                        placement="bottomRight"
                        trigger={'click'}
                      >
                        <div className="centerMenu_origin">
                          <div className="centerMenu_origin_top">
                            <h5 style={{ color: 'red' }}>اصلی</h5>
                            <ExclamationCircleOutlined />
                          </div>
                          <span style={{ color: 'red' }}></span>
                          <p style={{ color: 'gray' }}>کارخانه/ انبار</p>
                        </div>
                      </Popover>
                    </Col>
                    <Divider type="vertical" />
                    <Col span={5}>
                      <Popover
                        content={<OriginForm origin={false} />}
                        placement="bottomRight"
                        trigger={'click'}
                      >
                        <div className="centerMenu_origin">
                          <div className="centerMenu_origin_top">
                            <h5>مقصد</h5>
                          </div>
                          <span style={{ color: 'red' }}></span>
                          <p style={{ color: 'gray' }}>به کجا حمل می کنید؟</p>
                        </div>
                      </Popover>
                    </Col>
                    <Divider type="vertical" />
                    <Col span={5}>
                      <Popover
                        content={<LoadForm />}
                        placement="bottomRight"
                        trigger={'click'}
                      >
                        <div className="centerMenu_origin">
                          <div className="centerMenu_origin_top">
                            <h5>بار</h5>
                          </div>
                          <span style={{ color: 'red' }}></span>
                          <p style={{ color: 'gray' }}>چه چیزی ارسال می کنید؟</p>
                        </div>
                      </Popover>
                    </Col>

                    <Divider type="vertical" />
                    <Col span={5}>
                      <Popover
                        content={<GoodsForm />}
                        placement="bottomLeft"
                        trigger={'click'}
                      >
                        <div className="centerMenu_origin">
                          <div className="centerMenu_origin_top">
                            <h5>کالاها و خدمات</h5>
                          </div>
                          <span style={{ color: 'red' }}></span>
                          <p style={{ color: 'gray' }}>
                            از اجناس خود به ما بگویید
                          </p>
                        </div>
                      </Popover>
                    </Col>
                    <Divider type="vertical" />
                    <Col span={2}>
                      <div id="small-col-div">
                        <Link to="/home">
                          <ArrowLeftOutlined />
                        </Link>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Row>
          </Space>
        </Col>
        <Col span={24}>
          <Layout>
            <Header>
              <Row>
                <Col span={4} className="result-layout-header-left">
                  <Text strong={true}>3 تا از بهترین ها </Text>
                  <Text>(18 تا در کل)</Text>
                  <Tooltip title="این نتایج منعکس کننده تعادل بین هزینه و زمان حمل و نقل از هر ارائه دهنده در خط شما است.">
                    <ExclamationCircleOutlined />
                  </Tooltip>
                </Col>
                <Col span={20}>
                  {/* <div className="result-layout-header-right"> */}
                  <Row className="result-layout-header-right">
                    <Col span={6}>
                      <div className="result-layout-header-right-item firstItem">
                        <Text>سبزترین · </Text>
                        <Text> 25-30 روز · </Text> <Text> 37912 دلار </Text>{' '}
                      </div>
                    </Col>
                    <Col span={6}>
                      <div className="result-layout-header-right-item">
                        <Text>ارزان ترین · 25-30 روز · 37912 دلار</Text>
                      </div>
                    </Col>
                    <Col span={6}>
                      <div className="result-layout-header-right-item">
                        <Text>سریعترین · 22-27 روز · 38062 دلار</Text>
                      </div>
                    </Col>
                    <Col span={6}>
                      <div className="result-layout-header-right-item lastItem active">
                        <Text>بهترین ارزش · 22-27 روز · 38062 دلار</Text>
                      </div>
                    </Col>
                  </Row>
                  {/* </div> */}
                </Col>
              </Row>
            </Header>
            <Layout>
              <Sider width={240} className="result-layout-sidebarFilter">
                <Row
                  justify="center"
                  align="middle"
                  className="result-layout-sidebarFilter-title"
                >
                  <Text>فیلتر</Text>
                </Row>
                <Divider className="result-layout-sidebarFilter-divider"></Divider>
                <Row>
                  <Collapse
                    defaultActiveKey={['1']}
                    className="result-layout-sidebarFilter-panels"
                  >
                    <Panel header="قیمت" key="1">
                      <Row justify="center">
                        <Text>
                          {priceRange[0]}-{priceRange[1]}
                        </Text>
                        <ConfigProvider direction="ltr">
                          <Col span={24}>
                            <Slider
                              range={{ draggableTrack: true }}
                              defaultValue={priceRange}
                              onChange={e => setPriceRange(e)}
                            />
                          </Col>
                        </ConfigProvider>
                      </Row>
                    </Panel>
                    <Panel header="تاریخ انقضا" key="2">
                      <Row justify="center">
                        <Text>
                          {dateRange[0]}-{dateRange[1]}
                        </Text>
                        <Col span={24}>
                          <Slider
                            range={{ draggableTrack: true }}
                            defaultValue={[20, 50]}
                            onChange={e => setDateRange(e)}
                          />
                        </Col>
                      </Row>
                    </Panel>
                    <Panel header="حالت ها" key="3">
                      <Checkbox
                      // checked={state}
                      // disabled={state}
                      // onChange={e => console.log(e)}
                      >
                        FCL
                      </Checkbox>
                    </Panel>
                    <Panel header="فروشنده" key="4">
                      <Checkbox
                      // checked={state}
                      // disabled={state}
                      // onChange={e => console.log(e)}
                      >
                        حق حمل و نقل
                      </Checkbox>
                      <Checkbox
                      // checked={state}
                      // disabled={state}
                      // onChange={e => console.log(e)}
                      >
                        حمل و نقل بین المللی Seabay
                      </Checkbox>
                      <Checkbox
                      // checked={state}
                      // disabled={state}
                      // onChange={e => console.log(e)}
                      >
                        Sinotrans - هانگژو
                      </Checkbox>
                    </Panel>
                    <Panel header="بندر مبدا" key="5">
                      <Checkbox
                      // checked={state}
                      // disabled={state}
                      // onChange={e => console.log(e)}
                      >
                        CNSZX
                      </Checkbox>
                    </Panel>
                    <Panel header="بندر مقصد" key="6">
                      <Checkbox
                      // checked={state}
                      // disabled={state}
                      // onChange={e => console.log(e)}
                      >
                        USLAX
                      </Checkbox>
                      <Checkbox
                      // checked={state}
                      // disabled={state}
                      // onChange={e => console.log(e)}
                      >
                        USLGB
                      </Checkbox>
                    </Panel>
                  </Collapse>
                </Row>
              </Sider>
              <Content>
                <Row>
                  <Collapse
                    defaultActiveKey={['1']}
                    className="result-layout-content-item"
                  >
                    <Panel
                      className="result-layout-content-item-panel"
                      header={
                        <Card
                          className="result-layout-content-item-panel-header"
                        // title="Default size card"
                        // extra={<a href="#">More</a>}
                        >
                          <Row justify="space-between">
                            <Col span={18}>
                              <Row>
                                <Tooltip title="">
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
                                justify="start"
                                className="result-layout-content-item-body"
                              >
                                <Col>
                                  <ShipIcon />
                                </Col>
                                <Col>
                                  <Text>دریا</Text>
                                </Col>
                                <Col>
                                  <Divider type="vertical" />
                                </Col>
                                <Col span={7}>
                                  <Row
                                    justify="space-between"
                                    className="result-layout-content-item-body-est"
                                  >
                                    <Text>برآورد</Text>
                                    <Text>22-27 روز</Text>
                                    <Text>(12-18 روز بندر به بندر)</Text>
                                  </Row>
                                </Col>
                              </Row>
                            </Col>
                            <Col
                              span={5}
                              className="result-layout-content-item-choose"
                            >
                              <Row justify="center">
                                <Text>40,315 تومان</Text>
                              </Row>
                              <Row justify="center">
                                <Text>40,315 تومان</Text>
                              </Row>
                              <Row justify="center">
                                <Button type="primary">انتخاب</Button>
                              </Row>
                            </Col>
                          </Row>
                        </Card>
                      }
                      key="1"
                    ></Panel>
                  </Collapse>
                </Row>
                <Row>
                  <Collapse
                    defaultActiveKey={['1']}
                    className="result-layout-content-item"
                  >
                    <Panel
                      className="result-layout-content-item-panel"
                      header={
                        <Card
                          className="result-layout-content-item-panel-header"
                        // title="Default size card"
                        // extra={<a href="#">More</a>}
                        >
                          <Row justify="space-between">
                            <Col span={18}>
                              <Row
                                justify="start"
                                className="result-layout-content-item-body"
                              >
                                <Col>
                                  <ShipIcon />
                                </Col>
                                <Col>
                                  <Text>دریا</Text>
                                </Col>
                                <Col>
                                  <Divider type="vertical" />
                                </Col>
                                <Col span={7}>
                                  <Row
                                    justify="space-between"
                                    className="result-layout-content-item-body-est"
                                  >
                                    <Text>برآورد</Text>
                                    <Text>22-27 روز</Text>
                                    <Text>(12-18 روز بندر به بندر)</Text>
                                  </Row>
                                </Col>
                              </Row>
                              <Row
                                justify="start"
                                className="result-layout-content-item-body"
                              >
                               <Col>
                               <EnvironmentOutlined />
                               </Col>
                               <Col span={7}>
                                <Row justify="space-between">
                                <Text>
                                </Text>
                                  <Text>18000$, شنژن</Text>
                                  <Text>
                                    <LineOutlined />
                                  </Text>
                                

                                </Row>
                                </Col>
                              </Row>
                            </Col>
                            <Col
                              span={5}
                              className="result-layout-content-item-choose"
                            >
                              <Row justify="center">
                                <Text>40,315 تومان</Text>
                              </Row>
                              <Row justify="center">
                                <Text>40,315 تومان</Text>
                              </Row>
                              <Row justify="center">
                                <Button type="primary">انتخاب</Button>
                              </Row>
                            </Col>
                          </Row>
                        </Card>
                      }
                      key="1"
                    ></Panel>
                  </Collapse>
                </Row>
              </Content>
            </Layout>
            <Footer>footer</Footer>
          </Layout>
        </Col>
      </Row>
    </ConfigProvider>
  );
};
export default Result;