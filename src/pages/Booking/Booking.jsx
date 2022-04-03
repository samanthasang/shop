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
import {
  QuestionCircleOutlined,
  ClockCircleOutlined,
  CalendarOutlined,
} from '@ant-design/icons';
import HouseIcon from '../../assets/Icons/HouseIcon';
import TruckIcon from '../../assets/Icons/TruckIcon';
import './Booking.scss';

const Booking = () => {
  const {Step} = Steps;
  const {Text, Paragraph, Title} = Typography;
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
            <Row className="booking-container-details-left">
              <Col span={24}>
                <Row className="booking-container-details-left-card">
                  <Col span={24}>
                    <Row>
                      <Title className="booking-container-details-left-card-summary-title">
                        خلاصه رزرو
                      </Title>
                    </Row>
                    <Row
                      justify="center"
                      className="booking-container-details-left-card-summary-icon"
                    >
                      <TruckIcon width={50} />
                    </Row>
                    <Row
                      className="booking-container-details-left-card-summary-other"
                      justify="center"
                    >
                      <Col span={3}>
                        <Row
                          className="booking-container-details-left-card-summary-icon HomeIcon"
                          justify="center"
                        >
                          <Col span={13}>
                            <Row justify="center">
                              <HouseIcon />
                            </Row>
                          </Col>
                          <Col span={13}>
                            <Row justify="center">
                              <Text>ایران </Text>
                              <br />
                              <Text>تهران </Text>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                      <Col span={16}>
                        <Divider
                          dashed={true}
                          className="booking-container-details-left-card-summary-other-divider"
                        />
                      </Col>
                      <Col span={3}>
                        <Row
                          className="booking-container-details-left-card-summary-icon HomeIcon"
                          justify="center"
                        >
                          <Col span={13}>
                            <Row justify="center">
                              <HouseIcon />
                            </Row>
                          </Col>
                          <Col span={13}>
                            <Row justify="center">
                              <Text>ایران </Text>
                              <br />
                              <Text>تهران </Text>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col span={17}>
                    <Row className="booking-container-details-left-doorRight">
                      <Col span={24}>
                        <Row
                          className="booking-container-details-left-doorRight-top"
                          align="middle"
                        >
                          <ClockCircleOutlined />
                          <Text className="booking-container-details-left-doorRight-text">
                            برآورد زمان حمل و نقل از وانت: 1-10 روز
                          </Text>
                        </Row>
                        <Row
                          className="booking-container-details-left-doorRight-bottom"
                          align="middle"
                        >
                          <CalendarOutlined />
                          <Text className="booking-container-details-left-doorRight-text">
                            کالا آماده: کالا آماده است
                          </Text>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                  <Col span={7}>
                    <Row className="booking-container-details-left-doorLeft">
                      <Col span={24}>
                        <Row
                          className="booking-container-details-left-card-summary-icon"
                          justify="center"
                        >
                          <TruckIcon width={50} />
                        </Row>
                        <Row justify="center">
                          <Text className="booking-container-details-left-doorLeft-text1">
                            LTR
                          </Text>
                        </Row>
                        <Row justify="center">
                          <Text className="booking-container-details-left-doorLeft-text2">
                            از محل به محل
                          </Text>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
export default Booking;
