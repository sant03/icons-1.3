import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BoardComponent } from './board/board.component';
import { HomeComponent } from './home/home.component';
import { SellsComponent } from './sells/sells.component';

import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';
import { ClientsComponent } from './clients/clients.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { loginService } from './services/loginService';
import { VendorsComponent } from './vendors/vendors.component';
import { ProductsComponent } from './products/products.component';
import { MatChipsModule } from '@angular/material/chips';
import { PedidosComponent } from './pedidos/pedidos.component';
import { OrdenComponent } from './orden/orden.component';
import { gsap } from 'gsap';
import { FadeInAnimationDirective } from './directives/GSAP/fade-in.directive';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BoardComponent,
    HomeComponent,
    SellsComponent,
    ClientsComponent,
    MainComponent,
    LoginComponent,
    SignUpComponent,
    VendorsComponent,
    ProductsComponent,
    PedidosComponent,
    OrdenComponent,
    FadeInAnimationDirective,
    UsersComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatTableModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatMenuModule,
    MatChipsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [loginService],
  bootstrap: [AppComponent],
})
export class AppModule {}
