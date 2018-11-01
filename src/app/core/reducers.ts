import { ActionReducerMap } from '@ngrx/store';

import { IStore } from './store';
import { cartReducer } from './cart/cart.reducer';

export const reducers: ActionReducerMap<IStore> = {
  shoppingCart: cartReducer
};
