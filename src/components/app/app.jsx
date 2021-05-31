import { useEffect, useState } from 'react';
import style from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import ModalOverlay from '../modal-overlay/modal-overlay';
import Modal from '../modal/modal';
import OrderDetails from '../order-datails/order-details';
import IngredientDetails from '../ingredient-details/ingredient-details';

const App = () => {
  const [data, setData] = useState([]);
  const [details, setDetails] = useState(null);
  const [modalOpened, setModalOpened] = useState(false);
  const [orderButtonIsPush, setOrderButtonIsPush] = useState(false);

  const openModal = () => setModalOpened(true);
  const closeModal = () => {
    setModalOpened(false);
    setOrderButtonIsPush(false);
  };
  const showIngredientDetails = (i) => {
    setDetails(() => i);
    openModal();
  };
  const pushOrderButton = () => {
    setOrderButtonIsPush(true);
    openModal();
  };

  const pushEscForClose = (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  const url = 'https://norma.nomoreparties.space/api/ingredients';
  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.ok) return response.json();
        else return Promise.reject(response.status);
      })
      .then((response) => setData(response.data))
      .catch((error) => console.log(error + ' all broke'));
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', pushEscForClose);
    return () => {
      document.removeEventListener('keydown', pushEscForClose);
    };
  });
  return (
    <>
      <AppHeader />
      <main className={style.main}>
        <BurgerIngredients
          items={data}
          showIngredientDetails={showIngredientDetails}
        />
        <BurgerConstructor items={data} pushOrderButton={pushOrderButton} />
        {modalOpened && (
          <ModalOverlay
            closeModal={closeModal}
            orderButtonIsPush={orderButtonIsPush}
          >
            <Modal
              closeModal={closeModal}
              headerText={!orderButtonIsPush && 'Детали ингредиента'}
            >
              {orderButtonIsPush && <OrderDetails />}
              {!orderButtonIsPush && <IngredientDetails {...data[details]} />}
            </Modal>
          </ModalOverlay>
        )}
      </main>
    </>
  );
};

export default App;
