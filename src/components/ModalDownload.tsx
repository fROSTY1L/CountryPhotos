import { useState } from 'react';
import { Button, Dropdown, MenuProps, Modal, Space } from 'antd';
import { DownOutlined, SaveOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setDownloadResolution } from '../store/DownloadReducer';

const ModalDownload = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [resolutionName, setResolutionName] = useState('Оригинальный');
  const downloadResolution = useSelector((state: RootState) => state.downloadResolution.resolution);
  const selectedPhoto = useSelector((state: RootState) => state.selectedPhoto.url);
  const dispatch = useDispatch();

  const downloadImage = async (imageName: string): Promise<void> => {
    const imageUrl = 'https://images.pexels.com/photos/' + selectedPhoto + '/pexels-photo-' + selectedPhoto + '.jpeg' + downloadResolution;
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = imageName;
      document.body.appendChild(link);
      link.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(link);
    } catch (error) {
      console.error('Ошибка при загрузке изображения:', error);
    }
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    switch (e.key) {
      case 'large':
        setResolutionName('Большой');
        dispatch(setDownloadResolution('?auto=compress&cs=tinysrgb&h=650&w=940'));
        break;
      case 'origin':
        setResolutionName('Оригинальный');
        dispatch(setDownloadResolution(''));
        break;
      case 'medium':
        setResolutionName('Средний');
        dispatch(setDownloadResolution('?auto=compress&cs=tinysrgb&h=350'));
        break;
      case 'small':
        setResolutionName('Маленький');
        dispatch(setDownloadResolution('?auto=compress&cs=tinysrgb&h=130'));
        break;
    }
  };

  const items: MenuProps['items'] = [
    {
      label: 'Большой',
      key: 'large',
    },
    {
      label: 'Оригинальный',
      key: 'origin',
    },
    {
      label: 'Средний',
      key: 'medium',
    },
    {
      label: 'Маленький',
      key: 'small',
    },
  ];

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <>
      <SaveOutlined style={{ fontSize: '3vh' }} onClick={showModal} />
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button
            type="primary"
            onClick={() => downloadImage(selectedPhoto)} // Используем анонимную функцию
          >
            Загрузить
          </Button>,
          <Button onClick={handleCancel}>Отменить</Button>,
        ]}
      >
        <p>Выберите размер фотографии, которую следует загрузить</p>
        <Dropdown menu={menuProps}>
          <Button>
            <Space>
              {resolutionName}
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      </Modal>
    </>
  );
};

export default ModalDownload;
