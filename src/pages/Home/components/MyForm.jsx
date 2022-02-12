import React, { useEffect } from "react";
import {
  Form,
  Input,
  Modal,
  Row,
  Select,
  Space,
  Switch,
  ConfigProvider,
  Typography,
  Col,
  TimePicker,
  Button,
} from 'antd';
import { DatePicker as DatePickerJalali } from 'antd-jalali';
import fa_IR from 'antd/lib/locale/fa_IR';
import dayjs from 'dayjs';

dayjs.calendar('jalali');

const MyForm = ({ visible, onCancel }) => {


  const [form] = Form.useForm();
  const { Title } = Typography;
  const { Option } = Select;

  useEffect(() => {
    if (!visible) {
      form.resetFields();
    }
    if ((visible, form)) {
      form.setFieldsValue({
        // here for object data
      });
    }
  }, [visible]);

  const handleWatchForm = () => {
    //  final check form data for submit
    // example for get data=>consr formData =  form.getFieldsValue();
  };
  const onFinish = values => {
    //  send data
    // values is data in form
    alert('Submit');
  };



  return (
    <Form
      id="addFlight"
      onFinish={onFinish}
      // form={form}
      name="addFlight"
      layout="horizontal"
      colon={false}
      onFieldsChange={handleWatchForm}
    >
      <Space direction="vertical" size="small" style={{ width: '100%' }}>
        <Row>
          <Col style={{ border: '1px solid black' }} xs={4}>
            <Title level={5} className="center-label">
              Flight key:
          </Title>
          </Col>
          <Col style={{ paddingLeft: '1rem' }} xs={20}>
            <div style={{ border: '1px solid black', padding: '5px' }}>
              <Space style={{ width: '100%' }}>
                <Form.Item name="directionType" label="A/D">
                  <Select
                    //   disabled={data}
                    rules={[
                      {
                        required: true,
                        message: 'directionType is required',
                      },
                    ]}
                    showSearch
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    <Option value="ARR">ARR</Option>
                    <Option value="DEP">DEP</Option>
                  </Select>
                </Form.Item>
                <ConfigProvider>
                  <Form.Item
                    name="date"
                    rules={[
                      {
                        required: true,
                        message: 'Scheduled date is required',
                      },
                    ]}
                    label="Schedule Date"
                  >
                    <DatePickerJalali
                      // disabled={data}
                      format="YYYY-MM-DD"
                      placeholder="Select Date"
                      showNow={false}
                    />
                  </Form.Item>
                </ConfigProvider>
                <ConfigProvider locale={fa_IR}>
                  <Form.Item
                    name="date"
                    rules={[
                      {
                        required: true,
                        message: 'Scheduled date is required',
                      },
                    ]}
                    label="persion Date"
                  >
                    <DatePickerJalali
                      // disabled={data}
                      format="YYYY-MM-DD"
                      placeholder="Select Date"
                      showNow={false}
                    />
                  </Form.Item>
                </ConfigProvider>
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: 'STM is required',
                    },
                  ]}
                  name="stm"
                  style={{ width: '100px' }}
                >
                  <TimePicker
                    minuteStep={5}
                    //   disabled={data ? stmActive : false}
                    placeholder="STM"
                    style={{ width: '100px' }}
                    format="HH:mm"
                  />
                </Form.Item>
                <Form.Item
                  name="flightNumber"
                  rules={[
                    {
                      required: true,
                      message: 'flightNumber is required',
                    },
                    {
                      pattern: /^[0-9]*$/,
                      message: 'flightNumber should be only number',
                    },
                  ]}
                  label="Flight Number"
                >
                  <Input
                  //   disabled={data}
                  // onChange={onChangeFlightNumber}
                  />
                </Form.Item>
                <Form.Item name="id" label="ID">
                  <Input style={{ width: '100px' }} />
                </Form.Item>{' '}
                <Form.Item name="countersOn" valuePropName="checked">
                  <Switch />
                </Form.Item>
              </Space>
            </div>
          </Col>
        </Row>
        {/* <Row>
        <Col style={{border: '1px solid black'}} xs={4}>
          <Title level={5} className="center-label">
            Flight Category:
          </Title>
        </Col>
        <Col style={{paddingLeft: '1rem'}} xs={20}>
          <div style={{border: '1px solid black', padding: '5px'}}>
            <Space style={{width: '100%'}}>
              <Form.Item
                initialValue="D"
                rules={[
                  {
                    required: true,
                    message: 'Flight Category is required',
                  },
                ]}
                name="flightCategoryCode"
                label="Flight Category"
              >
                <Select
                  allowClear
                  showSearch
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                  style={{minWidth: '7.5rem'}}
                >
                  {publicData?.allFlightCategories?.map(category => (
                    <Option value={category.code} key={category.code}>
                      {category.description}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item
                name="flightType"
                style={{minwidth: '16rem'}}
                rules={[
                  {
                    required: true,
                    message: 'Flight Type is required',
                  },
                ]}
                label="Flight Type"
                initialValue="J"
              >
                <Select
                  allowClear
                  showSearch
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  {publicData?.allFlightTypes?.map(category => (
                    <Option value={category.code} key={category.code}>
                      {category.description}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Space>
          </div>
        </Col>
      </Row> */}
      </Space>
    </Form>
  )
}
export default MyForm;