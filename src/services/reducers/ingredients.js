import {
  GET_INGREDIENTS,
  GET_INGREDIENTS_ERROR,
  GET_INGREDIENTS_SUCCESS,
  GET_SELECTED_INGREDIENT,
  CLEAR_SELECTED_INGREDIENT,
  ADD_ORDER,
  ADD_ORDER_SUCCESS,
  ADD_ORDER_FAILED,
  CLEAR_ORDER,
  CLOSE_MODAL,
  ADD_INGREDIENT,
  DEL_ADD_INGREDIENT,
  RECALCULATE_TOTAL_PRICE,
  MOVE_CONSTRUCTOR_ITEM,
} from '../actions/ingredients';

const initialState = {
  ingredientsRequest: false,
  ingredientsSuccess: false,
  ingredientsFailed: false,
  ingredients: [],
  constructorIngredients: [],
  constructorBun: {},
  totalPrice: null,
  selectedIngredient: null,
  burgerIngredients: null,
  orderRequest: false,
  orderFailed: false,
  order: null,
  test: null,
};

export const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS: {
      return {
        ...state,
        ingredientsRequest: true,
        ingredientsFailed: false,
      };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        ingredients: action.ingredients,
        constructorBun: { ...action.ingredients[1] },
        ingredientsRequest: false,
        ingredientsSuccess: true,
        totalPrice: action.ingredients[1].price * 2,
      };
    }
    case GET_INGREDIENTS_ERROR: {
      return {
        ...state,
        ingredientsFailed: true,
        ingredientsRequest: false,
      };
    }
    case GET_SELECTED_INGREDIENT: {
      return {
        ...state,
        selectedIngredient: action.item,
      };
    }
    case CLEAR_SELECTED_INGREDIENT: {
      return {
        ...state,
        selectedIngredient: null,
      };
    }
    case ADD_ORDER: {
      return {
        ...state,
        orderRequest: true,
        orderFailed: false,
      };
    }
    case ADD_ORDER_SUCCESS: {
      return {
        ...state,
        order: action.order,
      };
    }
    case ADD_ORDER_FAILED: {
      return {
        ...state,
        orderFailed: true,
        orderRequest: false,
      };
    }
    case CLEAR_ORDER: {
      return {
        ...state,
        order: null,
      };
    }
    case CLOSE_MODAL: {
      return {
        ...state,
        order: null,
        selectedIngredient: null,
      };
    }
    case ADD_INGREDIENT: {
      if (action.ingredient.ingredient.type !== 'bun') {
        return {
          ...state,
          constructorIngredients: [
            ...state.constructorIngredients,
            { ...action.ingredient.ingredient, unic: action.unidi },
          ],
        };
      } else {
        return {
          ...state,
          constructorBun: action.ingredient.ingredient,
        };
      }
    }
    case DEL_ADD_INGREDIENT: {
      return {
        ...state,
        constructorIngredients: [
          ...state.constructorIngredients.filter(
            (item) => action.id !== item.unic
          ),
        ],
      };
    }
    case RECALCULATE_TOTAL_PRICE: {
      return {
        ...state,
        totalPrice: state.constructorIngredients.reduce(
          (result, item) => result + item.price,
          state.constructorBun.price * 2
        ),
      };
    }
    case MOVE_CONSTRUCTOR_ITEM:
      // const newList = state.constructorIngredients.slice();
      // const dragItem = state.constructorIngredients.slice()[action.dragIndex];
      // const hoverItem = state.constructorIngredients.slice()[action.hoverIndex];
      // newList[action.hoverIndex] = dragItem;
      // newList[action.dragIndex] = hoverItem;
      return {
        ...state,
        test: 'пАмАгите',
      };

    default: {
      return state;
    }
  }
};
