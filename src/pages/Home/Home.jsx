import React, { useState } from 'react';
import ModalForm from './components/ModalForm';
import MyForm from './components/MyForm';
import OriginForm from "./components/OriginForm";
import DestinationFrom from "./components/DestinationFrom";
import LoadForm from "./components/LoadForm";
import GoodsForm from "./components/GoodsForm";
import { Menu, Dropdown, Row, Col, Button, Divider } from 'antd';
import {  ExclamationCircleOutlined, ArrowLeftOutlined } from "@ant-design/icons"
import './Home.scss';
const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const originform = (
    <OriginForm/>
  );
  const destinationform = (
    <DestinationFrom/>
  );
  const loadform = (
    <LoadForm/>
  );
  const goodsform = (
    <GoodsForm/>
  );
  const handleOpenModal = () => {
    setModalVisible(true);
  };
  const onCancelModal = () => {
    setModalVisible(false);
  };
  return (
    <div className="Home">
      <div className="Home-header">
        <h1>
          حمل و نقل که فقط کار می کند
            </h1>
        <h3>
          مقایسه، رزرو و مدیریت حمل و نقل خود در میان برترین ارائه دهندگان تدارکات در جهان، همه در یک پلت فرم
            </h3>
      </div>
      <div className="Home-center">
        <div className="Home-center-Forms">
          <div className="Home-center-Forms-details">
            <Row>
              <Col span={5} className="big-col">
                <Dropdown overlay={originform} trigger={['click']}>
                  <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    <span> <h5 style={{ color: "red" }}>اصلی</h5><span style={{ color: "red" }}> <ExclamationCircleOutlined /></span></span>
                    <p style={{ color: "gray" }}>کارخانه/ انبار</p>
                  </a>
                </Dropdown>
              </Col>
              <Divider type="vertical" style={{ margin: "1.4% 0", height: "4vh" }} />
              <Col span={5} className="big-col">
                <Dropdown overlay={destinationform} trigger={['click']}>
                  <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    <span> <h5>مقصد</h5></span>
                    <p style={{ color: "gray" }}>به کجا حمل می کنید؟</p></a>
                </Dropdown>
                </Col>
              <Divider type="vertical" style={{ margin: "1.4% 0", height: "4vh" }} />
              <Col span={5} className="big-col">
                <Dropdown overlay={loadform} trigger={['click']}>
                  <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    <span> <h5>بار</h5></span>
                    <p style={{ color: "gray" }}>چه چیزی ارسال می کنید؟</p>
                  </a>
                </Dropdown>
                </Col>
              <Divider type="vertical" style={{ margin: "1.4% 0", height: "4vh" }} />
                <Col span={5} className="big-col">
                <Dropdown overlay={goodsform} trigger={['click']}>
                  <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    <span> <h5>کالاها و خدمات</h5></span>
                    <p style={{ color: "gray" }}>از اجناس خود به ما بگویید</p>
                  </a>
                </Dropdown>
                </Col>
              <Divider type="vertical" style={{ margin: "1.4% 0", height: "4vh" }} />
              <Col span={2} >
                <div id="small-col-div">
                  <a>
                    <ArrowLeftOutlined  />
                  </a>
                </div>

              </Col>

            </Row>
          </div>
        </div>
        <div className="Home-center-descriptions">
          <div className="Home-center-descriptions-imagesPart">
            <Row>
              <Col span={8} className="Home-center-descriptions-imagesPart-Box">
                <div className="Home-center-descriptions-imagesPart-Box-img"><img src="https://www.freightos.com/wp-content/uploads/2021/03/11-03.png" className="Home-center-descriptions-imagesPart-Box-img-ThisImg" /></div>
                <div className="Home-center-descriptions-imagesPart-Box-text">
                  <h3>حمل و نقلی که فقط کار می کند</h3>
                  <p>
                    همه چیزهایی که باید در مورد حمل و نقل بدانید، از کدهای HS گرفته تا اینکوترمز، همه در یک مکان.
                  </p>
                  <Button type="link"><span>ادامه مطلب</span></Button>
                </div>
              </Col>
              <Col span={8} className="Home-center-descriptions-imagesPart-Box">
                <div className="Home-center-descriptions-imagesPart-Box-img">
                  <img src="https://www.freightos.com/wp-content/uploads/2021/03/11-02.png" className="Home-center-descriptions-imagesPart-Box-img-ThisImg" />
                </div>
                <div className="Home-center-descriptions-imagesPart-Box-text">
                  <h3>حمل و نقلی که فقط کار می کند</h3>
                  <p>
                    همه چیزهایی که باید در مورد حمل و نقل بدانید، از کدهای HS گرفته تا اینکوترمز، همه در یک مکان.
                  </p>
                  <Button type="link"><span>ادامه مطلب</span></Button>
                </div>
              </Col>
              <Col span={8} className="Home-center-descriptions-imagesPart-Box">
                <div className="Home-center-descriptions-imagesPart-Box-img"><img src="https://www.freightos.com/wp-content/uploads/2021/03/11-01.png" className="Home-center-descriptions-imagesPart-Box-img-ThisImg" /></div>
                <div className="Home-center-descriptions-imagesPart-Box-text">
                  <h3>حمل و نقلی که فقط کار می کند</h3>
                  <p>
                    همه چیزهایی که باید در مورد حمل و نقل بدانید، از کدهای HS گرفته تا اینکوترمز، همه در یک مکان.
                  </p>
                  <Button type="link"><span>ادامه مطلب</span></Button>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
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
