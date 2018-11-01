import {
  Component,
  OnInit
} from '@angular/core';
import { Store } from '@ngrx/store';
import { IStore } from '../core/store';
import {
  AddItem,
  RemoveItem
} from '../core/cart/cart.actions';
import { Observable } from 'rxjs';
import {
  ICart,
  ICartItems
} from '../core/cart.interface';
import {
  skipWhile
} from 'rxjs/operators';

@Component({
  selector: 'app-product',
  styles: [`
    table {
      width: 100%;
    }
  `],
  template: `
    <mat-card>
      <mat-card-title>Products</mat-card-title>
      <table mat-table [dataSource]="cart" class="mat-elevation-z8">

        <ng-container matColumnDef="name">
          <th mat-header-cell *matHeaderCellDef> Name </th>
          <td mat-cell *matCellDef="let element"> {{element.name}} </td>
        </ng-container>

        <ng-container matColumnDef="price">
          <th mat-header-cell *matHeaderCellDef> Price </th>
          <td mat-cell *matCellDef="let element"> {{element.price}} </td>
        </ng-container>

        <ng-container matColumnDef="add">
          <th mat-header-cell *matHeaderCellDef></th>
          <td mat-cell *matCellDef="let element">
            <button mat-raised-button color="green" (click)="addItem(element.id)">Add Item</button>
          </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="productColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: productColumns;"></tr>
      </table>

      <br>
      <mat-card-title>Cart</mat-card-title>
      <table mat-table [dataSource]="cart | async" class="mat-elevation-z8">

        <ng-container matColumnDef="name">
          <th mat-header-cell *matHeaderCellDef> Name </th>
          <td mat-cell *matCellDef="let element"> {{element.name}} </td>
        </ng-container>

        <ng-container matColumnDef="quantity">
          <th mat-header-cell *matHeaderCellDef> Quantity </th>
          <td mat-cell *matCellDef="let element"> {{element.quantity}} </td>
        </ng-container>

        <ng-container matColumnDef="price">
          <th mat-header-cell *matHeaderCellDef> Price </th>
          <td mat-cell *matCellDef="let element"> {{(element.price * element.quantity).toFixed(2)}} </td>
        </ng-container>

        <ng-container matColumnDef="remove">
          <th mat-header-cell *matHeaderCellDef></th>
          <td mat-cell *matCellDef="let element">
            <button mat-raised-button color="warn" (click)="removeItem(element.id)">Remove Item</button>
          </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="cartColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: cartColumns;"></tr>
      </table>
      <br>
      <mat-card>
        <mat-card-title>Total = {{(total | async).toFixed(2)}}</mat-card-title>
      </mat-card>
    </mat-card>
  `
})

export class ProductComponent implements OnInit {

  public cart: Observable<ICart | ICartItems[]>;
  public total: Observable<number>;

  productColumns: string[] = ['name', 'price', 'add'];
  cartColumns: string[] = ['name', 'quantity', 'price', 'remove'];

  constructor(private _store: Store<IStore>) {
    this.cart = this._store.select(state => state.shoppingCart.cart).pipe(
      skipWhile(data => data === undefined)
    );
  }

  ngOnInit() {
    this.total = this._store.select(data => data.shoppingCart.total);
  }

  public addItem(itemId: number) {
    this._store.dispatch(new AddItem(itemId));
  }

  public removeItem(itemId: number) {
    this._store.dispatch(new RemoveItem(itemId));
  }
}
