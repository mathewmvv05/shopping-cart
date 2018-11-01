import { Action } from '@ngrx/store';

export const CART_ADD_ITEM = '[Cart] add item';
export const CART_REMOVE_ITEM = '[Cart] remove item';

export class AddItem implements Action {
  public readonly type = CART_ADD_ITEM;
  constructor(readonly payload: number) {}
}

export class RemoveItem implements Action {
  public readonly type = CART_REMOVE_ITEM;
  constructor(readonly payload: number) {}
}
