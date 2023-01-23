import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path :'admin',
    loadChildren:()=>import('./administrator/administrator.module').then(mod=>mod.AdministratorModule),
  },
  {
    path:'login',component: LoginComponent
  },
  {
    path:'register',component: RegisterComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
