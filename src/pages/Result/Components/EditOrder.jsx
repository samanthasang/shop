import React from 'react';
import Modal from 'antd/lib/modal/Modal';
import {Row, Col, Popover, Divider} from 'antd';
import {Link} from 'react-router-dom';
import OriginForm from '../../Home/components/OriginForm';
import GoodsForm from '../../Home/components/GoodsForm';
import LoadForm from '../../Home/components/LoadForm';
import {ExclamationCircleOutlined, ArrowLeftOutlined} from '@ant-design/icons';

const EditOrder = ({visible, onCancel}) => {
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
      <Row className="centerMenu-recommendedServices">askhhd</Row>
    </Modal>
  );
};
export default EditOrder;
