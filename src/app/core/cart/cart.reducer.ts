import {
  ICart
} from './../cart.interface';
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM
} from './cart.actions';


const INITIAL_STATE: ICart = {
  cart: [
    { id: 1, name: 'Sledgehammer', price: 125.75, quantity: 0 },
    { id: 2, name: 'Axe', price: 190.50, quantity: 0 },
    { id: 3, name: 'BandSaw', price: 562.13, quantity: 0 },
    { id: 4, name: 'Chisel', price: 12.9, quantity: 0 },
    { id: 5, name: 'HackSaw', price: 18.45, quantity: 0 },
  ],
  total: 0
};

export function cartReducer(state: ICart = INITIAL_STATE , action): ICart {
  switch (action.type) {
    case CART_ADD_ITEM:
      state.cart.map(res => {
        if (res.id === action.payload) {
          res.quantity = res.quantity + 1;
          state.total = state.total + res.price;
        }
      });
      return state;
    case CART_REMOVE_ITEM:
      state.cart.map(res => {
        if (res.id === action.payload && res.quantity !== 0) {
          res.quantity = res.quantity - 1;
          state.total = state.total - res.price;
        }
      });
      return state;
    default:
      return state;
  }
}
