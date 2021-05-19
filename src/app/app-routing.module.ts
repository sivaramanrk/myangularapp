import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserregisterComponent } from './userregister/userregister.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [
  { path: 'register', component: UserregisterComponent },
  { path: 'login', component: UserloginComponent },
  { path: 'userlist/:token', component: UserlistComponent},
  { path: '',   redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
