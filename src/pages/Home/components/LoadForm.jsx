import React, {useState, useEffect} from 'react';
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
  const [radioButtonType, setRadioButtonType] = useState('type');
  const [submitDisable, setSubmitDisable] = useState(true);
  const [typeBar, setTypeBar] = useState(1);
  // const [loades, setLoades] = useState(null);

  const [loadFreeForm] = Form.useForm();
  const [loadContainerForm] = Form.useForm();

  const {Option} = Select;
  const {Title, Text} = Typography;
  const {Panel} = Collapse;
  const {TabPane} = Tabs;

  const handleChangeFromRadio = e => {
    setRadioButtonType(e.target.value);
  };

  // useEffect(() => {
  //   if (loadFreeForm.getFieldValue().length) setSubmitDisable(false);
  //   else setSubmitDisable(true);
  // }, [loadFreeForm]);

  const onFinish = values => {
    console.log(values);
    //  send data
  };
  const onFinishContainer = values => {
    console.log(values);
  };
  const handleWatchForm = values => {
    //  send data
  };
  const handleWatchContainerForm = values => {
    //  send data
  };

  return (
    <div className="LoadForm">
      <Row className="LoadForm-header">
        <Title level={5}>چه چیزی حمل می کنید؟</Title>
      </Row>
      <Row className="LoadForm-content">
        <Tabs
          defaultActiveKey={typeBar === 'free' ? 1 : 2}
          onChange={e => setTypeBar(e)}
        >
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
            <Form
              // className="goodsForm"
              onFinish={onFinish}
              layout="horizontal"
              colon={false}
              onFieldsChange={handleWatchForm}
              form={loadFreeForm}
            >
              <Row>
                <Radio.Group
                  onChange={handleChangeFromRadio}
                  // value={RadioButtonvalue}
                  defaultValue="type"
                >
                  <Radio value="type">
                    <Text> محاسبه بر اساس نوع واحد</Text>
                  </Radio>
                  <Radio value="all">
                    <Text>محاسبه بر اساس کل حمل و نقد</Text>
                  </Radio>
                </Radio.Group>
              </Row>
              {radioButtonType === 'all' ? (
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
                        <Form.Item
                          name="numberPollets"
                          rules={[
                            {
                              required: true,
                              message: 'انتخاب تعداد پالت ها اجباری است',
                            },
                          ]}
                        >
                          <Input type="number" />
                        </Form.Item>
                      </Col>
                      <Col span={8}>
                        <Row>
                          <Col span={24} style={{marginBottom: '10px'}}>
                            <Text>حجم کل</Text>
                          </Col>
                          <Col span={13}>
                            <Form.Item
                              name="totalVolume"
                              rules={[
                                {
                                  required: true,
                                  message: 'انتخاب حجم کل اجباری است',
                                },
                              ]}
                            >
                              <Input type="number" />
                            </Form.Item>
                          </Col>
                          <Col span={11}>
                            <Form.Item
                              name="totalUnitVolume"
                              style={{width: '100%'}}
                              rules={[
                                {
                                  required: true,
                                  message: 'انتخاب واحد حجم کل اجباری است',
                                },
                              ]}
                            >
                              <Select
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
                            </Form.Item>
                          </Col>
                        </Row>
                      </Col>
                      <Col span={8}>
                        <Row>
                          <Col span={24} style={{marginBottom: '10px'}}>
                            <Text>مجموع وزن</Text>
                          </Col>
                          <Col span={14}>
                            <Form.Item
                              name="totalWeight"
                              rules={[
                                {
                                  required: true,
                                  message: 'انتخاب مجموع وزن کل اجباری است',
                                },
                              ]}
                            >
                              <Input type="number" />
                            </Form.Item>
                          </Col>
                          <Col span={10}>
                            <Form.Item
                              name="totalUnitWeight"
                              rules={[
                                {
                                  required: true,
                                  message:
                                    'انتخاب واحد مجموع وزن کل اجباری است',
                                },
                              ]}
                              style={{width: '100%'}}
                            >
                              <Select
                                defaultValue="KG"
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
                            </Form.Item>
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
                      <Form.Item
                        name="numberPollets"
                        rules={[
                          {
                            required: true,
                            message: 'انتخاب تعداد پالت ها اجباری است',
                          },
                        ]}
                      >
                        <Radio.Group>
                          <Radio.Button value="p">پالت ها</Radio.Button>
                          <Radio.Button value="b">
                            جعبه ها/ محفظه ها
                          </Radio.Button>
                        </Radio.Group>
                      </Form.Item>
                    </Col>
                    <Col className="LoadForm-content-polletsUnits-units">
                      <Text style={{margin: '10px 0'}}># از واحد</Text>
                      <Form.Item
                        name="numberPollets"
                        rules={[
                          {
                            required: true,
                            message: 'انتخاب تعداد پالت ها اجباری است',
                          },
                        ]}
                      >
                        <Input defaultValue="1" type="number" />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row className="LoadForm-content-polletsUnits-pollets-type">
                    <Col span={24}>
                      <Text className="titleOfInputs">سایز پالت</Text>
                    </Col>
                    <Col span={24}>
                      <Form.Item
                        name="sizePollets"
                        className="LoadForm-content-polletsUnits-pollets-type-item"
                        rules={[
                          {
                            required: true,
                            message: 'انتخاب سایز پالت ها اجباری است',
                          },
                        ]}
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
                            <Form.Item
                              name="lPollets"
                              rules={[
                                {
                                  required: true,
                                  message: 'وارد کردن طول پالت ها اجباری است',
                                },
                              ]}
                              style={{width: '20%', marginLeft: '1px'}}
                            >
                              <Input placeholder="L" type="number" />
                            </Form.Item>
                            <Form.Item
                              name="wPollets"
                              rules={[
                                {
                                  required: true,
                                  message:
                                    'وارد کردن ارتفاع پالت ها اجباری است',
                                },
                              ]}
                              style={{width: '20%', marginLeft: '1px'}}
                            >
                              <Input placeholder="W" type="number" />
                            </Form.Item>
                            <Form.Item
                              name="hPollets"
                              rules={[
                                {
                                  required: true,
                                  message: 'وارد کردن عرض پالت ها اجباری است',
                                },
                              ]}
                              style={{width: '20%', marginLeft: '1px'}}
                            >
                              <Input placeholder="H" type="number" />
                            </Form.Item>

                            <Form.Item
                              name="unitPollets"
                              rules={[
                                {
                                  required: true,
                                  message: 'وارد کردن واحد پالت ها اجباری است',
                                },
                              ]}
                              style={{width: '25%'}}
                            >
                              <Select
                                defaultValue="EUR"
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
                            </Form.Item>
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
                            <Form.Item
                              name="weightPollets"
                              rules={[
                                {
                                  required: true,
                                  message: 'وارد کردن وزن پالت ها اجباری است',
                                },
                              ]}
                            >
                              <Input type="number" />
                            </Form.Item>
                          </Col>
                          <Col span={12}>
                            <Form.Item
                              name="weightUnitPollets"
                              rules={[
                                {
                                  required: true,
                                  message:
                                    'وارد کردن واحد وزن پالت ها اجباری است',
                                },
                              ]}
                              style={{width: '100%'}}
                            >
                              <Select
                                defaultValue="KG"
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
                            </Form.Item>
                          </Col>
                        </Row>
                      </Row>
                    </Col>
                  </Row>
                </>
              )}

              <Row>
                <Form.Item
                  name="Overweight"
                  style={{width: '100%'}}
                  valuePropName="checked"
                >
                  <Checkbox style={{marginRight: '1.5rem'}}>اضافه وزن</Checkbox>
                </Form.Item>
              </Row>
              <Row className="LoadForm-submit">
                <Divider
                  className="originalForm-divider LoadForm-divider"
                  orientation="right"
                />

                <Row className="originalForm-submit">
                  {/* <Button icon={<PlusOutlined />} style={{marginLeft: '1rem'}}>
                    <Text style={{marginRight: '5px'}}>یک بار دیگر اضافه کنید </Text>
                  </Button> */}
                  <Button
                    type="primary"
                    size="middle"
                    htmlType="submit"
                    // disabled={submitDisable}
                  >
                    تایید
                  </Button>
                </Row>
              </Row>
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
            <Form
              onFinish={onFinishContainer}
              layout="horizontal"
              colon={false}
              onFieldsChange={handleWatchContainerForm}
              form={loadContainerForm}
              style={{width: '100%'}}
            >
              <Row justify="space-between">
                <Col span={6}>
                  <Row>
                    <Col span={24}>
                      <Text className="LoadForm-content-tabFreeBar-units-title">
                        # از واحد
                      </Text>
                    </Col>
                    <Col span={24}>
                      <Form.Item
                        name="numberOfunits"
                        rules={[
                          {
                            required: true,
                            message: 'انتخاب مقدار واحد اجباری است',
                          },
                        ]}
                      >
                        <Input defaultValue={0} type="number" />
                      </Form.Item>
                    </Col>
                  </Row>
                </Col>
                <Col span={14}>
                  <Text className="LoadForm-content-tabFreeBar-type-title">
                    نوع کانتینر
                  </Text>

                  <Form.Item
                    name="typeContainer"
                    style={{width: '100%'}}
                    rules={[
                      {
                        required: true,
                        message: 'انتخاب نوع کانتینر اجباری است',
                      },
                    ]}
                  >
                    <Radio.Group style={{direction: 'rtl'}}>
                      <Radio.Button value="a">'20</Radio.Button>
                      <Radio.Button value="b">'40</Radio.Button>
                      <Radio.Button value="c">40' HC</Radio.Button>
                      <Radio.Button value="d">45' HC</Radio.Button>
                    </Radio.Group>
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Form.Item
                  name="Overweight"
                  style={{width: '100%'}}
                  valuePropName="checked"
                >
                  <Checkbox style={{marginRight: '1.5rem'}}>اضافه وزن</Checkbox>
                </Form.Item>
              </Row>
              <Row className="LoadForm-submit">
                <Divider
                  className="originalForm-divider LoadForm-divider"
                  orientation="right"
                />

                <Row className="originalForm-submit">
                  {/* <Button icon={<PlusOutlined />} style={{marginLeft: '1rem'}}>
            <Text style={{marginRight: '5px'}}>یک بار دیگر اضافه کنید </Text>
          </Button> */}
                  <Button
                    type="primary"
                    size="middle"
                    htmlType="submit"
                    disabled={submitDisable}
                  >
                    تایید
                  </Button>
                </Row>
              </Row>
            </Form>
          </TabPane>
        </Tabs>
      </Row>
    </div>
  );
};
export default Loader;
