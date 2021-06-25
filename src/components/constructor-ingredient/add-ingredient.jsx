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
  DEL_ADD_INGREDIENT,
  MOVE_CONSTRUCTOR_ITEM,
} from '../../services/actions/ingredients';

const AddIngredient = ({ name, price, image, unic, idx }) => {
  const dispatch = useDispatch();
  const ref = useRef(null);
  const [{ isDragging }, dragRef] = useDrag({
    type: 'constructor',
    item: { idx },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [{ handlerId }, dropRef] = useDrop({
    accept: 'constructor',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }

      const dragIndex = item.idx;
      const hoverIndex = idx;

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

      dispatch({
        type: MOVE_CONSTRUCTOR_ITEM,
      });

      item.idx = hoverIndex;
    },
  });
  dragRef(dropRef(ref));
  const opacity = isDragging ? 0.25 : 1;

  const removeAddIngredient = () =>
    dispatch({
      type: DEL_ADD_INGREDIENT,
      id: unic,
    });
  return (
    <li
      className={style.wrapper}
      ref={ref}
      data-handler-id={handlerId}
      style={{ opacity }}
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
};
export default AddIngredient;
