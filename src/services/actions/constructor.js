export const MOVE_CONSTRUCTOR_ITEM = 'MOVE_CONSTRUCTOR_ITEM';
export const ADD_CONSTRUCTOR_INGREDIENT = 'ADD_CONSTRUCTOR_INGREDIENT';
export const DEL_CONSTRUCTOR_INGREDIENT = 'DEL_CONSTRUCTOR_INGREDIENT';

export const moveConstructorItem = ({ dragIndex, hoverIndex }) => ({
  type: MOVE_CONSTRUCTOR_ITEM,
  dragIndex,
  hoverIndex,
});
