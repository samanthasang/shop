import React, {useState} from 'react';
import {Form, Input, Row, Select, Space, Button, Checkbox, Divider} from 'antd';
import {QuestionCircleOutlined} from '@ant-design/icons';
import '../Home.scss';

const GoodsForm = ({visible}) => {
  //   const [form] = Form.useForm();
  const {Option} = Select;

  const [CheckedBoxActive, setCheckedBoxActive] = useState(false);

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
      // style={{ width: "800px", height: "100px", backgroundColor: "white",border:"1px solid gray" }}
      className="goodsForm"
      onFinish={onFinish}
      layout="horizontal"
      colon={false}
      onFieldsChange={handleWatchForm}
    >
      <Space direction="vertical" size="small" style={{width: '100%'}}>
        <h3 style={{textAlign: 'right'}}>از اجناس خود به ما بگوئید</h3>
        <div style={{display: 'flex'}}>
          <h5 style={{marginLeft: '3px'}}>ارزش اجناس</h5>
          <span>
            <QuestionCircleOutlined />
          </span>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
          <Input
            style={{width: '75%', marginLeft: '1px'}}
            type="number"
            step="50"
            min="0"
            max="500000"
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
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="EUR">EUR</Option>
            <Option value="GBP">GBP</Option>
            <Option value="USD">USD</Option>
          </Select>
        </div>
        <div>
          <Checkbox />
          <label
            style={{marginRight: '5px'}}
            onChange={() => setCheckedBoxActive(true)}
          >
            محموله حاوی کالاهای خطرناک است
          </label>
        </div>

        <div style={{display: 'flex', flexDirection: 'row'}}>
          <h5 style={{marginLeft: '3px'}}>آیا کالای شما آماده است؟</h5>
          <span>
            <QuestionCircleOutlined />
          </span>
        </div>
        <div>
          <Select
            style={{width: '100%'}}
            placeholder="بازه زمانی را انتخاب کنید"
            rules={[
              {
                required: true,
                message: 'directionType is required',
              },
            ]}
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="1">بله، کالای من آماده است.</Option>
            <Option value="2">ظرف 2 هفته آماده خواهد شد.</Option>
            <Option value="3">بیش از 2 هفته دیگر آماده خواهد شد.</Option>
          </Select>
        </div>
        <Divider className="originalForm-divider" />
        <Row className="goodsForm-submit">
          <Button type="primary" size="middle">
            تایید
          </Button>
        </Row>
      </Space>
    </Form>
  );
};
export default GoodsForm;

// <div>
// {CheckedBoxActive ?
//    ( <div
//        style={{ border: "10px #bdbebd solid", boxShadow: "-5px 5px 10px 10px rgba(0, 0, 0, 0.1)", borderWidth: "0.3px", borderRadius: " 8px 8px 8px 8px" }}
//    >
//        <span style={{ color: "orange" }}><WarningOutlined /></span><p>در حال حاضر، فرآورده‌های ما فقط محموله‌های خطرناک را برای اقلام حاوی باتری‌های لیتیوم یون انجام می‌دهند. آنها دیگر محموله های خطرناک را پشتیبانی نمی کنند.</p>
//    </div>)
//    : {}}
// </div>
