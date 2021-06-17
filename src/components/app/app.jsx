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
} from '../../services/appContext';

const App = () => {
  const [burgerIngredients, setBurgerIngredients] = useState([]);
  const [selectedIngredient, setSelectedIngredient] = useState(null);
  const [orderId, setOrderId] = useState(null);
  const closeModal = () => {
    setOrderId(null);
    setSelectedIngredient(null);
  };
  const showIngredientDetails = (item) => {
    setSelectedIngredient(() => item);
  };

  const closeModalsByEscape = (e) => {
    if (e.key === 'Escape') {
      closeModal();
      setOrderId(null);
      setSelectedIngredient(null);
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
      .catch((error) => console.log(`${error} all broke`));
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', closeModalsByEscape);
    return () => {
      document.removeEventListener('keydown', closeModalsByEscape);
    };
  });
  return (
    <>
      <AppHeader />
      <main className={style.main}>
        <BurgerIngredientsContext.Provider
          value={{
            burgerIngredients,
            selectedIngredient,
            showIngredientDetails,
          }}
        >
          {burgerIngredients.length ? (
            <>
              <BurgerIngredients />
              <OrderIdContext.Provider value={{ orderId, setOrderId }}>
                <BurgerConstructor />

                {selectedIngredient && (
                  <Modal
                    headerText='Детали ингредиента'
                    closeModal={closeModal}
                  >
                    <IngredientDetails />
                  </Modal>
                )}
                {orderId && (
                  <Modal closeModal={closeModal}>
                    <OrderDetails />
                  </Modal>
                )}
              </OrderIdContext.Provider>
            </>
          ) : (
            'LOAD...'
          )}
        </BurgerIngredientsContext.Provider>
      </main>
    </>
  );
};

export default App;
