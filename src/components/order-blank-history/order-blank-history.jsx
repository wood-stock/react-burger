import style from './order-blank-history.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import IconIngredient from '../icon-ingredient/icon-ingredient';
export const OrderBlankHistory = () => {
  return (
    <div className={style.base}>
      <div className={style.id}>
        <div className='text text_type_digits-default'>#034535</div>
        <div className='text text_type_main-default text_color_inactive'>
          Сегодня, 16:20 i-GMT+3
        </div>
      </div>

      <div className='text text_type_main-medium pt-6'>
        Death Star Starship Main бургер
      </div>
      <div className='text text_type_main-default pt-2'>Создан</div>
      <div className={`${style.info} pt-6`}>
        <div>
          <div className={style.group}>
            <IconIngredient style={{ zIndex: 10 }} />
            <IconIngredient style={{ left: -15, zIndex: 9 }} />
            <IconIngredient style={{ left: -30, zIndex: 8 }} />
          </div>
        </div>
        <div className={`${style.price} text text_type_digits-default`}>
          <span>580</span> <CurrencyIcon type='primary' />
        </div>
      </div>
    </div>
  );
};
