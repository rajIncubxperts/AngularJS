import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { AuthGuardGuard } from './auth-guard.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch:"full"},
    {path:'login', component:LoginComponent},
    {path:'register', component:RegisterComponent },
    {path:'', component:DashboardComponent},
  {path:'user/:id', component:UserComponent},
  
    {path:'dashboard', component:DashboardComponent  , canActivate : [AuthGuardGuard]},
    
]; 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }