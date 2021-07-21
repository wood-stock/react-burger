import style from './single-order.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ItemInOrder from '../../components/item-in-order/item-in-order';
const SingleOrder = () => {
  return (
    <div className={style.container}>
      <div className={`${style.id} text text_type_digits-default`}>#034533</div>
      <div className='text text_type_main-medium pt-10'>
        Black Hole Singularity острый бургер
      </div>
      <div className={`${style.status} text text_type_main-default pt-3`}>
        Выполнен
      </div>
      <div className='text text_type_main-medium pt-15'>Cотав:</div>
      <ul className={`${style.wrapper} pt-6`}>
        <ItemInOrder />
        <ItemInOrder />
        <ItemInOrder />
        <ItemInOrder />
        <ItemInOrder />
      </ul>
      <div className={`${style.footer} pt-10`}>
        <span className='text text_type_main-default text_color_inactive'>
          Вчера, 13:50 i-GMT+3
        </span>
        <span className={`${style.price} text text_type_digits-default`}>
          510
          <CurrencyIcon type='primary' />
        </span>
      </div>
    </div>
  );
};
export default SingleOrder;
