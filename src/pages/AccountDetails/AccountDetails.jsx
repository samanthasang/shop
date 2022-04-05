import {Row, Col, Card, Button, Form, Input, Checkbox, Divider} from 'antd';
import {
  RightOutlined,
  GoogleOutlined,
  UserOutlined,
  LockOutlined,
} from '@ant-design/icons';
import {Link} from 'react-router-dom';

import DetailesTable from './Components/DetailesTable';
import PasswordForm from './Components/PasswordForm';
import ProfileForm from './Components/ProfileForm';
import {useState} from 'react';

const {Meta} = Card;
const AccountDetails = () => {
  const [showProfile, setShowProfile] = useState(true);
  const [editProfile, setEditProfile] = useState(false);
  const [editPassword, setEditPassword] = useState(false);

  const showProfileCard = () => {
    setEditProfile(false);
    setEditPassword(false);
    setShowProfile(true);
  };
  const showProfileEditCard = () => {
    setEditProfile(true);
    setShowProfile(false);
  };
  const showPasswordEditCard = () => {
    setEditPassword(true);
    setShowProfile(false);
  };

  return (
    <div className="site-card-wrapper" style={{width: '100%'}}>
      <Row>
        <Col span={24}>
          <Card span={20} offset={2} style={{backgroundColor: 'transparent'}}>
            <a href="/mysetting" style={{marginRight: '3em'}}>
              <RightOutlined /> بازگشت به تنظیمات
            </a>
          </Card>
          {showProfile && (
            <DetailesTable
              showProfileEditCard={showProfileEditCard}
              showPasswordEditCard={showPasswordEditCard}
            />
          )}
          {editProfile && <ProfileForm showProfileCard={showProfileCard} />}
          {editPassword && <PasswordForm showProfileCard={showProfileCard} />}
        </Col>
      </Row>
    </div>
  );
};

export default AccountDetails;
