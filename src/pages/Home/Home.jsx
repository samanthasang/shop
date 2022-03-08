import React from 'react';
import {Link} from 'react-router-dom';
// import ModalForm from './components/ModalForm';
// import MyForm from './components/MyForm';
import OriginForm from './components/OriginForm';
// import DestinationFrom from './components/DestinationFrom';
import LoadForm from './components/LoadForm';
import GoodsForm from './components/GoodsForm';
import {Row, Col, Button, Divider, Popover} from 'antd';
import {ExclamationCircleOutlined, ArrowLeftOutlined} from '@ant-design/icons';
import './Home.scss';
const Home = () => {
  return (
    <section>
      <div className="Home">
        <div className="Home-header">
          <h2>حمل و نقل که فقط کار می کند</h2>
          <h3>
            مقایسه، رزرو و مدیریت حمل و نقل خود در میان برترین ارائه دهندگان
            تدارکات در جهان، همه در یک پلت فرم
          </h3>
        </div>
        <div className="Home-center">
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
                    <Link to="/result">
                      <ArrowLeftOutlined />
                    </Link>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <div className="Home-center-descriptions">
            <div className="Home-center-descriptions-imagesPart">
              <Row>
                <Col
                  span={8}
                  className="Home-center-descriptions-imagesPart-Box"
                >
                  <div className="Home-center-descriptions-imagesPart-Box-img">
                    <img
                      src="https://www.freightos.com/wp-content/uploads/2021/03/11-03.png"
                      className="Home-center-descriptions-imagesPart-Box-img-ThisImg"
                      alt=""
                    />
                  </div>
                  <div className="Home-center-descriptions-imagesPart-Box-text">
                    <h3>حمل و نقلی که فقط کار می کند</h3>
                    <p>
                      همه چیزهایی که باید در مورد حمل و نقل بدانید، از کدهای HS
                      گرفته تا اینکوترمز، همه در یک مکان.
                    </p>
                    <Button className="ant-btn ant-btn-link" type="link">
                      <span>ادامه مطلب</span>
                    </Button>
                  </div>
                </Col>
                <Col
                  span={8}
                  className="Home-center-descriptions-imagesPart-Box"
                >
                  <div className="Home-center-descriptions-imagesPart-Box-img">
                    <img
                      src="https://www.freightos.com/wp-content/uploads/2021/03/11-02.png"
                      className="Home-center-descriptions-imagesPart-Box-img-ThisImg"
                      alt=""
                    />
                  </div>
                  <div className="Home-center-descriptions-imagesPart-Box-text">
                    <h3>حمل و نقلی که فقط کار می کند</h3>
                    <p>
                      همه چیزهایی که باید در مورد حمل و نقل بدانید، از کدهای HS
                      گرفته تا اینکوترمز، همه در یک مکان.
                    </p>
                    <Button className="ant-btn ant-btn-link" type="link">
                      <span>ادامه مطلب</span>
                    </Button>
                  </div>
                </Col>
                <Col
                  span={8}
                  className="Home-center-descriptions-imagesPart-Box"
                >
                  <div className="Home-center-descriptions-imagesPart-Box-img">
                    <img
                      src="https://www.freightos.com/wp-content/uploads/2021/03/11-01.png"
                      className="Home-center-descriptions-imagesPart-Box-img-ThisImg"
                      alt=""
                    />
                  </div>
                  <div className="Home-center-descriptions-imagesPart-Box-text">
                    <h3>حمل و نقلی که فقط کار می کند</h3>
                    <p>
                      همه چیزهایی که باید در مورد حمل و نقل بدانید، از کدهای HS
                      گرفته تا اینکوترمز، همه در یک مکان.
                    </p>
                    <Button className="ant-btn ant-btn-link" type="link">
                      <span>ادامه مطلب</span>
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;

// <MyForm visible={modalVisible} onCancel={onCancelModal} />

// <ModalForm
// visible={modalVisible}
//  onCancel={onCancelModal}
//   />
//   <Button type="primary" onClick={handleOpenModal}>
//   exmaple for Open Form in Modal
// </Button>

// <Menu>
// <Menu.Item key="0">
//   <a href="https://www.antgroup.com">1st menu item</a>
// </Menu.Item>
// <Menu.Item key="1">
//   <a href="https://www.aliyun.com">2nd menu item</a>
// </Menu.Item>
// <Menu.Divider />
// <Menu.Item key="3">3rd menu item</Menu.Item>
// </Menu>
// <Menu>
// <Menu.Item key="0">
// <a href="https://www.antgroup.com">1st menu item</a>
// </Menu.Item>
// <Menu.Item key="1">
// <a href="https://www.aliyun.com">2nd menu item</a>
// </Menu.Item>
// <Menu.Divider />
// <Menu.Item key="3">3rd menu item</Menu.Item>
// </Menu>
