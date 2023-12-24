import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellsComponent } from './sells/sells.component';
import { ClientsComponent } from './clients/clients.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'sells', component: SellsComponent},
  {path: 'clients', component: ClientsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
