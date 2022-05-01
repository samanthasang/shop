import { Row, Col, Card, Button, Form, Input, Checkbox, Divider } from 'antd';
import { GoogleOutlined, UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Meta } = Card;
const MySetting = () => {
  return (<div className="site-card-wrapper" style={{ width: "100%", marginTop: "150px",textAlign: "center" }} >
    <Row justify="space-around" gutter={16}>
      <Col span={7} className="gutter-row"  style={{ textAlign: "center" }}>
        <Card style={{ textAlign: "center" }}
    hoverable >

<Link to='/accountdetails'>
          <img style={{ textAlign: "center" }}
        src="https://www.freightos.com/wp-content/uploads/2021/03/11-03.png"
        className="Home-center-descriptions-imagesPart-Box-img-ThisImg"
        alt=""
        />
      <p style={{ textAlign: "center", width: '100%', color: 'black', marginTop: '25px'}}> جزئیات حساب
    </p></Link>
        </Card>
      </Col>
      <Col span={7} className="gutter-row" style={{ textAlign: "center" }}>
        <Card style={{ textAlign: "center" }}
    hoverable >
        <Link to='/companyprofile'>
          <img style={{ textAlign: "center" }}
        src="https://www.freightos.com/wp-content/uploads/2021/03/11-02.png"
        className="Home-center-descriptions-imagesPart-Box-img-ThisImg"
        alt=""
        />
      <p style={{ textAlign: "center", width: '100%', color: 'black', marginTop: '25px'}}> نمایه شرکت
    </p></Link>
        </Card>
      </Col>
      <Col span={7} className="gutter-row" style={{ textAlign: "center" }}>
        <Card style={{ textAlign: "center" }}
    hoverable >
        <Link to='/mycommodities'>
          <img style={{ textAlign: "center" }} 
        src="https://www.freightos.com/wp-content/uploads/2021/03/11-01.png"
        className="Home-center-descriptions-imagesPart-Box-img-ThisImg"
        alt=""
        />
      <p style={{ textAlign: "center", width: '100%', color: 'black', marginTop: '25px'}}> کالاهای من
    </p></Link>
        </Card>
      </Col>
    </Row>
  </div>
  );
};


export default MySetting;