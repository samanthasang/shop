import {Row, Col, Card, Button, Form, Input, Checkbox, Divider} from 'antd';
import {
  RightOutlined,
  GoogleOutlined,
  UserOutlined,
  LockOutlined,
} from '@ant-design/icons';
import {Link} from 'react-router-dom';

import MyCommoditiesForm from './Components/MyCommoditiesForm';
import {useState} from 'react';

const {Meta} = Card;
const MyCommodities = () => {
  const [showProfile, setShowProfile] = useState(true);
  const [editProfile, setEditProfile] = useState(false);
  const [editPassword, setEditPassword] = useState(false);


  return (
    <div className="site-card-wrapper" style={{width: '100%'}}>
      <Row>
        <Col span={24}>
          <Card span={20} offset={2} style={{backgroundColor: 'transparent'}}>
            <a href="/mysetting" style={{marginRight: '3em'}}>
              <RightOutlined /> بازگشت به تنظیمات
            </a>
          </Card> 
          <MyCommoditiesForm  />
        </Col>
      </Row>
    </div>
  );
};


export default MyCommodities;
