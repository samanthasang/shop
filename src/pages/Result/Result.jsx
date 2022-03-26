import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {
  Row,
  Col,
  Steps,
  Divider,
  Button,
  Layout,
  Typography,
  Tooltip,
  Collapse,
  ConfigProvider,
  Slider,
  Checkbox,
  Space,
} from 'antd';
import {ExclamationCircleOutlined} from '@ant-design/icons';
import '../Home/Home.scss';
import './Result.scss';
import ItemTransferComponent from './Components/ItemTransferComponent';
import PencilIcon from '../../assets/Icons/PencilIcon';
import EditOrder from './Components/EditOrder';
import data from '../../test.json';

const Result = () => {
  const {all} = useSelector(state => state);
  console.log(all);
  const {Header, Sider, Content} = Layout;
  const {Text} = Typography;
  const {Panel} = Collapse;
  const {Step} = Steps;
  const [priceRange, setPriceRange] = useState([12, 80]);
  const [dateRange, setDateRange] = useState([12, 80]);
  const [stateFilter, setStateFilter] = useState(1);
  const [visibleEditOrderModal, setVisibleEditOrderModal] = useState(false);
  const [tabFilter, setTabFilter] = useState(
    data.itemTransfer.contentFilter.tabs,
  );
  const handleShowSortItems = e => {
    const itemCaseID = e.currentTarget.id;
    if (itemCaseID === 'greenest') {
      setStateFilter(1);
      return;
    }
    if (itemCaseID === 'chipest') {
      setStateFilter(2);
      return;
    }
    if (itemCaseID === 'quickest') {
      setStateFilter(3);
      return;
    }
    if (itemCaseID === 'best') {
      setStateFilter(4);
      return;
    }
  };
  const handleShowModal = () => {
    setVisibleEditOrderModal(true);
  };

  const handleCancelEditOrderModal = () => {
    setVisibleEditOrderModal(false);
  };

  return (
    <Row justify={'center'}>
      <Col span={24}>
        <Space direction="vertical" style={{width: '100%'}}>
          <Row justify="center">
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
                    <Row
                      // content={<OriginForm origin={true} />}
                      // placement="bottomRight"
                      // trigger={'click'}
                      onClick={handleShowModal}
                    >
                      <div className="centerMenu_origin">
                        <div className="centerMenu_origin_top">
                          <h5 style={{color: 'red'}}>اصلی</h5>
                          <ExclamationCircleOutlined />
                        </div>
                        <span style={{color: 'red'}}></span>
                        <p style={{color: 'gray'}}>کارخانه/ انبار</p>
                      </div>
                    </Row>
                  </Col>
                  <Divider type="vertical" />
                  <Col span={5}>
                    <Row
                      // content={<OriginForm origin={false} />}
                      // placement="bottomRight"
                      // trigger={'click'}
                      onClick={handleShowModal}
                    >
                      <div className="centerMenu_origin">
                        <div className="centerMenu_origin_top">
                          <h5>مقصد</h5>
                        </div>
                        <span style={{color: 'red'}}></span>
                        <p style={{color: 'gray'}}>به کجا حمل می کنید؟</p>
                      </div>
                    </Row>
                  </Col>
                  <Divider type="vertical" />
                  <Col span={5}>
                    <Row
                      // content={<LoadForm />}
                      // placement="bottomRight"
                      // trigger={'click'}
                      onClick={handleShowModal}
                    >
                      <div className="centerMenu_origin">
                        <div className="centerMenu_origin_top">
                          <h5>بار</h5>
                        </div>
                        <span style={{color: 'red'}}></span>
                        <p style={{color: 'gray'}}>چه چیزی ارسال می کنید؟</p>
                      </div>
                    </Row>
                  </Col>

                  <Divider type="vertical" />
                  <Col span={5}>
                    <Row
                      // content={<GoodsForm />}
                      // placement="bottomLeft"
                      // trigger={'click'}
                      onClick={handleShowModal}
                    >
                      <div className="centerMenu_origin">
                        <div className="centerMenu_origin_top">
                          <h5>کالاها و خدمات</h5>
                        </div>
                        <span style={{color: 'red'}}></span>
                        <p style={{color: 'gray'}}>از اجناس خود به ما بگویید</p>
                      </div>
                    </Row>
                  </Col>
                  <Divider type="vertical" />
                  <Col span={2}>
                    <div id="small-col-div">
                      <Button
                        className="editMenuTop"
                        type="primary"
                        icon={<PencilIcon />}
                        onClick={handleShowModal}
                      />
                    </div>
                  </Col>
                </Row>
                {/* <Row className="centerMenu">
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
                          <p style={{color: 'gray'}}>
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
                  </Row> */}
              </div>
            </div>
          </Row>
        </Space>
      </Col>
      <Col span={21}>
        <Layout>
          <Header>
            <Row>
              <Col span={5} className="result-layout-header-left">
                <Row align="middle" justify="center">
                  <Space>
                    <Text strong={true}>3 تا از بهترین ها </Text>
                    <Text>(18 تا در کل)</Text>
                  </Space>
                  <Tooltip title="این نتایج منعکس کننده تعادل بین هزینه و زمان حمل و نقل از هر ارائه دهنده در خط شما است.">
                    <ExclamationCircleOutlined />
                  </Tooltip>
                </Row>
              </Col>
              <Col span={19}>
                <Row className="result-layout-header-right" justify={'center'}>
                  <Col span={6}>
                    <div
                      id="greenest"
                      className={`result-layout-header-right-item firstItem ${
                        stateFilter === 1 && 'active'
                      }`}
                      onClick={handleShowSortItems}
                    >
                      <Text>پاک ترین </Text>
                      <Text> {tabFilter.greenest.day}روز </Text>
                      <Text> {tabFilter.greenest.cost} دلار </Text>
                    </div>
                  </Col>
                  <Col span={6}>
                    <div
                      id="chipest"
                      className={`result-layout-header-right-item  ${
                        stateFilter === 2 && 'active'
                      }`}
                      onClick={handleShowSortItems}
                    >
                      <Text>ارزان ترین </Text>
                      <Text> {tabFilter.chipest.day}روز · </Text>
                      <Text> {tabFilter.chipest.cost} دلار </Text>
                    </div>
                  </Col>
                  <Col span={6}>
                    <div
                      id="quickest"
                      className={`result-layout-header-right-item  ${
                        stateFilter === 3 && 'active'
                      }`}
                      onClick={handleShowSortItems}
                    >
                      <Text>سریعترین</Text>
                      <Text> {tabFilter.quickest.day}روز · </Text>
                      <Text> {tabFilter.quickest.cost} دلار </Text>
                    </div>
                  </Col>
                  <Col span={6}>
                    <div
                      id="best"
                      className={`result-layout-header-right-item lastItem ${
                        stateFilter === 4 && 'active'
                      }`}
                      onClick={handleShowSortItems}
                    >
                      <Text>بهترین</Text>
                      <Text> {tabFilter.best.day}روز · </Text>
                      <Text> {tabFilter.best.cost} دلار </Text>
                    </div>
                  </Col>
                </Row>
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
                        {dateRange[0]}-{dateRange[1]}
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
            <Content>
              <Row>
                <ItemTransferComponent />
              </Row>
            </Content>
          </Layout>
          {/* <Footer>footer</Footer> */}
        </Layout>
      </Col>
      <EditOrder
        visible={visibleEditOrderModal}
        onCancel={handleCancelEditOrderModal}
      />
    </Row>
  );
};
export default Result;
