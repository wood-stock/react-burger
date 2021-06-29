import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_ERROR,
  GET_INGREDIENTS_SUCCESS,
} from '../actions/ingredients';

const initialState = {
  ingredientsRequest: false,
  ingredientsSuccess: false,
  ingredientsError: false,
  ingredients: [],
};

export const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        ingredientsRequest: true,
      };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        ingredients: action.ingredients,
        ingredientsRequest: false,
        ingredientsSuccess: true,
      };
    }
    case GET_INGREDIENTS_ERROR: {
      return {
        ...state,
        ingredientsError: true,
        ingredientsRequest: false,
      };
    }
    default: {
      return state;
    }
  }
};
