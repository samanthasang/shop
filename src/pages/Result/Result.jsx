import React from 'react';
import {Link} from 'react-router-dom';
import {
  Row,
  Col,
  Button,
  Divider,
  Popover,
  Layout,
  Typography,
  Tooltip,
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
  return (
    <Row>
      <Col span={24}>
        <Row className="Result-Header">
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
              <Col span={20}>
                {/* <div className="Result-layout-header-right"> */}
                <Row className="Result-layout-header-right">
                  <Col span={6}>
                    <div className="Result-layout-header-right-item firstItem">
                      1
                    </div>
                  </Col>
                  <Col span={6}>2</Col>
                  <Col span={6}>3</Col>
                  <Col span={6}>
                    <div className="Result-layout-header-right-item lastItem">
                      4
                    </div>
                  </Col>
                </Row>
                {/* </div> */}
              </Col>
              <Col span={4} className="Result-layout-header-left">
                <Text strong={true}>3 تا از بهترین ها </Text>
                <Text>(18 تا در کل)</Text>
                <Tooltip title="این نتایج منعکس کننده تعادل بین هزینه و زمان حمل و نقل از هر ارائه دهنده در خط شما است.">
                  <ExclamationCircleOutlined />
                </Tooltip>
              </Col>
            </Row>
          </Header>
          <Layout>
            <Content>Content</Content>
            <Sider theme="light">Sider</Sider>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
      </Col>
    </Row>
  );
};
export default Result;
