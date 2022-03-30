import React from 'react';
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
import {QuestionCircleOutlined} from '@ant-design/icons';
import './Booking.scss';

const Booking = () => {
  const {Step} = Steps;
  const {Text, Paragraph} = Typography;
  return (
    <Row justify="center" className="booking-container">
      <Col span={16}>
        <Row justify="center" className="booking-container-steps">
          <Col span={19}>
            <Steps size="small" current={2}>
              <Step title="جستجو" />
              <Step title="نتیجه" />
              <Step title="رزرو" />
              <Step title="تایید نهایی" />
            </Steps>
          </Col>
        </Row>
        <Row className="booking-container-details" gutter={10}>
          <Col span={9}>
            <Row
              className="booking-container-details-right"
              justify="center"
              gutter={[0, 17]}
            >
              <Col span={24}>
                <Row
                  justify="start"
                  className="booking-container-details-right-priceDetails"
                >
                  <Text>جزئیات قیمت</Text>
                </Row>
              </Col>

              <Col span={24}>
                <Row
                  justify="space-between"
                  className="booking-container-details-right-priceSeller"
                >
                  <Text>قیمت فروشنده</Text>
                  <Text>200,000 تومان</Text>
                </Row>
              </Col>
              <Col span={24}>
                <Divider className="booking-container-details-right-divider" />
              </Col>
              <Col span={24}>
                <Row
                  justify="space-between"
                  className="booking-container-details-right-Duties"
                >
                  <Col span={12}>
                    <Text>عوارض و مالیات</Text>
                  </Col>
                  <Col>
                    <Row
                      align="middle"
                      className="booking-container-details-right-Duties-include"
                    >
                      <QuestionCircleOutlined />
                      <Text>شامل نمی شود</Text>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col span={24}>
                <Row
                  justify="space-between"
                  className="booking-container-details-right-Insurance"
                >
                  <Col span={24}>
                    <Row justify="space-between">
                      <Text>بیمه</Text>
                      <Text>50,000 تومان</Text>
                    </Row>
                    <Row className="booking-container-details-right-Insurance-explain">
                      <Paragraph>
                        بر اساس ارزش کالا 2,323.00 دلار و هزینه حمل و نقل اولیه.
                      </Paragraph>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col span={15}>
            <Row className="booking-container-details-left">1</Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
export default Booking;
