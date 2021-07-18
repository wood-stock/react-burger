import style from './info-total-orders.module.css';
export const InfoTotalOrders = () => {
  return (
    <div className={style.info}>
      <div className={style.stage}>
        <div className={`${style.wrapper} text text_type_main-medium`}>
          Готовы:
          <ul className={`${style.ready} pt-6 text text_type_digits-default`}>
            <li>034533</li>
            <li>034533</li>
            <li>034533</li>
            <li>034533</li>
          </ul>
        </div>
        <div className={`${style.wrapper} text text_type_main-medium`}>
          В работе:
          <ul className='pt-6 text text_type_digits-default'>
            <li>034533</li>
            <li>034533</li>
            <li>034533</li>
            <li>034533</li>
          </ul>
        </div>
      </div>
      <div className='text text_type_main-medium'>
        Выполнено за всё время:
        <div className={`${style.total} text text_type_digits-large`}>
          28 752
        </div>
      </div>
      <div className='text text_type_main-medium'>
        Выполнено за всё сегодня:
        <div className={`${style.total} text text_type_digits-large`}>133</div>
      </div>
    </div>
  );
};
