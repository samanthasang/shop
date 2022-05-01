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
  Card,
  Tooltip, 
  Divider, 
  Button,
  Collapse
  } from 'antd';


import PaymentForm from './PaymentForm';
import PickUpForm from './PickUpForm';
import DeliveryForm from './DeliveryForm';
import CommoditiesForm from './CommoditiesForm';
import UploadDoc from './UploadDoc';

import TruckIcon from '../../../assets/Icons/TruckIcon';

import '../Verification.scss';
import DoorToDoor from '../../../assets/Icons/DoorToDoor';


const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const { Panel } = Collapse;
const ActionRequired = () => {

    const [Payment, setPaymentForm] = useState(true);
    const [PickUp, setPickUpForm] = useState(false);
    const [Delivery, setDeliveryForm] = useState(false);
    const [Commodities, setCommoditiesForm] = useState(false);
    const [UploadD, setUploadDoc] = useState(false);


    const handlePayment =  () => {
      setPaymentForm(true);
      setPickUpForm(false);
      setDeliveryForm(false);
      setCommoditiesForm(false);
      setUploadDoc(false);
    };
    const handlePickUp =  () => {
      setPaymentForm(false);
      setPickUpForm(true);
      setDeliveryForm(false);
      setCommoditiesForm(false);
      setUploadDoc(false);
    };
    const handleDelivery =  () => {
      setPaymentForm(false);
      setPickUpForm(false);
      setDeliveryForm(true);
      setCommoditiesForm(false);
      setUploadDoc(false);
    };
    const handleCommodities =  () => {
      setPaymentForm(false);
      setPickUpForm(false);
      setDeliveryForm(false);
      setCommoditiesForm(true);
      setUploadDoc(false);
    };
    const handleUploadDoc =  () => {
      setPaymentForm(false);
      setPickUpForm(false);
      setDeliveryForm(false);
      setCommoditiesForm(false);
      setUploadDoc(true);
    };
    const {Text} = Typography;
    const {Header, Sider, Content} = Layout;
    const [priceRange, setPriceRange] = useState([12, 80]);
    const [dateRange, setDateRange] = useState([12, 80]);

  return (
    <section style={{height: "auto"}}>
      <Row className=""  >
        <Col span={22} offset={1}>
          <Card>
            <Row>

            <Col span={24} offset={0}>
                <Card>
                  <TruckIcon />
                  <span>Door To Door</span>
                  <span>
                    ایران ، تهران
                     </span>
                  <DoorToDoor />
                  <span>
                    ایران ، تهران
                     </span>
                     <Button type="link">انصراف محموله</Button>

                </Card>

            </Col>
            <Col span={5} offset={0}>
                <Collapse defaultActiveKey={['1']} >
                  <Panel header="مبلغ پرداختی" key="1" onClick={handlePayment}>
                    <Row >
                      <Col span={24}>

                    <a onClick={handlePayment}>روش پرداخت</a>
                      </Col>
                    </Row>
                  </Panel>
                  <Panel header="جزئیات تماس" key="2" onClick={handlePickUp}>
                    <Row >
                      <Col span={24}>
                    <a onClick={handlePickUp}>تحویل دهنده</a>
                        
                      </Col>
                      <Col span={24}>
                    <a onClick={handleDelivery}>تحویل گیرنده</a>
                        
                      </Col>
                    </Row>
                  </Panel>
                  <Panel header="کالاهای شما" key="3" onClick={handleCommodities}>
                    <Row >
                      <Col span={24}>
                    <a onClick={handleCommodities}>کالاها</a>
                        
                      </Col>
                      <Col span={24} onClick={handleUploadDoc}>
                    <a >بارگذاری اسناد</a>
                        
                      </Col>
                    </Row>
                  </Panel>
                </Collapse>

            </Col>
            <Col span={17} offset={2}>
                <Row span={24}>
                    <Col span={24}>
                    <div className="site-card-border-less-wrapper">
                    {Payment &&  <Card title="جزيیات صورتحساب شرکت" >
                                <PaymentForm/>
                            </Card> }
                            {PickUp && 
                        <Card title="تحویل دهنده" >
                            <PickUpForm />
                            </Card>
                            }
                            {Delivery && 
                        <Card title="تحویل گیرنده">
                        <PickUpForm />
                            </Card>
                            }
                            {Commodities && 
                        <Card title="کالاها" >
                            <CommoditiesForm />
                        </Card>
                            }
                        {UploadD && 
                        <Card title="بارگذاری اسناد">
                            <UploadDoc />
                        </Card>
                        } 
                    </div>
                    </Col>
                </Row>
            </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </section>
  );
};

export default ActionRequired;
