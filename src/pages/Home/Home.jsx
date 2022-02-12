import React, { useState } from 'react';
import ModalForm from './components/ModalForm';
import MyForm from './components/MyForm';
import { Menu, Dropdown, Row, Col, Button } from 'antd';
import {DownOutlined} from "@ant-design/icons"
import './Home.scss';

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const FormMenu = (
    <Menu>
      <Menu.Item key="0">
        <a href="https://www.antgroup.com">1st menu item</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="https://www.aliyun.com">2nd menu item</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
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
          FREIGHT THAT JUST WORKS
            </h1>
        <h3>
          Compare, book, and manage your freight across the world’s top logistics providers, all on one platform
            </h3>
      </div>
      <div className="Home-center">
        <div className="Home-center-Forms">
          <div className="Home-center-Forms-details">
            <Row>
              <Col span={7}>
                <Dropdown overlay={FormMenu} trigger={['click']}>
                  <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    Click me <DownOutlined />
                  </a>
                </Dropdown>
              </Col>
              <span>|</span>
              <Col span={7}>
                <Dropdown overlay={FormMenu} trigger={['click']}>
                  <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    Click me <DownOutlined />
                  </a>
                </Dropdown></Col>
              <span>|</span>
              <Col span={7}>
                <Dropdown overlay={FormMenu} trigger={['click']}>
                  <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    Click me <DownOutlined />
                  </a>
                </Dropdown></Col>
              <span>|</span>
              <Col span={3}></Col>

            </Row>
          </div>
        </div>
        <div className="Home-center-descriptions">
          <div className="Home-center-descriptions-imagesPart">
            <Row>
              <Col span={8}>
                <img src="https://www.freightos.com/wp-content/uploads/2021/03/11-03.png" />
                <h3>FREIGHT RESOURCES</h3>
                <p>
                  Everything you need to know about freight, from HS codes to Incoterms, all in one place.
              </p>
                <Button type="link"><span>Read More</span></Button>
              </Col>
              <Col span={8}>
                <img src="https://www.freightos.com/wp-content/uploads/2021/03/11-02.png" />
                <h3>FREIGHT RESOURCES</h3>
                <p>
                  Everything you need to know about freight, from HS codes to Incoterms, all in one place.
              </p>
                <Button type="link"><span>Read More</span></Button>
              </Col>
              <Col span={8}>
                <img src="https://www.freightos.com/wp-content/uploads/2021/03/11-01.png" />
                <h3>FREIGHT RESOURCES</h3>
                <p>
                  Everything you need to know about freight, from HS codes to Incoterms, all in one place.
              </p>
                <Button type="link"><span>Read More</span></Button>
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
