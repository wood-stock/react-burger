import { GET_SELECTED_INGREDIENT } from '../actions/selectedIngredient';
import { CLOSE_MODAL } from '../actions/modal';

const initialState = {
  selectedIngredient: null,
};

export const selectedIngredientReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SELECTED_INGREDIENT: {
      return {
        ...state,
        selectedIngredient: action.item,
      };
    }
    case CLOSE_MODAL: {
      return {
        ...state,
        selectedIngredient: null,
      };
    }
    default: {
      return state;
    }
  }
};
