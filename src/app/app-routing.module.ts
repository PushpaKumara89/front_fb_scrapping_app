import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthenticationContextComponent} from "./core/auth/authentication-context/authentication-context.component";
import {LoginComponent} from "./core/auth/login/login.component";
import {RegisterComponent} from "./core/auth/register/register.component";

const routes: Routes = [
  {path:'', redirectTo: '/auth/login',pathMatch:'full'},
  {path:'auth',component: AuthenticationContextComponent, children:[
      {path:'login',component: LoginComponent},
      {path:'register',component: RegisterComponent}
    ]},
  { path: 'dash-board', loadChildren: () => import('./module/dash-board/dash-board.module').then(m => m.DashBoardModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
