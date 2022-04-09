import React, {useEffect, useState} from 'react';
import { Tabs, Table,
    Typography,
    Tooltip, Divider, Alert,
    Rate,
    Button,
    Collapse, Row, Col, Card, Spin} from 'antd';


import PaymentForm from './PaymentForm';
import PickUpForm from './PickUpForm';
import DeliveryForm from './DeliveryForm';
import CommoditiesForm from './CommoditiesForm';
import UploadDoc from './UploadDoc';


import '../Verification.scss';


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



  return (
    <section>
      <Row className="centerMenu" gutter={[24, 0]}>
        <Col span={8} offset={0}>
        <Collapse defaultActiveKey={['1']} >
    <Panel header="مبلغ پرداختی" key="1">
      <a>روش پرداخت</a>
    </Panel>
    <Panel header="جزئیات تماس" key="2">
      <a>تحویل دهنده</a>
      <a>تحویل گیرنده</a>
    </Panel>
    <Panel header="کالاهای شما" key="3">
      <a>کالاها</a>
      <a>بارگذاری اسناد</a>
    </Panel>
  </Collapse>
        </Col>
        <Col span={16} offset={0}>
            <Row span={24}>
                <Col span={24}>
                <div className="site-card-border-less-wrapper">
                {Payment &&  <Card title="جزئیات صورتحساب شرکت" bordered={false} >
                             <PaymentForm/>
                        </Card> }
                        {PickUp && 
                    <Card title="تحویل دهنده" bordered={false} >
                        <PickUpForm />
                        </Card>
                        }
                        {Delivery && 
                    <Card title="تحویل گیرنده" bordered={false} >
                        <DeliveryForm />
                        </Card>
                        }
                        {Commodities && 
                    <Card title="کالاها" bordered={false} >
                        <CommoditiesForm />
                    </Card>
                        }
                    {UploadD && 
                    <Card title="بارگذاری اسناد" bordered={false} >
                    <UploadDoc />
                    </Card>
                    } 
                </div>
                </Col>
            </Row>
        </Col>
      </Row>
    </section>
  );
};

export default ActionRequired;
