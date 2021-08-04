import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';
import { store } from '../../store';
import { TAuthAction } from '../actions/auth';
import { TConstructorAction } from '../actions/constructor';
import { TGetIngredientsAction } from '../actions/ingredients';
import { ICloseModalAtion } from '../actions/modal';
import { TAddOrderAction } from '../actions/order';
import { TWsPrivateAction } from '../actions/ws-private';
import { TWsAction } from '../actions/ws';
export type TOrder = {
ingredients: Array<string>;
_id: string;
status: string;
number: number;
name: string;
createdAt: string;
updatedAt: string;
}
export type TMessages = {
success: boolean;
orders: Array<TOrder>;
total: number;
totalToday: number;
}
export type TIngredient = {
_id: string;
name: string;
type: string;
proteins: number;
fat: number;
carbohydrates: number;
calories: number;
price: number;
image: string;
image_mobile: string;
image_large: string;
__v: number;
}
export type TWsActions = {
    wsInit: string,
    onOpen: string,
    onError: string,
    onClose: string,
    onMessage: string,
    wsSendMessage: string,}
export type TLocation = {
      background?: any;
    }


    type TApplicationActions = TAuthAction|TConstructorAction|TGetIngredientsAction|ICloseModalAtion|TAddOrderAction|TWsPrivateAction|TWsAction;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ActionCreator<
  ThunkAction<ReturnType, Action, RootState, TApplicationActions>
>;
