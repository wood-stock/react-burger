import { Link } from 'react-router-dom';
import style from './feed.module.css';
import { OrderBlankHistory } from '../../components/order-blank-history/order-blank-history';
import { InfoTotalOrders } from '../../components/info-total-orders/info-total-orders';
const Feed = () => {
  return (
    <>
      <main>
        <h1 className='text text_type_main-large mt-10 mb-5'>Лента заказов</h1>
        <div className={style.content}>
          <div className={`${style.feed} pr-2`}>
            <Link exact to='feed/single'>
              <OrderBlankHistory />
            </Link>
            <Link exact to='feed/single'>
              <OrderBlankHistory />
            </Link>
            <Link exact to='feed/single'>
              <OrderBlankHistory />
            </Link>
          </div>
          <InfoTotalOrders />
        </div>
      </main>
    </>
  );
};
export default Feed;
