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

export default AddIngredient;
