import PropTypes from 'prop-types';
import {
  ConstructorElement,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import style from './add-ingredient.module.css';
import { useDrag } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { DEL_ADD_INGREDIENT } from '../../services/actions/ingredients';

const AddIngredient = ({ name, price, image, unic }) => {
  const [, dragIntoRef] = useDrag({
    type: 'addIngredient',
    item: { name },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });
  const dispatch = useDispatch();
  const removeAddIngredient = () =>
    dispatch({
      type: DEL_ADD_INGREDIENT,
      id: unic,
    });
  return (
    <li className={style.wrapper} ref={dragIntoRef}>
      <DragIcon type='primary' />
      <ConstructorElement
        text={name}
        price={price}
        thumbnail={image}
        handleClose={() => removeAddIngredient()}
      />
    </li>
  );
};
AddIngredient.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};
export default AddIngredient;
