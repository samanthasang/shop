import React, { useState, useEffect } from "react";
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
    Divider,
    Tabs,
    Radio
} from 'antd';
import { DatePicker as DatePickerJalali } from 'antd-jalali';
import fa_IR from 'antd/lib/locale/fa_IR';
import dayjs from 'dayjs';
import '../Home.scss'

dayjs.calendar('jalali');

const LoadForm = ({ visible, onCancel }) => {


    const [form] = Form.useForm();
    const { Title } = Typography;
    const { Option } = Select;

    const { TabPane } = Tabs;
    const [RadioButtonvalue, setRadioButton] = useState(1);
    const RadioButtonOnChange = e => {
        setRadioButton(e.target.value);
    };

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
            className="Load_Form_Style"
            id="addFlight"
            onFinish={onFinish}
            // form={form}
            name="addFlight"
            layout="horizontal"
            colon={false}
            onFieldsChange={handleWatchForm}
        >
            <Space direction="vertical" size="small" style={{ width: '100%' }}>
                <h3>چه چیزی حمل می کنید؟</h3>
                <div style={{ display: "flex", flexDirection: "column" }}>

                    <Row>
                        <Tabs defaultActiveKey="2" >

                            <Col xs={8}></Col>
                            <TabPane
                                tab={
                                    <span>
                                        <img src="https://i.pinimg.com/originals/99/91/a4/9991a4b887eeee54f30b282f222a42a8.png" className="tab_img" />
                                        بار آزاد
                                        </span>
                                }
                                key="1"
                            >
                                <Radio.Group onChange={RadioButtonOnChange} value={RadioButtonvalue}>
                                    <Radio value={1}>محاسبه بر اساس نوع واحد</Radio>
                                    <Radio value={2}>محاسبه بر اساس کل حمل و نقد</Radio>
                                </Radio.Group>
                                <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
                                    <div style={{ width: "70%" }}>
                                        <h5 style={{ margin: "10px 0" }}>انواع دسته بندی</h5>

                                        <Radio.Group defaultValue="a" buttonStyle="solid">
                                            <Radio.Button value="a" style={{ marginLeft: "3px" }}>پالت ها</Radio.Button>
                                            <Radio.Button value="b">جعبه ها/ محفظه ها</Radio.Button>
                                        </Radio.Group>
                                    </div>
                                    <div style={{ width: "30%" }}>
                                        <h5 style={{ margin: "10px 0" }}># از واحد</h5>

                                        <Input
                                            defaultValue="1"
                                            type="number"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <h5 style={{ margin: "10px 0" }}>نوع پالت</h5>
                                    <Select
                                        style={{ width: "100%" }}
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
                                </div>
                                <div style={{ width: "100%",display:"flex",flexDirection:"row" }}>
                                    <div style={{ width: "70%" }}>
                                        <h5 style={{ margin: "10px 0" }}>ابعاد</h5>

                                        <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
                                                <Input
                                                    placeholder="L"
                                                    style={{ width: "20%", marginLeft: "1px" }}
                                                    type="number"
                                                
                                                />
                                                <Input
                                                    placeholder="W"
                                                    style={{ width: "20%", marginLeft: "1px" }}
                                                    type="number"
                                                   
                                                />
                                                <Input
                                                    placeholder="H"

                                                    style={{ width: "20%", marginLeft: "1px" }}
                                                    type="number"
                                                  
                                                />
                                                <Select
                                                    style={{ width: "25%" }}
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
                                        </div>
                                    </div>
                                    <div style={{width:"30%"}}>
                                    <h5 style={{ margin: "10px 0" }}>وزن</h5>
                                    <Input

                                    style={{ width: "40%", marginLeft: "1px" }}
                                    type="number"
                                
                                />
                                <Select
                                    style={{ width: "45%" }}
                                    defaultValue="KG"
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
                                    </div>
                                </div>
                                <Divider />
                                <Button type="primary" size="middle" disabled>تایید</Button>
                            </TabPane>
                            <Col xs={8}></Col>
                            <TabPane
                                tab={
                                    <span>
                                        <img src="https://static.thenounproject.com/png/1675892-200.png" className="tab_img" />
                                    کانتینرها
                               </span>
                                }
                                key="2"
                            >


                            </TabPane>
                            <Col xs={8}></Col>
                        </Tabs>
                    </Row>


                </div>
            </Space>
        </Form>
    )
}
export default LoadForm;