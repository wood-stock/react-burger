import {
  ADD_ORDER_REQUEST,
  ADD_ORDER_SUCCESS,
  ADD_ORDER_ERROR,
} from '../actions/order';
import { CLOSE_MODAL } from '../actions/modal';

const initialState = {
  orderRequest: false,
  orderSuccess: false,
  orderFailed: false,
  order: null,
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER_REQUEST: {
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
        orderSuccess: true,
      };
    }
    case ADD_ORDER_ERROR: {
      return {
        ...state,
        orderFailed: true,
        orderRequest: false,
      };
    }
    case CLOSE_MODAL: {
      return {
        ...state,
        orderSuccess: false,
        order: null,
      };
    }
    default: {
      return state;
    }
  }
};
