import React, {useState} from 'react';
import {Row, Col, Button, Divider, Radio, Typography} from 'antd';
import {
  SearchOutlined,
  LoadingOutlined,
  InsertRowAboveOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import ExcelIcon from '../../assets/Icons/ExcelIcon';
import AirplaneIcon from '../../assets/Icons/AirplaneIcon';
import LocationIcon from '../../assets/Icons/LocationIcon';
import './History.scss';

const History = () => {
  const {Text} = Typography;
  const [loadingExportExcel, setLoadingExportExcel] = useState(false);
  return (
    <Row justify="center" className="history">
      <Col span={23}>
        <Row justify="space-between" className="history-switcher">
          <Col span={7}>
            <Row className="history-switcher-radio">
              <Radio.Group defaultValue="a" size="small">
                <Radio.Button value="a">اقدام مورد نیاز (0)</Radio.Button>
                <Radio.Button value="b">فعال (0)</Radio.Button>
                <Radio.Button value="c">همه (1)</Radio.Button>
                <Button
                  type="primary"
                  className="history-switcher-radio-button"
                >
                  <SearchOutlined />
                </Button>
              </Radio.Group>
            </Row>
          </Col>
          <Col span={8}>
            <Row justify="end" className="history-switcher-radio">
              <Button type="ghost" className="history-switcher-radio-button">
                {loadingExportExcel ? (
                  <LoadingOutlined className="history-switcher-radio-button-loading" />
                ) : (
                  <>
                    <Text className="history-switcher-radio-button-excel-text">
                      Excel
                    </Text>
                    <ExcelIcon />
                  </>
                )}
              </Button>
              <Radio.Group defaultValue="a" size="small">
                <Radio.Button value="a">
                  <MenuOutlined />
                </Radio.Button>
                <Radio.Button value="b">
                  <InsertRowAboveOutlined />
                </Radio.Button>
              </Radio.Group>
            </Row>
          </Col>
        </Row>
        <Divider></Divider>
        <Row className="history-container">
          <Col span={24}>
            <Row className="history-container-header">
              <Col>
                <Row
                  className="history-container-header-box aiplaneIcon"
                  justify="center"
                >
                  <AirplaneIcon />
                </Row>
              </Col>
              <Col span={6}>
                <Row
                  className="history-container-header-box serial"
                  align="middle"
                >
                  <Col span={24}>
                    <Row>
                      <Text className="history-container-header-box-serialOfOrder1">
                        #S220326001087
                      </Text>
                    </Row>
                  </Col>
                  <Col span={24}>
                    <Row>
                      <Text className="history-container-header-box-serialOfOrder2">
                        #S220326001087
                      </Text>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col style={{flex: 1}}>
                <Row
                  className="history-container-header-box serial"
                  align="middle"
                >
                  <Text className="history-container-header-box-serialOfOrder1">
                    نام خریدار: pooriadaloochi@gmail.com
                  </Text>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <Row className="history-container-status" justify="space-between">
              <Col span={6}>
                <Row>
                  <Col span={24}>
                    <Text className="history-container-status-title">
                      وضعیت
                    </Text>
                  </Col>
                  <Col span={24}>
                    <Row align="middle">
                      <div className="history-container-status-circle"></div>
                      <Text className="history-container-status-booking">
                        رزرو لغو شد
                      </Text>
                    </Row>
                  </Col>
                  <Col span={24}>
                    <Text className="history-container-status-getStart">
                      با یک محموله جدید شروع کنید
                    </Text>
                  </Col>
                </Row>
              </Col>
              <Col span={11}>
                <Row>
                  <Col span={12}>
                    <Row>
                      <Col span={6}>
                        <Row>
                          <Text className="history-container-status-title">
                            مبدا و مقصد
                          </Text>
                        </Row>
                      </Col>
                      <Col span={18}></Col>
                    </Row>
                    <Row>
                      <Col>
                        <Row>
                          <Col>
                            <div className="circleOrigin"></div>
                          </Col>
                          <Col span={24}>
                            <Row
                              style={{width: '10px', height: '10px'}}
                              justify="center"
                              align="middle"
                            >
                              <div className="dashDivider" />
                            </Row>
                          </Col>
                          <Col span={24}>
                            <Row justify="start" className="locationIcon">
                              <LocationIcon />
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                      <Col span={16}>
                        <Row>
                          <Text className="history-container-status-getStart origin">
                            تهران
                          </Text>
                        </Row>
                        <Row>
                          <Text className="history-container-status-getStart destination">
                            مشهد
                          </Text>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                  <Col span={12}>
                    <Row>
                      <Text className="history-container-status-title">
                        بار
                      </Text>
                    </Row>

                    <Row>
                      <Text className="history-container-status-getStart">
                        پالت، 0 CFT، 1 LB
                      </Text>
                    </Row>
                    <Row>
                      <Text className="history-container-status-getStart">
                        ارزش 1 میلیون تومان
                      </Text>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="history-container-table">+</Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
export default History;
