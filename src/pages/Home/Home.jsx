import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
// import ModalForm from './components/ModalForm';
// import MyForm from './components/MyForm';
import OriginForm from './components/OriginForm';
// import DestinationFrom from './components/DestinationFrom';
// import HomeApiClass from './../../apis/home';
// import {handleNotification} from '../../services/Notifications';
import LoadForm from './components/LoadForm';
import GoodsForm from './components/GoodsForm';
import {useDispatch} from 'react-redux';
import {getFirstFormData} from '../../redux/action/home';
import {Row, Col, Button, Divider, Popover} from 'antd';
import {
  ExclamationCircleOutlined,
  ArrowLeftOutlined,
  CheckOutlined,
} from '@ant-design/icons';
import './Home.scss';
const Home = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [originFormState, setOriginFormState] = useState(0);
  const [originVisibleForm, setOriginVisibleForm] = useState(false);
  const [originFormData, setOriginFormData] = useState(null);
  //
  const [destinationFormState, setDestinationFormState] = useState(0);
  const [destinationVisibleForm, setDestinationVisibleForm] = useState(false);
  const [destinationFormData, setDestinationFormData] = useState(null);
  //
  const [goodFormState, setGoodFormState] = useState(0);
  const [goodVisibleForm, setGoodVisibleForm] = useState(false);
  const [goodFormData, setGoodFormData] = useState(null);
  //
  // const [loadFormState, setLoadFormState] = useState(0);
  const [loadFormData, setLoadFormData] = useState(null);
  const [confirmButtonActive, setConfirmButtonActive] = useState(true);
  //
  useEffect(() => {
    if (!originFormState && originVisibleForm) {
      if (originFormData) setOriginFormState(1);
      else setOriginFormState(2);
    }
  }, [originVisibleForm]);

  useEffect(() => {
    if (!destinationFormState && destinationVisibleForm) {
      if (destinationFormData) setDestinationFormState(1);
      else setDestinationFormState(2);
    }
  }, [destinationVisibleForm]);

  useEffect(() => {
    if (!goodFormState && goodVisibleForm) {
      if (goodFormData) setGoodFormState(1);
      else setGoodFormState(2);
    }
  }, [goodVisibleForm]);

  useEffect(() => {
    if (originFormData && destinationFormData && goodFormData)
      setConfirmButtonActive(true);
    else setConfirmButtonActive(false);
  }, [originFormData, destinationFormData, loadFormData, goodFormData]);

  const handleChangeOriginVisible = () => {
    setOriginVisibleForm(!originVisibleForm);
  };
  const handleChangeDestinationVisible = () => {
    setDestinationVisibleForm(!destinationVisibleForm);
  };
  const handleChangeGoodVisible = () => {
    setGoodVisibleForm(!goodVisibleForm);
  };

  const handleSubmitOriginForm = values => {
    setOriginFormData(values);
    if (values.type && values.country && values.address) {
      setOriginVisibleForm(false);
      setOriginFormState(1);
    } else setOriginFormState(2);
  };

  const handleSubmitDestinationForm = values => {
    setDestinationFormData(values);
    if (values.type && values.country && values.address) {
      setDestinationVisibleForm(false);
      setDestinationFormState(1);
    } else setDestinationFormState(2);
  };
  const handleSubmitGoodForm = values => {
    setGoodFormData(values);
    if (values.cost && values.unit && values.readyGood) {
      setGoodVisibleForm(false);
      setGoodFormState(1);
    } else setGoodFormState(2);
  };
  const handlesubmitAllFormData = () => {
    const Formdata = {
      origin: originFormData,
      destination: destinationFormData,
      good: goodFormData,
    };
    dispatch(getFirstFormData(Formdata));
    history.push('/result');
  };
  return (
    <section>
      <div className="Home">
        <div className="Home-header">
          <h2>حمل و نقل که فقط کار می کند</h2>
          <h3>
            مقایسه، رزرو و مدیریت حمل و نقل خود در میان برترین ارائه دهندگان
            تدارکات در جهان، همه در یک پلت فرم
          </h3>
        </div>
        <div className="Home-center">
          <div className="Home-center-Forms">
            <div className="Home-center-Forms-details">
              <Row className="centerMenu">
                <Col span={5}>
                  <Popover
                    content={
                      <OriginForm
                        origin={true}
                        visible={originVisibleForm}
                        onConfirmOrigin={handleSubmitOriginForm}
                      />
                    }
                    placement="bottomRight"
                    trigger={'click'}
                    visible={originVisibleForm}
                    onVisibleChange={handleChangeOriginVisible}
                  >
                    <div className="centerMenu_origin">
                      <div className="centerMenu_origin_top">
                        <h5 style={{color: originFormState === 2 && 'red'}}>
                          اصلی
                        </h5>
                        {originFormState ? (
                          originFormState === 1 ? (
                            <CheckOutlined style={{color: 'green'}} />
                          ) : (
                            <ExclamationCircleOutlined style={{color: 'red'}} />
                          )
                        ) : null}
                      </div>
                      <span style={{color: 'red'}}></span>
                      <p style={{color: 'gray'}}>
                        {originFormState && originFormData
                          ? `${
                              originFormData?.type
                                ? `${originFormData.type}`
                                : ''
                            }${
                              originFormData?.country
                                ? ` | ${originFormData.country} `
                                : ' '
                            }${
                              originFormData?.address
                                ? ` | ${originFormData.address} `
                                : ' '
                            }`
                          : 'از کجا حمل می کنید؟'}
                      </p>
                    </div>
                  </Popover>
                </Col>
                <Divider type="vertical" />
                <Col span={5}>
                  <Popover
                    content={
                      <OriginForm
                        origin={false}
                        onConfirmDestination={handleSubmitDestinationForm}
                        visible={destinationVisibleForm}
                      />
                    }
                    placement="bottomRight"
                    trigger={'click'}
                    visible={destinationVisibleForm}
                    onVisibleChange={handleChangeDestinationVisible}
                  >
                    <div className="centerMenu_origin">
                      <div className="centerMenu_origin_top">
                        <h5
                          style={{color: destinationFormState === 2 && 'red'}}
                        >
                          مقصد
                        </h5>
                        {destinationFormState ? (
                          destinationFormState === 1 ? (
                            <CheckOutlined style={{color: 'green'}} />
                          ) : (
                            <ExclamationCircleOutlined style={{color: 'red'}} />
                          )
                        ) : null}
                      </div>
                      <span style={{color: 'red'}}></span>
                      <p style={{color: 'gray'}}>
                        {destinationFormState && destinationFormData
                          ? `${
                              destinationFormData.type
                                ? `${destinationFormData.type}`
                                : null
                            }${
                              destinationFormData.country
                                ? ` | ${destinationFormData.country} `
                                : ' '
                            }${
                              destinationFormData.address
                                ? ` | ${destinationFormData.address} `
                                : ' '
                            }`
                          : 'به کجا حمل می کنید؟'}
                      </p>
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
                    content={
                      <GoodsForm
                        visible={goodVisibleForm}
                        onConfirm={handleSubmitGoodForm}
                      />
                    }
                    placement="bottomLeft"
                    trigger={'click'}
                    visible={goodVisibleForm}
                    onVisibleChange={handleChangeGoodVisible}
                  >
                    <div className="centerMenu_origin">
                      <div className="centerMenu_origin_top">
                        <h5 style={{color: goodFormState === 2 && 'red'}}>
                          کالاها و خدمات
                        </h5>
                        {goodFormState ? (
                          goodFormState === 1 ? (
                            <CheckOutlined style={{color: 'green'}} />
                          ) : (
                            <ExclamationCircleOutlined style={{color: 'red'}} />
                          )
                        ) : null}
                      </div>
                      <span style={{color: 'red'}}></span>
                      <p style={{color: 'gray'}}>از اجناس خود به ما بگویید</p>
                    </div>
                  </Popover>
                </Col>
                <Divider type="vertical" />
                <Col span={2}>
                  <div id="small-col-div">
                    {confirmButtonActive ? (
                      <div onClick={handlesubmitAllFormData}>
                        <ArrowLeftOutlined />
                      </div>
                    ) : (
                      <ArrowLeftOutlined
                        style={{color: '#68b8fa', cursor: 'not-allowed'}}
                      />
                    )}
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <div className="Home-center-descriptions">
            <div className="Home-center-descriptions-imagesPart">
              <Row>
                <Col
                  span={8}
                  className="Home-center-descriptions-imagesPart-Box"
                >
                  <div className="Home-center-descriptions-imagesPart-Box-img">
                    <img
                      src="https://www.freightos.com/wp-content/uploads/2021/03/11-03.png"
                      className="Home-center-descriptions-imagesPart-Box-img-ThisImg"
                      alt=""
                    />
                  </div>
                  <div className="Home-center-descriptions-imagesPart-Box-text">
                    <h3>حمل و نقلی که فقط کار می کند</h3>
                    <p>
                      همه چیزهایی که باید در مورد حمل و نقل بدانید، از کدهای HS
                      گرفته تا اینکوترمز، همه در یک مکان.
                    </p>
                    <Button className="ant-btn ant-btn-link" type="link">
                      <span>ادامه مطلب</span>
                    </Button>
                  </div>
                </Col>
                <Col
                  span={8}
                  className="Home-center-descriptions-imagesPart-Box"
                >
                  <div className="Home-center-descriptions-imagesPart-Box-img">
                    <img
                      src="https://www.freightos.com/wp-content/uploads/2021/03/11-02.png"
                      className="Home-center-descriptions-imagesPart-Box-img-ThisImg"
                      alt=""
                    />
                  </div>
                  <div className="Home-center-descriptions-imagesPart-Box-text">
                    <h3>حمل و نقلی که فقط کار می کند</h3>
                    <p>
                      همه چیزهایی که باید در مورد حمل و نقل بدانید، از کدهای HS
                      گرفته تا اینکوترمز، همه در یک مکان.
                    </p>
                    <Button className="ant-btn ant-btn-link" type="link">
                      <span>ادامه مطلب</span>
                    </Button>
                  </div>
                </Col>
                <Col
                  span={8}
                  className="Home-center-descriptions-imagesPart-Box"
                >
                  <div className="Home-center-descriptions-imagesPart-Box-img">
                    <img
                      src="https://www.freightos.com/wp-content/uploads/2021/03/11-01.png"
                      className="Home-center-descriptions-imagesPart-Box-img-ThisImg"
                      alt=""
                    />
                  </div>
                  <div className="Home-center-descriptions-imagesPart-Box-text">
                    <h3>حمل و نقلی که فقط کار می کند</h3>
                    <p>
                      همه چیزهایی که باید در مورد حمل و نقل بدانید، از کدهای HS
                      گرفته تا اینکوترمز، همه در یک مکان.
                    </p>
                    <Button className="ant-btn ant-btn-link" type="link">
                      <span>ادامه مطلب</span>
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
