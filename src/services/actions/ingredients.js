import { ingredientsApi } from '../../constants';
export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_ERROR = 'GET_INGREDIENTS_ERROR';
export const getIngredients = () => (dispatch) => {
  dispatch({
    type: GET_INGREDIENTS_REQUEST,
  });
  return fetch(ingredientsApi)
    .then((response) => {
      if (response.ok) return response.json();
      else return Promise.reject(response);
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
