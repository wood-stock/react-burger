import { combineReducers } from 'redux';
import { allReducer } from './allReducer';
import { ingredientsReducer } from './ingredients';
export const rootReducer = combineReducers({
  all: allReducer,
  ingredients: ingredientsReducer,
});
