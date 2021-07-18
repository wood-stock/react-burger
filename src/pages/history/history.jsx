import style from './history.module.css';
import NavProfile from '../../components/nav-profile/nav-profile';
import { OrderBlankHistory } from '../../components/order-blank-history/order-blank-history';
import { Link } from 'react-router-dom';
const History = () => {
  return (
    <div className={`${style.container} mt-10`}>
      <nav className={style.nav}>
        <NavProfile />
        <p className='text text_type_main-default text_color_inactive mt-20'>
          В этом разделе вы можете просмотреть свою историю заказов
        </p>
      </nav>
      <div className={style.feed}>
        <Link exacct to='/profile/orders/single'>
          <OrderBlankHistory />
        </Link>
        <Link exacct to='/profile/orders/single'>
          <OrderBlankHistory />
        </Link>
        <Link exacct to='/profile/orders/single'>
          <OrderBlankHistory />
        </Link>
        <Link exacct to='/profile/orders/single'>
          <OrderBlankHistory />
        </Link>
      </div>
    </div>
  );
};
export default History;
