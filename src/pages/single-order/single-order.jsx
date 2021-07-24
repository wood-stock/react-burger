import { useEffect } from 'react';
import style from './single-order.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ItemInOrder from '../../components/item-in-order/item-in-order';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { transformDate, showStatus } from '../../services/utils';
import {
  WS_CONNECTION_START,
  WS_CONNECTION_CLOSED,
} from '../../services/actions/ws';
import Loader from '../../components/loader/loader';
const SingleOrder = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: WS_CONNECTION_START });
    return () => dispatch({ type: WS_CONNECTION_CLOSED });
  }, [dispatch]);
  const { id } = useParams();
  const { catalog, orders } = useSelector((state) => ({
    orders: state.ws.messages.orders,
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
