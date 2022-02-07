import React, {useState} from 'react';
import {Button} from 'antd';
import ModalForm from './components/ModalForm';
import './Home.scss';

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };
  const onCancelModal = () => {
    setModalVisible(false);
  };
  return (
    <>
      <div className="Home">
        <Button type="primary" onClick={handleOpenModal}>
          exmaple for Open Form in Modal
        </Button>
      </div>
      <ModalForm visible={modalVisible} onCancel={onCancelModal} />
    </>
  );
};
export default Home;
