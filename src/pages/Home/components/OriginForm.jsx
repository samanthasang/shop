import React from 'react';
import {Form, Input, Row, Select, Col, Button, Divider} from 'antd';
import '../Home.scss';

const OriginForm = ({visible, onCancel, origin}) => {
  // const [form] = Form.useForm();
  const {Option} = Select;

  // useEffect(() => {
  //   if (!visible) {
  //     form.resetFields();
  //   }
  //   if ((visible, form)) {
  //     form.setFieldsValue({
  //       // here for object data
  //     });
  //   }
  // }, [visible]);

  const handleWatchForm = () => {
    //  final check form data for submit
    // example for get data=>consr formData =  form.getFieldsValue();
  };
  const onFinish = values => {
    //  send data
    // values is data in form
    alert('Submit');
  };
  console.log(origin);
  return (
    <Form
      className="originalForm"
      onFinish={onFinish}
      name={origin ? 'origin' : 'destination'}
      layout="horizontal"
      colon={false}
      onFieldsChange={handleWatchForm}
    >
      <h3 className="originalForm-title">
        {origin ? 'از کجا حمل می کنید' : 'به کجا حمل میکنید'}
      </h3>
      <Row gutter={5}>
        <Col xs={8}>
          <Form.Item name="type">
            <div className="originalForm-item">
              <label>نوع</label>
              <Select
                defaultValue="کارخانه / انبار"
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
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                <Option value="کارخانه / انبار ">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_aaqJcmxmtU1J0JhUomamdJk_QfqWLyn5_JhV3dzQVBFGClyiWsnHNmpn26vGVQomZXk&usqp=CAU"
                    className="option_img"
                    alt=""
                  />
                  <span> کارخانه / انبار</span>
                </Option>
                <Option value="بندر / فرودگاه ">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/8/8176.png"
                    className="option_img"
                    alt=""
                  />
                  <span> بندر / فرودگاه</span>
                </Option>
              </Select>
            </div>
          </Form.Item>
        </Col>
        <Col xs={8}>
          <Form.Item name="country">
            <div className="originalForm-item">
              <label title="کشور">کشور</label>
              <Select
                defaultValue="چین"
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
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                <Option
                  value="
                                   چین
                                "
                >
                  <img
                    src="https://festatic.freightos.com/flags/1x1/cn.svg"
                    className="option_img"
                    alt=""
                  />
                  <span> چین</span>
                </Option>
                <Option value="آرژانتین">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/255px-Flag_of_Argentina.svg.png"
                    className="option_img"
                    alt=""
                  />
                  <span> آرژانتین</span>
                </Option>
              </Select>
            </div>
          </Form.Item>
        </Col>
        <Col xs={8}>
          <Form.Item name="address">
            <div className="originalForm-item">
              <label title="آدرس">آدرس</label>
              <Input
                placeholder="نام شهر یا کد پستی خود را وارد کنید"
                //   disabled={data}
                // onChange={onChangeFlightNumber}
              />
            </div>
          </Form.Item>
        </Col>
      </Row>
      <Divider className="originalForm-divider" />
      <Row className="originalForm-submit">
        <Button type="primary" size="middle">
          تایید
        </Button>
      </Row>
    </Form>
  );
};
export default OriginForm;
