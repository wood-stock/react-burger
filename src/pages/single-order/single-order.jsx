import style from './single-order.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
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
        <li className={style.item}>
          <div className={style.pict}>
            <img
              className={style.img}
              src='https://code.s3.yandex.net/react/code/bun-02-mobile.png'
              alt=''
            />
          </div>
          <div className={`${style.name} text text_type_main-default`}>
            Флюоресцентная булка R2-D3
          </div>
          <div className={`${style.price} text text_type_digits-default`}>
            <span>2 x 20</span>
            <CurrencyIcon type='primary' />
          </div>
        </li>
        <li className={style.item}>
          <div className={style.pict}>
            <img
              className={style.img}
              src='https://code.s3.yandex.net/react/code/bun-02-mobile.png'
              alt=''
            />
          </div>
          <div className={`${style.name} text text_type_main-default`}>
            Флюоресцентная булка R2-D3
          </div>
          <div className={`${style.price} text text_type_digits-default`}>
            <span>2 x 20</span>
            <CurrencyIcon type='primary' />
          </div>
        </li>
        <li className={style.item}>
          <div className={style.pict}>
            <img
              className={style.img}
              src='https://code.s3.yandex.net/react/code/bun-02-mobile.png'
              alt=''
            />
          </div>
          <div className={`${style.name} text text_type_main-default`}>
            Флюоресцентная булка R2-D3
          </div>
          <div className={`${style.price} text text_type_digits-default`}>
            <span>2 x 20</span>
            <CurrencyIcon type='primary' />
          </div>
        </li>
        <li className={style.item}>
          <div className={style.pict}>
            <img
              className={style.img}
              src='https://code.s3.yandex.net/react/code/bun-02-mobile.png'
              alt=''
            />
          </div>
          <div className={`${style.name} text text_type_main-default`}>
            Флюоресцентная булка R2-D3
          </div>
          <div className={`${style.price} text text_type_digits-default`}>
            <span>2 x 20</span>
            <CurrencyIcon type='primary' />
          </div>
        </li>
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
