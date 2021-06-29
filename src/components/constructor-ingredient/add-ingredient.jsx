import { useRef } from 'react';
import PropTypes from 'prop-types';
import {
  ConstructorElement,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import style from './add-ingredient.module.css';
import { useDrag, useDrop } from 'react-dnd';
import { useDispatch } from 'react-redux';
import {
  DEL_CONSTRUCTOR_INGREDIENT,
  moveConstructorItem,
} from '../../services/actions/constructor';

const AddIngredient = ({ name, price, image, id, index }) => {
  const dispatch = useDispatch();
  const ref = useRef(null);
  const [{ handlerId }, dropRef] = useDrop({
    accept: 'swap-ingredient',
    collect: (monitor) => {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      dispatch(moveConstructorItem({ dragIndex, hoverIndex }));

      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, dragRef] = useDrag({
    type: 'swap-ingredient',
    item: { id: id, index: index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  dragRef(dropRef(ref));
  const opacity = isDragging ? 0 : 1;

  const removeAddIngredient = () =>
    dispatch({
      type: DEL_CONSTRUCTOR_INGREDIENT,
      index: index,
    });
  return (
    <li
      className={style.wrapper}
      ref={ref}
      style={{ opacity }}
      data-handler-id={handlerId}
    >
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
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
export default AddIngredient;
