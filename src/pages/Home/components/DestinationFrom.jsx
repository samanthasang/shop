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

const DestinationForm = ({ visible, onCancel }) => {


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
        // <div className="ant-dropdown ant-dropdown-placement-bottomLeft " style={{top:"10px",right:"-220px"}}>
        <Form
            className="Destination_Form_Style"
            id="addFlight"
            onFinish={onFinish}
            // form={form}
            name="addFlight"
            layout="horizontal"
            colon={false}
            onFieldsChange={handleWatchForm}
        >
            <Space direction="vertical" size="small" style={{ width: '100%' }}>
                <h3>به کجا حمل می کنید؟</h3>
                <div>
                    <Row>
                        <Col xs={8}>
                            <Form.Item
                             name="directionType"
                            style={{margin:"0 0 0 8px"}}
                             >
                                <div style={{ marginBottom: "10px" }}><label title="نوع">
                                    نوع
                                </label></div>
                                <div>
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
                                            option.children
                                                .toLowerCase()
                                                .indexOf(input.toLowerCase()) >= 0
                                        }
                                    >
                                        <Option value="
                                    کارخانه / انبار
                                " ><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_aaqJcmxmtU1J0JhUomamdJk_QfqWLyn5_JhV3dzQVBFGClyiWsnHNmpn26vGVQomZXk&usqp=CAU" className="option_img" ></img><span> کارخانه / انبار</span>
                                        </Option>
                                        <Option value="
                                             بندر / فرودگاه 
                                            " ><img src="https://cdn-icons-png.flaticon.com/512/8/8176.png" className="option_img" ></img><span> بندر / فرودگاه</span>
                                        </Option>
                                    </Select>
                                </div>
                            </Form.Item>
                        </Col>
                        <Col xs={8}>
                            <Form.Item 
                            name="directionType"
                            style={{margin:"0 0 0 8px"}}
                            >
                                <div style={{ marginBottom: "10px" }}><label title="کشور">
                                    کشور
                        </label></div>
                                <div>
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
                                            option.children
                                                .toLowerCase()
                                                .indexOf(input.toLowerCase()) >= 0
                                        }
                                    >
                                        <Option value="
                                   چین
                                " ><img src="https://festatic.freightos.com/flags/1x1/cn.svg" className="option_img" ></img><span> چین</span>
                                        </Option>
                                        <Option value="
                                        آرژانتین
                                    " ><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/255px-Flag_of_Argentina.svg.png" className="option_img" ></img><span> آرژانتین</span>
                                        </Option>
                                    </Select>
                                </div>
                            </Form.Item>
                        </Col>
                        <Col xs={8}>
                            <Form.Item
                                name="directionType"
                                rules={[
                                    {
                                        required: true,
                                        message: 'flightNumber is required',
                                    },
                                    {
                                        pattern: /^[0-9]*$/,
                                        message: 'flightNumber should be only number',
                                    },
                                ]}>
                                <div style={{ marginBottom: "10px" }}><label title="آدرس">
                                    آدرس
                        </label></div>
                                <div>
                                    <Input
                                        placeholder="نام شهر یا کد پستی خود را وارد کنید"
                                    //   disabled={data}
                                    // onChange={onChangeFlightNumber}
                                    />

                                </div>
                            </Form.Item>
                        </Col>
                    </Row>
                </div>

            </Space>
        </Form>
        // </div>
    )
}
export default DestinationForm;