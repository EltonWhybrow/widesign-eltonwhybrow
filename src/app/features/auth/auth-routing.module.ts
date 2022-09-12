import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { NotAuthorisedComponent } from './pages/not-authorised/not-authorised.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: '', pathMatch: 'full', redirectTo: '' },
  { path: 'not-authorised', component: NotAuthorisedComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
