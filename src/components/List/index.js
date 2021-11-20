import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';

import { selectorMinPrice, selectorProducts } from '../../services/products/selectors';
import { selectorIsLoading } from '../../services/overlay/selectors';
import { getProducts } from '../../services/products/operations';
import { Card, Loader, Content } from './components';

export const List = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const listProducts = useSelector(selectorProducts);
  const isLoading = useSelector(selectorIsLoading);
  const productMinPrice = useSelector(selectorMinPrice);
  const [isModal, setIsModal] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleModal = () => setIsModal(!isModal);
  const handleModalData = (item) => () => {
    setModalData(item);
    handleModal();
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.container}>
          {isLoading && <Loader />}
          <div className={styles.list}>
            {!!listProducts &&
              listProducts.map((item, index) => (
                <Card key={item.id ?? index} item={item} handleModalData={handleModalData} />
              ))}
          </div>
          {isModal && (
            <Modal
              ariaHideApp={false}
              isOpen={isModal}
              onRequestClose={handleModal}
              className={styles.mymodal}
              overlayClassName={styles.myoverlay}
            >
              <Content item={modalData} handleClose={handleModal} />
            </Modal>
          )}
          <button className={styles.button_cheapest} onClick={handleModalData(productMinPrice)}>
            Buy cheapest
          </button>
        </div>
      )}
    </>
  );
};
