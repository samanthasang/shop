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
import '../Home.scss'

dayjs.calendar('jalali');

const GoodsForm = ({ visible, onCancel }) => {


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
            // style={{ width: "800px", height: "100px", backgroundColor: "white",border:"1px solid gray" }}
            className="Goods_Form_Style"
            id="addFlight"
            onFinish={onFinish}
            // form={form}
            name="addFlight"
            layout="horizontal"
            colon={false}
            onFieldsChange={handleWatchForm}
        >
            <Space direction="vertical" size="small" style={{ width: '100%' }}>
                <h3>از کجا حمل می کنید؟</h3>
                <div>
                    <Row>
                        <Col xs={8}>
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
                        </Col>
                        <Col xs={8}>
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
                        </Col>
                        <Col xs={8}>
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
                        </Col>
                    </Row>
                </div>

            </Space>
        </Form>
    )
}
export default GoodsForm;