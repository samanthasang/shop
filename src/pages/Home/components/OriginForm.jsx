import React, {useEffect, useState} from 'react';
import {Form, Input, Row, Select, Col, Button, Divider, Typography} from 'antd';
import data from '../../../test.json';
import '../Home.scss';

const OriginForm = ({
  origin,
  visible,
  onConfirmOrigin,
  onConfirmDestination,
}) => {
  const [submitDisable, setSubmitDisable] = useState(true);
  const [originForm] = Form.useForm();
  const [destinationForm] = Form.useForm();
  const {Option} = Select;
  const {Text} = Typography;
  useEffect(() => {
    if (!visible) {
      // originForm.resetFields();
      // destinationForm.resetFields();
    }
    if (visible && origin) {
      // originForm.setFieldsValue({
      //   ...field,
      //   type: data.OriginDestinationData.type[0],
      //   country: data.OriginDestinationData.country[0],
      //   // here for object data
      // });
    }
  }, [visible, originForm]);

  const handleWatchForm = () => {
    let field;
    if (origin) field = originForm.getFieldValue();
    else field = destinationForm.getFieldValue();

    if (field.type && field.country && field.address) setSubmitDisable(false);
    else setSubmitDisable(true);
    //  final check form data for submit
    // example for get data=>consr formData =  form.getFieldsValue();
  };
  const onFinish = values => {
    if (origin) onConfirmOrigin(values);
    else onConfirmDestination(values);
  };
  return (
    <Form
      className="originalForm"
      onFinish={onFinish}
      name={origin ? 'origin' : 'destination'}
      layout="horizontal"
      colon={false}
      onFieldsChange={handleWatchForm}
      form={origin ? originForm : destinationForm}
    >
      <Text className="originalForm-title">
        {origin ? 'از کجا حمل می کنید' : 'به کجا حمل میکنید'}
      </Text>
      <Row gutter={5}>
        <Col xs={8}>
          <Text>نوع</Text>
          <Form.Item
            name="type"
            className="originalForm-item"
            rules={[
              {
                required: true,
                message: 'نوع را حتما باید وارد کنید',
              },
            ]}
          >
            <Select
              showSearch
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              {data.OriginDestinationData.type.map(el => (
                <Option key={el.value} value={el.value}>
                  <img src={el.imgSrc} className="option_img" alt="" />
                  <span>{el.description}</span>
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
        <Col xs={8}>
          <Text>کشور</Text>
          <Form.Item
            name="country"
            className="originalForm-item"
            rules={[
              {
                required: true,
                message: 'کشور را حتما باید وارد کنید',
              },
            ]}
          >
            <Select
              rules={[
                {
                  required: true,
                  message: 'country is required',
                },
              ]}
              showSearch
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              {data.OriginDestinationData.country.map(el => (
                <Option key={el.value} value={el.value}>
                  <img src={el.imgSrc} className="option_img" alt="" />
                  <span className="option_img-description">
                    {el.description}
                  </span>
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
        <Col xs={8}>
          <Row>
            <Col span={24}>
              <Text>آدرس</Text>
            </Col>
            <Col span={24}>
              <Form.Item
                name="address"
                className="originalForm-item"
                rules={[
                  {
                    required: true,
                    message: 'آدرس را حتما باید وارد کنید',
                  },
                ]}
              >
                <Input
                  placeholder="نام شهر یا کد پستی خود را وارد کنید"
                  //   disabled={data}
                  // onChange={onChangeFlightNumber}
                />
              </Form.Item>
            </Col>
          </Row>
        </Col>
      </Row>
      <Divider className="originalForm-divider" />
      <Row className="originalForm-submit">
        <Button
          type="primary"
          size="middle"
          htmlType="submit"
          disabled={submitDisable}
        >
          تایید
        </Button>
      </Row>
    </Form>
  );
};
export default OriginForm;
