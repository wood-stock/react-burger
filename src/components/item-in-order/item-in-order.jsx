import style from './item-in-order.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import IconIngredient from '../icon-ingredient/icon-ingredient';
const ItemInOrder = () => {
  return (
    <li className={style.item}>
      <IconIngredient />
      <div className={`${style.name} text text_type_main-default`}>
        Флюоресцентная булка R2-D3
      </div>
      <div className={`${style.price} text text_type_digits-default`}>
        <span>2 x 20</span>
        <CurrencyIcon type='primary' />
      </div>
    </li>
  );
};
export default ItemInOrder;
