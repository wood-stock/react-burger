import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from './feed.module.css';
import { OrderBlankHistory } from '../../components/order-blank-history/order-blank-history';
import { InfoTotalOrders } from '../../components/info-total-orders/info-total-orders';
import { useDispatch, useSelector } from 'react-redux';
import {
  WS_CONNECTION_START,
  WS_CONNECTION_CLOSED,
} from '../../services/actions/ws';
const Feed = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { orders } = useSelector((store) => store.ws.messages);
  useEffect(() => {
    dispatch({ type: WS_CONNECTION_START });
    return () => dispatch({ type: WS_CONNECTION_CLOSED });
  }, [dispatch]);
  return (
    <>
      <main>
        <h1 className='text text_type_main-large mt-10 mb-5'>Лента заказов</h1>
        <div className={style.content}>
          <div className={`${style.feed} pr-2`}>
            {orders?.slice(0, 20).map((item) => (
              <Link
                key={item._id}
                to={{
                  pathname: `/feed/${item._id}`,
                  state: { background: location },
                }}
              >
                <OrderBlankHistory {...item} status={null} />
              </Link>
            ))}
          </div>
          <InfoTotalOrders />
        </div>
      </main>
    </>
  );
};
export default Feed;
