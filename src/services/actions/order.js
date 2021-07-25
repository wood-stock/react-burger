import { oredersApi } from '../../constants';
import { getCookie } from '../utils';
export const ADD_ORDER_REQUEST = 'ADD_ORDER_REQUEST';
export const ADD_ORDER_SUCCESS = 'ADD_ORDER_SUCCESS';
export const ADD_ORDER_ERROR = 'CLEAR_SELECTED__ERROR';

export const handleAddOrder = (listId) => (dispatch) => {
  dispatch({
    type: ADD_ORDER_REQUEST,
  });
  return fetch(oredersApi, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + getCookie('token'),
    },
    body: JSON.stringify({
      ingredients: listId,
    }),
  })
    .then((response) => {
      if (response.ok) return response.json();
      else return Promise.reject(response);
    })
    .then((result) =>
      dispatch({
        type: ADD_ORDER_SUCCESS,
        order: result.order.number,
      })
    )
    .catch(() => {
      dispatch({
        type: ADD_ORDER_ERROR,
      });
    });
};
