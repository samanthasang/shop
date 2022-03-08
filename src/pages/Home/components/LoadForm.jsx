import React, {useState} from 'react';
import {
  Form,
  Input,
  Row,
  Select,
  // Space,
  Col,
  Button,
  Divider,
  Tabs,
  Radio,
  Alert,
  Checkbox,
  Typography,
  Collapse,
} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import '../Home.scss';

const Loader = ({visible}) => {
  //   const [form] = Form.useForm();
  const {Option} = Select;
  const {Title, Text} = Typography;
  const {Panel} = Collapse;
  const {TabPane} = Tabs;
  const [RadioButtonvalue, setRadioButton] = useState(0);

  const handleChangeFromRadio = e => {
    console.log(e);
    setRadioButton(e.target.value);
  };

  return (
    <div className="LoadForm">
      <Row className="LoadForm-header">
        <Title level={5}>چه چیزی حمل می کنید؟</Title>
      </Row>
      <Row className="LoadForm-content">
        <Tabs defaultActiveKey="1">
          <TabPane
            tab={
              <>
                <Text>بار آزاد</Text>
                <img
                  src="https://i.pinimg.com/originals/99/91/a4/9991a4b887eeee54f30b282f222a42a8.png"
                  className="tab_img"
                  alt=""
                />
              </>
            }
            key="1"
          >
            <Form>
              <Row>
                <Radio.Group
                  onChange={handleChangeFromRadio}
                  value={RadioButtonvalue}
                >
                  <Radio value={0}>
                    <Text> محاسبه بر اساس نوع واحد</Text>
                  </Radio>
                  <Radio value={1}>
                    <Text>محاسبه بر اساس کل حمل و نقد</Text>
                  </Radio>
                </Radio.Group>
              </Row>
              {RadioButtonvalue ? (
                <Row justify="center">
                  <Col span={22}>
                    <Alert
                      style={{marginTop: '10px '}}
                      className="container_alert_icon"
                      description="محاسبه بر اساس کل محموله دقت کمتری دارد و بنابراین احتمال بیشتری دارد که برای ابعاد نادرست یا بزرگ‌تر هزینه اضافی متحمل شود."
                      type="info"
                      showIcon
                    />
                    <Row justify="space-between" style={{marginTop: '1rem'}}>
                      <Col
                        span={7}
                        className="LoadForm-content-polletsUnits-units"
                      >
                        <Row style={{marginBottom: '10px'}}>
                          <Text># از واحد</Text>
                        </Row>
                        <Form.Item name="numberPollets">
                          <Input defaultValue="1" type="number" />
                        </Form.Item>
                      </Col>
                      <Col span={8}>
                        <Row>
                          <Col span={24} style={{marginBottom: '10px'}}>
                            <Text>حجم کل</Text>
                          </Col>
                          <Col span={13}>
                            <Input type="number" />
                          </Col>
                          <Col span={11}>
                            <Select
                              defaultValue="CBM"
                              style={{width: '100%'}}
                              rules={[
                                {
                                  required: true,
                                  message: 'directionType is required',
                                },
                              ]}
                              optionFilterProp="children"
                              filterOption={(input, option) =>
                                option.children
                                  .toLowerCase()
                                  .indexOf(input.toLowerCase()) >= 0
                              }
                            >
                              <Option value="CFT">CBM</Option>
                              <Option value="CFT">CFT</Option>
                            </Select>
                          </Col>
                        </Row>
                      </Col>
                      <Col span={8}>
                        <Row>
                          <Col span={24} style={{marginBottom: '10px'}}>
                            <Text>مجموع وزن</Text>
                          </Col>
                          <Col span={14}>
                            <Input type="number" />
                          </Col>
                          <Col span={10}>
                            <Select
                              defaultValue="KG"
                              style={{width: '100%'}}
                              rules={[
                                {
                                  required: true,
                                  message: 'directionType is required',
                                },
                              ]}
                              optionFilterProp="children"
                              filterOption={(input, option) =>
                                option.children
                                  .toLowerCase()
                                  .indexOf(input.toLowerCase()) >= 0
                              }
                            >
                              <Option value="KG">KG</Option>
                              <Option value="LB">LB</Option>
                            </Select>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              ) : (
                <>
                  <Row className="LoadForm-content-polletsUnits">
                    <Col className="LoadForm-content-polletsUnits-pollets">
                      <Text style={{margin: '10px 0'}}>انواع دسته بندی</Text>
                      <Radio.Group defaultValue="a">
                        <Radio.Button value="a">پالت ها</Radio.Button>
                        <Radio.Button value="b">جعبه ها/ محفظه ها</Radio.Button>
                      </Radio.Group>
                    </Col>
                    <Col className="LoadForm-content-polletsUnits-units">
                      <Text style={{margin: '10px 0'}}># از واحد</Text>
                      <Form.Item name="numberPollets">
                        <Input defaultValue="1" type="number" />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row className="LoadForm-content-polletsUnits-pollets-type">
                    <Col span={24}>
                      <Text className="titleOfInputs">نوع پالت</Text>
                    </Col>
                    <Col span={24}>
                      <Form.Item
                        name="numberPollets"
                        className="LoadForm-content-polletsUnits-pollets-type-item"
                      >
                        <Select
                          style={{width: '100%'}}
                          placeholder="پالت ها (اندازه نامشخص)"
                          rules={[
                            {
                              required: true,
                              message: 'directionType is required',
                            },
                          ]}
                          optionFilterProp="children"
                          filterOption={(input, option) =>
                            option.children
                              .toLowerCase()
                              .indexOf(input.toLowerCase()) >= 0
                          }
                        >
                          <Option value="1">"40 * "40</Option>
                          <Option value="2">"60 * "60</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row className="LoadForm-content-weightDimensions">
                    <Col span={16}>
                      <Row className="LoadForm-content-weightDimensions-Dimensions">
                        <Col span={24}>
                          <Text className="titleOfInputs">ابعاد</Text>
                        </Col>
                        <Col span={24}>
                          <Row>
                            <Input
                              placeholder="L"
                              style={{width: '20%', marginLeft: '1px'}}
                              type="number"
                            />
                            <Input
                              placeholder="W"
                              style={{width: '20%', marginLeft: '1px'}}
                              type="number"
                            />
                            <Input
                              placeholder="H"
                              style={{width: '20%', marginLeft: '1px'}}
                              type="number"
                            />
                            <Select
                              style={{width: '25%'}}
                              defaultValue="EUR"
                              rules={[
                                {
                                  required: true,
                                  message: 'directionType is required',
                                },
                              ]}
                              optionFilterProp="children"
                              filterOption={(input, option) =>
                                option.children
                                  .toLowerCase()
                                  .indexOf(input.toLowerCase()) >= 0
                              }
                            >
                              <Option value="CM">CM</Option>
                              <Option value="IN">IN</Option>
                            </Select>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                    <Col span={8}>
                      <Row className="LoadForm-content-weightDimensions-weight">
                        <Col span={24}>
                          <Text className="titleOfInputs">وزن</Text>
                        </Col>
                        <Row>
                          <Col span={12}>
                            <Input type="number" />
                          </Col>
                          <Col span={12}>
                            <Select
                              defaultValue="KG"
                              style={{width: '100%'}}
                              rules={[
                                {
                                  required: true,
                                  message: 'directionType is required',
                                },
                              ]}
                              optionFilterProp="children"
                              filterOption={(input, option) =>
                                option.children
                                  .toLowerCase()
                                  .indexOf(input.toLowerCase()) >= 0
                              }
                            >
                              <Option value="KG">KG</Option>
                              <Option value="LB">LB</Option>
                            </Select>
                          </Col>
                        </Row>
                      </Row>
                    </Col>
                  </Row>
                </>
              )}
            </Form>
          </TabPane>
          <TabPane
            tab={
              <Row className="LoadForm-content-tabTitle">
                <Text>کانتینرها</Text>
                <img
                  src="https://static.thenounproject.com/png/1675892-200.png"
                  className="tab_img"
                  alt=""
                />
              </Row>
            }
            key="2"
          >
            <Row className="LoadForm-content-tabFreeBar">
              <Col span={24}>
                <Alert
                  className="container_alert_icon"
                  description="کانتینرها را می توان به یا از یک آدرس تجاری ارسال کرد فقط در صورتی که اسکله بارگیری وجود داشته باشد."
                  type="info"
                  showIcon
                />
              </Col>
            </Row>
            <Row justify="space-between">
              <Col span={6}>
                <Row>
                  <Col span={24}>
                    <Text className="LoadForm-content-tabFreeBar-units-title">
                      # از واحد
                    </Text>
                  </Col>
                  <Col span={24}>
                    <Form.Item name="numberOfunits" className="">
                      <Input defaultValue="1" type="number" />
                    </Form.Item>
                  </Col>
                </Row>
              </Col>
              <Col span={14}>
                <Text className="LoadForm-content-tabFreeBar-type-title">
                  نوع کانتینر
                </Text>
                <Radio.Group defaultValue="a" style={{direction: 'rtl'}}>
                  <Radio.Button value="a">'20</Radio.Button>
                  <Radio.Button value="b">'40</Radio.Button>
                  <Radio.Button value="c">40' HC</Radio.Button>
                  <Radio.Button value="d">45' HC</Radio.Button>
                </Radio.Group>
              </Col>
            </Row>
            <Row>
              <Checkbox style={{marginRight: '1.5rem'}}>اضافه وزن</Checkbox>
            </Row>
          </TabPane>
        </Tabs>
      </Row>
      <Row className="LoadForm-submit">
        <Divider
          className="originalForm-divider LoadForm-divider"
          orientation="right"
        />
        <Row className="LoadForm-submit-buttons">
          <Button icon={<PlusOutlined />} style={{marginLeft: '1rem'}}>
            <Text style={{marginRight: '5px'}}>یک بار دیگر اضافه کنید </Text>
          </Button>
          <Button type="primary" size="middle">
            تایید
          </Button>
        </Row>
      </Row>
    </div>
  );
};
export default Loader;
