import { combineReducers } from 'redux';
import { ingredientsReducer } from './ingredients';
import { constructorReducer } from './constructor';
import { orderReducer } from './order';
import { selectedIngredientReducer } from './selectedIngredient';
export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  constructor: constructorReducer,
  order: orderReducer,
  selectedIngredient: selectedIngredientReducer,
});
