import React,{useState} from 'react';
import Modal from 'antd/lib/modal/Modal';
import {Row, Col, Popover, Divider, Typography,Switch, Tooltip} from 'antd';
import {Link} from 'react-router-dom';
import OriginForm from '../../Home/components/OriginForm';
import GoodsForm from '../../Home/components/GoodsForm';
import LoadForm from '../../Home/components/LoadForm';
import {ExclamationCircleOutlined, ArrowLeftOutlined,QuestionCircleOutlined} from '@ant-design/icons';

const EditOrder = ({visible, onCancel}) => {
  const[CheckSwitch1,setCheckSwitch1]=useState(true);
  const[CheckSwitch2,setCheckSwitch2]=useState(true);
  const[CheckSwitch3,setCheckSwitch3]=useState(true);
  const[CheckSwitch4,setCheckSwitch4]=useState(true);
  const {Title,Text}=Typography
  return (
    <Modal
      width={'80%'}
      visible={visible}
      onCancel={onCancel}
      title={'Edit Order'}
      className="modalEdit"
      okText={'جستجوی مجدد'}
      cancelText={'انصراف'}
      cancelButtonProps={{type: 'danger'}}
    >
      <Row className="centerMenu">
        <Col span={5}>
          <Popover
            content={<OriginForm origin={true} />}
            placement="bottomRight"
            trigger={'click'}
          >
            <div className="centerMenu_origin">
              <div className="centerMenu_origin_top">
                <h5 style={{color: 'red'}}>اصلی</h5>
                <ExclamationCircleOutlined />
              </div>
              <span style={{color: 'red'}}></span>
              <p style={{color: 'gray'}}>کارخانه/ انبار</p>
            </div>
          </Popover>
        </Col>
        <Divider type="vertical" />
        <Col span={5}>
          <Popover
            content={<OriginForm origin={false} />}
            placement="bottomRight"
            trigger={'click'}
          >
            <div className="centerMenu_origin">
              <div className="centerMenu_origin_top">
                <h5>مقصد</h5>
              </div>
              <span style={{color: 'red'}}></span>
              <p style={{color: 'gray'}}>به کجا حمل می کنید؟</p>
            </div>
          </Popover>
        </Col>
        <Divider type="vertical" />
        <Col span={5}>
          <Popover
            content={<LoadForm />}
            placement="bottomRight"
            trigger={'click'}
          >
            <div className="centerMenu_origin">
              <div className="centerMenu_origin_top">
                <h5>بار</h5>
              </div>
              <span style={{color: 'red'}}></span>
              <p style={{color: 'gray'}}>چه چیزی ارسال می کنید؟</p>
            </div>
          </Popover>
        </Col>

        <Divider type="vertical" />
        <Col span={5}>
          <Popover
            content={<GoodsForm />}
            placement="bottomLeft"
            trigger={'click'}
          >
            <div className="centerMenu_origin">
              <div className="centerMenu_origin_top">
                <h5>کالاها و خدمات</h5>
              </div>
              <span style={{color: 'red'}}></span>
              <p style={{color: 'gray'}}>از اجناس خود به ما بگویید</p>
            </div>
          </Popover>
        </Col>
        <Divider type="vertical" />
        <Col span={2}>
          <div id="small-col-div">
            <Link to="/home">
              <ArrowLeftOutlined />
            </Link>
          </div>
        </Col>
      </Row>
      <Row className="centerMenu-recommendedServices">
      <Col span={8}><Title level={3}>خدمات توصیه شده</Title></Col>
      </Row>
      <Row><Col span={24}><Text>ما تمام خدماتی را که برای ارسال کالاهای خود از کارخانه/انبار به آدرس تجاری نیاز دارید انتخاب کرده ایم. لطفاً قبل از دریافت نتایج خود را بررسی و تأیید کنید.
      </Text></Col></Row>
      <Row><Col span={12} offset={12}><Switch defaultChecked={CheckSwitch1} onClick={()=>setCheckSwitch1(!CheckSwitch1)} className="Switch"></Switch>
      {CheckSwitch1 ? <Text>من با TSA به عنوان یک فرستنده شناخته شده تأیید شده ام</Text> : <Text>من یک فرستنده شناخته شده نیستم
      </Text>}<Popover content="کشتی‌های شناخته شده توسط TSA بررسی شده‌اند و می‌توانند نرخ‌های هوایی را برای هواپیماهای مسافربری و باری رزرو کنند. اگر نرخ مسافر را رزرو کنید و وضعیت شما به عنوان یک فرستنده شناخته شده تأیید نشده باشد، حمل و نقل شما لغو می شود.
      "><QuestionCircleOutlined className='questionCircle'/></Popover>
      </Col></Row>
      <Row><Col span={8}><Title level={5}>درب آسانسور</Title></Col></Row>
      <Row><Col span={12}><Switch defaultChecked={CheckSwitch2} onClick={()=>setCheckSwitch2(!CheckSwitch2)} className="Switch"></Switch>
      {CheckSwitch2 ? <Text>بله - در وانت بار یک درب آسانسور اضافه کنید
        </Text> : <Text>من یک فرستنده شناخته شده نیستم
      </Text>}</Col></Row>
      <Row><Col span={12}><Switch defaultChecked={CheckSwitch3} onClick={()=>setCheckSwitch3(!CheckSwitch3)} className="Switch"></Switch>
      {CheckSwitch3 ? <Text>بله - در هنگام تحویل یک درب آسانسور اضافه کنید </Text> : <Text>خیر - یک اسکله بارگیری در زمان تحویل وجود دارد
      </Text>}</Col></Row>
      <Row><Col span={12}><Title style={{display:"inline"}} level={5}>بیمه</Title><Popover content="حمل و نقل بدون بیمه خطرناک است. اگر تصمیم به خرید بیمه ندارید، مسئولیت هرگونه ادعای احتمالی برای اقلام گم شده یا آسیب دیده به عهده شما خواهد بود. کالاهای خود را از طریق ارائه دهنده شخص ثالث مورد اعتماد ما xcover.com پوشش دهید یا پوشش خود را ترتیب دهید."><QuestionCircleOutlined className='questionCircle'/></Popover>
      </Col></Row>
      <Row><Col span={24}><Switch defaultChecked={CheckSwitch4} onClick={()=>setCheckSwitch4(!CheckSwitch4)} className="Switch"></Switch>
      {CheckSwitch4 ? <Text>بله - بیمه اضافه کنید (ارزش ترکیبی کالا و هزینه های حمل و نقل اولیه تا 500 هزار دلار را پوشش می دهد، با 10 درصد کسر بیش از 5001 دلار)
        </Text> : <Text>خیر - من یا بیمه شده ام یا مسئولیت کامل محموله گم شده یا آسیب دیده را بر عهده می گیرم
      </Text>}</Col></Row>
    </Modal>
  );
};
export default EditOrder;
