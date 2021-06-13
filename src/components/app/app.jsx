import { useEffect, useState } from 'react';
import style from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import IngredientDetails from '../ingredient-details/ingredient-details';
import {
  BurgerIngredientsContext,
  OrderIdContext,
  ModalContext,
} from '../../services/appContext';

const App = () => {
  const [burgerIngredients, setBurgerIngredients] = useState([]);
  const [ingredient, setIngredient] = useState(null);
  const [modalOpened, setModalOpened] = useState(false);
  const [orderButtonIsPush, setOrderButtonIsPush] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const openModal = () => setModalOpened(true);
  const closeModal = () => {
    setModalOpened(false);
    setOrderButtonIsPush(false);
    setOrderId(null);
    setIngredient();
  };
  const showIngredientDetails = (i) => {
    setIngredient(() => i);
    openModal();
  };
  const pushOrderButton = () => {
    setOrderButtonIsPush(true);
    openModal();
  };

  const pushEscForClose = (e) => {
    if (e.key === 'Escape') {
      closeModal();
      setOrderId();
      setIngredient();
    }
  };

  const url = 'https://norma.nomoreparties.space/api/ingredients';
  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.ok) return response.json();
        else return Promise.reject(response.status);
      })
      .then((response) => setBurgerIngredients(response.data))
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
        <BurgerIngredientsContext.Provider
          value={{
            burgerIngredients,
            ingredient,
            showIngredientDetails,
          }}
        >
          <BurgerIngredients />
          <OrderIdContext.Provider
            value={{ orderId, setOrderId, pushOrderButton }}
          >
            {burgerIngredients.length && <BurgerConstructor />}
            <ModalContext.Provider value={{ closeModal }}>
              {modalOpened && (
                <Modal headerText={!orderButtonIsPush && 'Детали ингредиента'}>
                  {orderId && <OrderDetails />}
                  {!orderButtonIsPush && <IngredientDetails />}
                </Modal>
              )}
            </ModalContext.Provider>
          </OrderIdContext.Provider>
        </BurgerIngredientsContext.Provider>
      </main>
    </>
  );
};

export default App;
