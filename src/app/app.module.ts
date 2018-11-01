import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { appRouting } from './app.routing';
import { ProductModule } from './products/products.module';
import { AppHeaderModule } from './header/header.module';
import { reducers } from './core/reducers';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ProductModule,
    AppHeaderModule,
    StoreModule.forRoot(reducers),
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
