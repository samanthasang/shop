import { Row, Col, Card, Skeleton, Avatar, Table, Tag, Space, Button, Form, Input, Checkbox, Divider } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined, GoogleOutlined, UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Meta } = Card;
const DetailesTable = (props) => {

    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Company name',
          dataIndex: 'companyname',
          key: 'companyname',
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: 'Phone Number',
          dataIndex: 'phonenumber',
          key: 'phonenumber',
        },
    ]
    const passcolumns = [
        {
          title: 'Password',
          dataIndex: 'password',
          key: 'password',
        },
    ]
    const data = [
        {
          key: '1',
          name: 'samantha sang',
          companyname: 'samanthasang70@gmail.com',
          email: 'samanthasang70@gmail.com',
          phonenumber: '09100215643',
        },
      ];
    const passdata = [
        {
          key: '1',
          password: '******',
        },
      ];


  return (
  <div className="site-card-wrapper" style={{ width: "100%" }} >
    <Row  >
      <Col span={22} offset={1}>
        <Card title="پروفایل کاربری">
            <Card >

            <div style={{ display: 'inline-block', width: "20%",float: "rigth" }} >
              <p>نام</p>
              <p>samantha sang</p>
              </div>
            <div style={{ display: 'inline-block', width: "25%",float: "rigth" }} >
              <p>نام شرکت</p>
              <p>	samanthasang70@gmail.com</p>
              </div>
            <div style={{ display: 'inline-block', width: "25%",float: "rigth" }} >
              <p>ایمیل</p>
              <p>	samanthasang70@gmail.com</p>
              </div>
            <div style={{ display: 'inline-block', width: "20%",float: "rigth" }} >
              <p>شماره تماس</p>
              <p>09100215643</p>
              </div>
              <Button onClick={props.showProfileEditCard} style={{ width: "10px",float: "left", marginTop: '15px' }} shape="circle" icon={<EditOutlined />} />
            </Card>
            <Card span={12}>
              <div style={{ display: 'inline-block', width: "90%",float: "rigth" }} >
                <p>رمز عبور</p>
                <p>Password</p>
              </div>
              <Button onClick={props.showPasswordEditCard} style={{ width: "10px",float: "left", marginTop: '15px' }} shape="circle" icon={<EditOutlined />} />

            {/* <Table columns={passcolumns} dataSource={passdata} /> */}
            </Card>
        
        </Card>

      </Col>
    </Row>
  </div>
  );
};


export default DetailesTable;