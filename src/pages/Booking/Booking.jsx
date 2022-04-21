import React, { useState } from 'react';
import {
  Row,
  Col,
  Steps,
  Divider,
  Form,
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
import MonitorWeight from '../../assets/Icons/MonitorWeight';
import BookingPromoForm from './Components/BookingPromoForm';
import './Booking.scss';

const Booking = () => {


  const [ activePromo, setActivePromo ] = useState(false);

  const changeLogin = () => {
    setActivePromo(!activePromo);
  };
  
  const onFinish = () => {
    console.log('Success:');
  };

  const onFinishFailed = () => {
    console.log('Failed:');
  };



  const {Step} = Steps;
  const {Text, Paragraph, Title} = Typography;
  return (
    <Row justify="center" className="booking-container">
      <Col span={22}>
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
              <Col span={24}>
                <Divider className="booking-container-details-right-divider" />
              </Col>
              <Col span={24}>
                <Row
                  justify="space-between"
                  className="booking-container-details-right-Duties"
                >
                <Col span={24}>


                  {!activePromo ? 
                    <Text>شامل <a href='#' onClick={changeLogin}>کد تخفیف</a> نمی شود</Text> :
                    <BookingPromoForm />
                  }
                </Col>
                  <Col span={12}>
                      <Text>شامل نمی شود</Text>
                      <QuestionCircleOutlined />
                  </Col>
                  <Col>
                    <Row
                      align="middle"
                      className="booking-container-details-right-Duties-include"
                    >
                    <Text>50,000 تومان</Text>
                    </Row>
                  </Col>
                </Row>
              </Col>

              <Col span={24}>
                <Divider className="booking-container-details-right-divider" />
              </Col>
              <Col span={24}>
                <Row
                  justify="start"
                  className="booking-container-details-right-priceDetails"
                >
                <Col span={12}>
                  <Text>جزئیات قیمت</Text>
                </Col>
                <Col span={12}>
                    <Text>50,000 تومان</Text>
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
              <Col span={24}>
                <Row>
                  <Col span={7}>
                    <Row className="booking-container-details-left-dimensionsRight">
                      <Col span={24}>
                        <Row justify="center">
                          <Text className="booking-container-details-left-dimensionsRight-text1">
                          وزن/حجم کل
                          </Text>
                        </Row>
                        <Row
                          className="booking-container-details-left-dimensionsRight-icon"
                          justify="center"
                        >
                          <MonitorWeight width={100} />
                        </Row>
                        <Row justify="center">
                          <Text className="booking-container-details-left-dimensionsRight-text2">
                          234.00 KG
                          </Text>
                        </Row>
                        <Row justify="center">
                          <Text className="booking-container-details-left-dimensionsRight-text3">
                          0.00 CBM
                          </Text>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                  <Col span={17}>
                    <Row className="booking-container-details-left-dimensionsLeft">
                      <Col span={24}>
                    <Row>
                      <Title className="booking-container-details-left-dimensionsLeft-title">
                        خلاصه رزرو
                      </Title>
                    </Row>

                    <Row className='booking-container-details-left-dimensionsLeft-container'>
                          <Col className='booking-container-details-left-dimensionsLeft-container-item'>

                              <Row
                                className="booking-container-details-left-dimensionsLeft-container-item-icon"
                                justify="center"
                                >
                                <MonitorWeight width={100} />
                              </Row>
                              <Row justify="center">
                                <Text className="booking-container-details-left-dimensionsLeft-container-item-text2">
                                1 x Boxes/Crates
                                </Text>
                              </Row>
                              <Row justify="center">
                                <Text className="booking-container-details-left-dimensionsLeft-container-item-text3">
                                4 × 3 × 4 cm
                                </Text>
                              </Row>
                          </Col>

                    </Row>

                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col span={24}>
                <Row>
                  <Col span={12}>
                    <Row className="booking-container-details-left-companyRight">
                      <Col span={24}>
                    <Row>
                      <Title className="booking-container-details-left-companyRight-title">
                      فروشنده : 
                      </Title>
                          <Text className="booking-container-details-left-companyRight-text2">
                          Primorus Worldwide
                          </Text>
                    </Row>


                    <Row
                          className="booking-container-details-left-companyRight-icon"
                          justify="center"
                        >
                        <img
                          className="haeder-logo logo"
                          src="data:image/png;base64,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"
                          alt=""
                        />
                        </Row>


                      </Col>
                    </Row>
                  </Col>
                  <Col span={12}>
                    <Row className="booking-container-details-left-companyLeft">
                      <Col span={24}>
                    <Row>
                      <Title className="booking-container-details-left-companyLeft-title">
                      بیمه : 

                      </Title>
                          <Text className="booking-container-details-left-companyLeft-text2">
                          xcover.com
                          </Text>
                    </Row>


                    <Row
                          className="booking-container-details-left-companyLeft-icon"
                          justify="center"
                        >
                        <img
                          className="haeder-logo logo"
                          src="data:image/png;base64,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"
                          alt=""
                        />
                        </Row>


                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col span={24}>
                    <Row className="booking-container-details-left-infoDate">
                      <Col span={24}>
                    <Row>
                      <Text className="booking-container-details-left-infoDate-title">
                      این نرخ تا 4 مه 2022 تضمین شده است. اگر کالاهای شما پس از این تاریخ جابه‌جا شوند، ممکن است قیمت پیشنهادی مطابق با نرخ بازار تعدیل شود.
                      </Text>
                    </Row>


                  </Col>
                </Row>
              </Col>
              <Col span={24}>
                <Row>
                  <Col span={24}>
                    <Row className="booking-container-details-left-formBooking">
                      <Col span={24}>
                        <Form
            name="basic"
            labelCol={{ span: 0 }}
            wrapperCol={{ span: 24 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
          >

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 0, span: 24 }}>
            <Checkbox>من تأیید می کنم که این یک محموله تجاری است و تمام جزئیات صحیح است. من شرایط نقل قول و رزرو زیر را می پذیرم. </Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 0, span: 24 }}>     
              <Button type="primary" htmlType="submit" className="booking-container-details-left-formBooking-button">
              تایید و رزرو ارسال
              </Button>
            </Form.Item>
          </Form>


                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col span={24}>
                <Divider className="booking-container-details-right-divider" />
              </Col>
                      <Col span={24}>
                    <Row>
                      <Title className="booking-container-details-left-card-summary-title">
                      شرایط رزرو
                      </Title>                    
                      </Row>


                  </Col>
                      <Col span={24}>
                    <Row>
                      <Text className="booking-container-details-left-companyLeft-text2">
                      با کلیک کردن روی "تأیید و رزرو ارسال" با قرارداد خدمات اصلی Freightos، شرایط و ضوابط خریدار، و خط مشی رازداری موافقت می کنم. Freightos رزرو شما را ظرف یک روز کاری تأیید می‌کند و فروشنده منتخب شما ترتیب تحویل را می‌دهد. اگر در مورد رزرو خود سؤالی دارید، لطفاً به ship@freightos.com ایمیل بزنید.                      </Text>
                    </Row>


                  </Col>
              <Col span={24}>
                <Divider dashed className="booking-container-details-right-divider" />
              </Col>
                      <Col span={24}>
                    <Row>
                      <Text className="booking-container-details-left-companyLeft-text2">
                      بارگیری پس از تحویل تایید می شود. اگر حمل و نقل واقعی شما با اطلاعات ارائه شده متفاوت است، قیمت شما ممکن است تغییر کند. ممکن است هزینه های اضافی متحمل شوید و بر اساس آن هزینه دریافت کنید.                      
                      </Text>
                    </Row>


                  </Col>
              <Col span={24}>
                <Divider dashed className="booking-container-details-right-divider" />
              </Col>
                      <Col span={24}>
                    <Row>
                      <Text className="booking-container-details-left-companyLeft-text2">
                      سیاست لغو استاندارد: محموله ها ممکن است بدون هزینه اضافی لغو شوند قبل از اینکه فروشنده محموله شما را پردازش کند. در غیر این صورت، هزینه های مستقیم از شما دریافت خواهد شد.                      </Text>
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
