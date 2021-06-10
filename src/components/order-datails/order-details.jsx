import { CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './order-details.module.css';
import PropTypes from 'prop-types';
const OrderDetails = ({ orderId }) => {
  return (
    <section className={style.order}>
      <span className='text text_type_digits-large mb-8'>{orderId}</span>
      <span className='text text_type_main-medium mb-15'>
        идентификатор заказа
      </span>
      <div className={style.done + ' mb-15'}>
        <CheckMarkIcon type='primary' />
      </div>

      <span className='text text_type_main-default mb-2'>
        Ваш заказ начали готовить
      </span>
      <span className='text text_type_main-default text_color_inactive mb-15'>
        Дождитесь готовности на орбитальной станции
      </span>
    </section>
  );
};
OrderDetails.propTypes = {
  orderId: PropTypes.number.isRequired,
};
export default OrderDetails;
