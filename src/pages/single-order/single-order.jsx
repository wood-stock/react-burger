import { useEffect } from 'react';
import style from './single-order.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ItemInOrder from '../../components/item-in-order/item-in-order';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useRouteMatch } from 'react-router-dom';
import { transformDate, showStatus } from '../../services/utils';
import {
  WS_CONNECTION_START,
  WS_CONNECTION_CLOSED,
} from '../../services/actions/ws';
import {
  WS_CONNECTION_PRIVATE_START,
  WS_CONNECTION_PRIVATE_CLOSED,
} from '../../services/actions/ws-private';
import Loader from '../../components/loader/loader';
const SingleOrder = () => {
  const isProfile = !!useRouteMatch('/profile');
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(
      isProfile
        ? { type: WS_CONNECTION_PRIVATE_START }
        : { type: WS_CONNECTION_START }
    );
    return () =>
      dispatch(
        isProfile
          ? { type: WS_CONNECTION_PRIVATE_CLOSED }
          : { type: WS_CONNECTION_CLOSED }
      );
  }, [dispatch, isProfile]);

  const { catalog, orders } = useSelector((state) => ({
    orders: isProfile
      ? state.wsPrivate.messages.orders
      : state.ws.messages.orders,
    catalog: state.ingredients.ingredients,
  }));
  const selectedOrder = orders && orders.find((item) => item._id === id);
  const listId = orders && selectedOrder.ingredients;
  const orderIngredients =
    orders &&
    listId.map((id) => {
      return catalog.find((item) => item._id === id);
    });
  const price =
    orders &&
    orderIngredients.reduce((sum, item) => {
      return sum + item.price;
    }, 0);

  return orders ? (
    <div className={style.container}>
      <div className={`${style.id} text text_type_digits-default`}>
        #{selectedOrder.number}
      </div>
      <div className='text text_type_main-medium pt-10'>
        {selectedOrder.name}
      </div>
      <div className={`${style.status} text text_type_main-default pt-3`}>
        {showStatus(selectedOrder.status)}
      </div>
      <div className='text text_type_main-medium pt-15'>Cотав:</div>
      <ul className={`${style.wrapper} pt-6`}>
        {orderIngredients.map((item, i) => (
          <ItemInOrder key={i} {...item} />
        ))}
      </ul>
      <div className={`${style.footer} pt-10`}>
        <span className='text text_type_main-default text_color_inactive'>
          {transformDate(selectedOrder.createdAt)}
        </span>
        <span className={`${style.price} text text_type_digits-default`}>
          {price}
          <CurrencyIcon type='primary' />
        </span>
      </div>
    </div>
  ) : (
    <Loader />
  );
};
export default SingleOrder;
