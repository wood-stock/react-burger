import PropTypes from 'prop-types';
import {
  ConstructorElement,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import style from './add-ingredient.module.css';

const AddIngredient = ({ name, price, image }) => (
  <li className={style.wrapper}>
    <DragIcon type='primary' />
    <ConstructorElement text={name} price={price} thumbnail={image} />
  </li>
);
AddIngredient.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};
export default AddIngredient;
