import {
  MOVE_CONSTRUCTOR_ITEM,
  ADD_CONSTRUCTOR_INGREDIENT,
  DEL_CONSTRUCTOR_INGREDIENT,
} from '../actions/constructor';
const initialState = {
  constructorIngredients: [],
  constructorBun: {},
};

export const constructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVE_CONSTRUCTOR_ITEM: {
      const dragIndex = action.dragIndex;
      const hoverIndex = action.hoverIndex;
      const arr = [...state.constructorIngredients];

      const dragElement = arr[dragIndex];
      const hoverElement = arr[hoverIndex];

      arr[hoverIndex] = dragElement;
      arr[dragIndex] = hoverElement;

      return {
        ...state,
        constructorIngredients: arr,
      };
    }
    case ADD_CONSTRUCTOR_INGREDIENT: {
      if (action.ingredient.type === 'bun') {
        return { ...state, constructorBun: action.ingredient };
      } else if (state.constructorIngredients) {
        return {
          ...state,
          constructorIngredients: [
            ...state.constructorIngredients,
            {
              ...action.ingredient,
              key: Math.round(Math.random() * 1000),
            },
          ],
        };
      } else {
        return {
          ...state,
          constructorIngredients: [
            {
              ...action.ingredient,
              key: Math.round(Math.random() * 1000),
            },
          ],
        };
      }
    }
    case DEL_CONSTRUCTOR_INGREDIENT: {
      return {
        ...state,
        constructorIngredients: [
          ...state.constructorIngredients.filter(
            (item, index) => action.index !== index
          ),
        ],
      };
    }
    default: {
      return state;
    }
  }
};
