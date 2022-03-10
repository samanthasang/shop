import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {
  Row,
  Col,
  //   Button,
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
} from 'antd';
import OriginForm from '../Home/components/OriginForm';
import GoodsForm from '../Home/components/GoodsForm';
import LoadForm from '../Home/components/LoadForm';
import {ExclamationCircleOutlined, ArrowLeftOutlined} from '@ant-design/icons';
import '../Home/Home.scss';
import './Result.scss';

const Result = () => {
  const {Header, Footer, Sider, Content} = Layout;
  const {Paragraph, Text} = Typography;
  const {Panel} = Collapse;
  const {Option} = Select;
  const [priceRange, setPriceRange] = useState([12, 80]);
  const [dateRange, setDateRange] = useState([12, 80]);
  return (
    <ConfigProvider direction="rtl">
      <Row>
        <Col span={24}>
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
                          <h5 style={{color: 'red'}}>اصلی</h5>
                          <ExclamationCircleOutlined />
                        </div>
                        <span style={{color: 'red'}}></span>
                        <p style={{color: 'gray'}}>کارخانه/ انبار</p>
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
                        <span style={{color: 'red'}}></span>
                        <p style={{color: 'gray'}}>به کجا حمل می کنید؟</p>
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
                        <span style={{color: 'red'}}></span>
                        <p style={{color: 'gray'}}>چه چیزی ارسال می کنید؟</p>
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
                        <span style={{color: 'red'}}></span>
                        <p style={{color: 'gray'}}>از اجناس خود به ما بگویید</p>
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
                              range={{draggableTrack: true}}
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
                          {priceRange[0]}-{priceRange[1]}
                        </Text>
                        <Col span={24}>
                          <Slider
                            range={{draggableTrack: true}}
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
              <Content>Content</Content>
            </Layout>
            <Footer>footer</Footer>
          </Layout>
        </Col>
      </Row>
    </ConfigProvider>
  );
};
export default Result;
