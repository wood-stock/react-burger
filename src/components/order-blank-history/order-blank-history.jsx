import style from './order-blank-history.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
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
            <div className={style.pict} style={{ zIndex: 10 }}>
              <img
                className={style.img}
                src='https://code.s3.yandex.net/react/code/bun-02-mobile.png'
                alt=''
              />
            </div>
            <div className={style.pict} style={{ left: -15, zIndex: 9 }}>
              <img
                className={style.img}
                src='https://code.s3.yandex.net/react/code/meat-04-mobile.png'
                alt=''
              />
            </div>
            <div className={style.pict} style={{ left: -30, zIndex: 8 }}>
              <img
                className={style.img}
                src='https://code.s3.yandex.net/react/code/sauce-02-mobile.png'
                alt=''
              />
            </div>
          </div>
        </div>
        <div className={`${style.price} text text_type_digits-default`}>
          <span>580</span> <CurrencyIcon type='primary' />
        </div>
      </div>
    </div>
  );
};
