import style from './item-in-order.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import IconIngredient from '../icon-ingredient/icon-ingredient';
const ItemInOrder = ({ name, price, image_mobile }) => {
  return (
    <li className={style.item}>
      <IconIngredient img={image_mobile} />
      <div className={`${style.name} text text_type_main-default`}>{name}</div>
      <div className={`${style.price} text text_type_digits-default`}>
        <span>{price}</span>
        <CurrencyIcon type='primary' />
      </div>
    </li>
  );
};
export default ItemInOrder;
