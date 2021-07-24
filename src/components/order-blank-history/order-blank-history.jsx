import style from './order-blank-history.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import IconIngredient from '../icon-ingredient/icon-ingredient';
import { transformDate, showStatus } from '../../services/utils';
import { useSelector } from 'react-redux';
export const OrderBlankHistory = ({
  number,
  name,
  createdAt,
  status,
  ingredients,
}) => {
  const ingredientsCatalog = useSelector(
    (state) => state.ingredients.ingredients
  );
  const orderIngredients = ingredients.map((id) => {
    return ingredientsCatalog.find((item) => item._id === id);
  });
  const total = orderIngredients.length;
  const price = orderIngredients.reduce((sum, item) => {
    return sum + item.price;
  }, 0);

  return (
    <div className={style.base}>
      <div className={style.id}>
        <div className='text text_type_digits-default'>#{number}</div>
        <div className='text text_type_main-default text_color_inactive'>
          {transformDate(createdAt)}
        </div>
      </div>

      <div className='text text_type_main-medium pt-6'>{name}</div>
      <div className={`${style.status} text text_type_main-default pt-3`}>
        {showStatus(status)}
      </div>
      <div className={`${style.info} pt-6`}>
        <div>
          <div className={style.group}>
            {orderIngredients
              .slice(0, 6)
              .map((item, i) =>
                i === 5 ? (
                  <IconIngredient
                    key={i}
                    inf={`+${total - 5}`}
                    img={item.image_mobile}
                    style={{ left: i * -15, zIndex: 5 - i }}
                  />
                ) : (
                  <IconIngredient
                    key={i}
                    img={item.image_mobile}
                    style={{ left: i * -15, zIndex: 5 - i }}
                  />
                )
              )}
          </div>
        </div>
        <div className={`${style.price} text text_type_digits-default`}>
          <span>{price}</span> <CurrencyIcon type='primary' />
        </div>
      </div>
    </div>
  );
};
