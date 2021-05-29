import { useEffect, useState } from 'react';
import style from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import ModalOverlay from '../modal-overlay/modal-overlay';

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

  const url = 'https://norma.nomoreparties.space/api/ingredients';
  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.ok) return response.json();
        else console.log('can not connect');
      })
      .then((response) => setData(response.data))
      .catch((error) => console.log(error + ' all broke'));
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        return closeModal();
      }
    });
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
            item={data[details]}
          />
        )}
      </main>
    </>
  );
};

export default App;
