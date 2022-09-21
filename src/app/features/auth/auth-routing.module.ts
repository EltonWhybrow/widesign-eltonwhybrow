import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { NotAuthorisedComponent } from './pages/not-authorised/not-authorised.component';

const routes: Routes = [
  { path: '', component: LoginComponent, title: 'Login - Web Development & Design - WideSign' },
  { path: '', pathMatch: 'full', redirectTo: '' },
  { path: 'not-authorised', component: NotAuthorisedComponent, title: 'Unauthorised - Web Development & Design - WideSign' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
