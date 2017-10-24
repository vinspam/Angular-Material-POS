import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from '../welcome/welcome.component';
import { HomeComponent } from '../home/home.component';
import { TransactionsComponent } from '../home/transactions/transactions.component';
import { AdminComponent } from '../admin/admin/admin.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { LoginComponent } from '../welcome/login/login.component';

const appRoutes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
