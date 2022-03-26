import React, {useEffect, useState} from 'react';
import {
  Form,
  Input,
  Row,
  Col,
  Select,
  Space,
  Button,
  Checkbox,
  Divider,
} from 'antd';
import {QuestionCircleOutlined} from '@ant-design/icons';
import '../Home.scss';
import OriginForm from './OriginForm';

const GoodsForm = ({visible, onConfirm}) => {
  const [goodForm] = Form.useForm();
  const {Option} = Select;

  const [CheckedBoxActive, setCheckedBoxActive] = useState(false);
  const [submitDisable, setSubmitDisable] = useState(true);
  //   useEffect(() => {
  //     if (!visible) {
  //       form.resetFields();
  //     }
  //     if ((visible, form)) {
  //       form.setFieldsValue({
  //         // here for object data
  //       });
  //     }
  //   }, [visible]);

  const handleWatchForm = () => {
    const field = goodForm.getFieldValue();

    if (field.cost && field.unit && field.readyGood) setSubmitDisable(false);
    else setSubmitDisable(true);
  };
  const onFinish = values => {
    //  send data
    const data = {...values, dangerGood: CheckedBoxActive};
    onConfirm(data);
  };
  return (
    <Form
      className="goodsForm"
      onFinish={onFinish}
      layout="horizontal"
      colon={false}
      onFieldsChange={handleWatchForm}
      form={goodForm}
    >
      <h3 style={{textAlign: 'right'}}>از اجناس خود به ما بگوئید</h3>
      <div style={{display: 'flex'}}>
        <h5 style={{marginLeft: '3px'}}>ارزش اجناس</h5>
        <span>
          <QuestionCircleOutlined />
        </span>
      </div>
      <Row>
        <Col span={20}>
          <Form.Item
            name="cost"
            rules={[
              {
                required: true,
                message: 'تعیین مبلغ ضروری است',
              },
            ]}
          >
            <Input type="number" step="50" min="0" max="500000" />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item
            name="unit"
            rules={[
              {
                required: true,
                message: 'تعیین واحد پول ضروری است',
              },
            ]}
          >
            <Select
              style={{marginRight: '1px'}}
              // defaultValue="EUR"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="rial">ریال</Option>
              <Option value="tooman">تومان</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Form.Item
          name="dangerGood"
          label="
            محموله حاوی کالاهای خطرناک است"
          className="LoadForm-dangerGood"
          valuePropName="checked"
        >
          <Checkbox
            checked={CheckedBoxActive}
            onChange={e => {
              setCheckedBoxActive(e.target.checked);
              goodForm.setFieldsValue({dangerGood: e.target.checked});
            }}
          />
        </Form.Item>
      </Row>

      <Row style={{margin: '10px 3px'}}>
        <h5>آیا کالای شما آماده است؟</h5>
        <QuestionCircleOutlined style={{margin: '3px'}} />
      </Row>
      <div>
        <Form.Item
          name="readyGood"
          rules={[
            {
              required: true,
              message: 'وضعیت آماده بودن کالا ضروریست',
            },
          ]}
        >
          <Select
            placeholder="بازه زمانی را انتخاب کنید"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="1">بله، کالای من آماده است.</Option>
            <Option value="2">ظرف 2 هفته آماده خواهد شد.</Option>
            <Option value="3">بیش از 2 هفته دیگر آماده خواهد شد.</Option>
          </Select>
        </Form.Item>
      </div>
      <Divider className="originalForm-divider" />
      <Row style={{marginTop: '10px'}} justify="end">
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
export default GoodsForm;
