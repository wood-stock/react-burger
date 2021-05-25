import style from './app.module.css';
import { data } from '../../utils/data';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

const App = () => (
  <>
    <AppHeader />
    <main className={style.main}>
      <BurgerIngredients items={data} />
      <BurgerConstructor items={data} />
    </main>
  </>
);

export default App;
