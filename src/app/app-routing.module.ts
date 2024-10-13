import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellsComponent } from './sells/sells.component';
import { ClientsComponent } from './clients/clients.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { VendorsComponent } from './vendors/vendors.component';
import { ProductsComponent } from './products/products.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { OrdenComponent } from './orden/orden.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'login',  component: LoginComponent},
  { path: 'signup', component: SignUpComponent},
  {path: 'home', component: HomeComponent},
  {path: 'sells', component: SellsComponent},
  {path: 'clients', component: ClientsComponent},
  {path: 'vendors', component: VendorsComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'pedidos', component: PedidosComponent},
  {path: 'orden', component: OrdenComponent},
  {path: 'users', component: UsersComponent},
  {path: 'user', component: UserComponent},

  {path : '', redirectTo: '/main', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
