import { Row, Col, Card,Table, Tag, Space, Button, Form, Input, Checkbox, Divider } from 'antd';
import { GoogleOutlined, UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Meta } = Card;
const DetailesTable = () => {

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
  <div className="site-card-wrapper" style={{ width: "100%", marginTop: "50px" }} >
    <Row  >
      <Col span={22} offset={1}>
        <Card title="Card title">
            <Card >
            <Table columns={columns} dataSource={data}  extra={<a href="#">More</a>}/>
            </Card>
            <Card
               
                >
            <Table columns={passcolumns} dataSource={passdata} />
            </Card>
        </Card>

      </Col>
    </Row>
  </div>
  );
};


export default DetailesTable;