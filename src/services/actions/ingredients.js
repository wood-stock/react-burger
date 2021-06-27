import { ingredientsApi, oredersApi } from '../../constants';

export const GET_INGREDIENTS = 'GET_INGREDIENTS';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_ERROR = 'GET_INGREDIENTS_ERROR';

export const GET_SELECTED_INGREDIENT = 'GET_SELECTED_INGREDIENT';
export const CLEAR_SELECTED_INGREDIENT = 'CLEAR_SELECTED_INGREDIENT';

export const ADD_ORDER = 'ADD_ORDER';
export const ADD_ORDER_SUCCESS = 'ADD_ORDER_SUCCESS';
export const ADD_ORDER_FAILED = 'CLEAR_SELECTED_INGREDIENT';
export const CLEAR_ORDER = 'CLEAR_ORDER';

export const CLOSE_MODAL = 'CLOSE_MODAL';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const DEL_ADD_INGREDIENT = 'DEL_ADD_INGREDIENT';

export const RECALCULATE_TOTAL_PRICE = 'RECALCULATE_TOTAL_PRICE';

export const MOVE_CONSTRUCTOR_ITEM = 'MOVE_CONSTRUCTOR_ITEM';

export const moveConstructorItem = ({ dragIndex, hoverIndex }) => ({
  type: MOVE_CONSTRUCTOR_ITEM,
  dragIndex,
  hoverIndex,
});

export const getIngredients = () => (dispatch) => {
  dispatch({
    type: GET_INGREDIENTS,
  });
  fetch(ingredientsApi)
    .then((response) => {
      if (response.ok) return response.json();
      else
        dispatch({
          type: GET_INGREDIENTS_ERROR,
        });
    })
    .then((response) =>
      dispatch({
        type: GET_INGREDIENTS_SUCCESS,
        ingredients: response.data,
      })
    )
    .catch(() => {
      dispatch({
        type: GET_INGREDIENTS_ERROR,
      });
    });
};

export const handleAddOrder = (listId) => (dispatch) => {
  fetch(oredersApi, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      ingredients: listId,
    }),
  })
    .then((response) => {
      if (response.ok) return response.json();
      else return Promise.reject(response.status);
    })
    .then((result) =>
      dispatch({
        type: ADD_ORDER_SUCCESS,
        order: result.order.number,
      })
    )
    .catch((error) => console.log('error', error));
};
