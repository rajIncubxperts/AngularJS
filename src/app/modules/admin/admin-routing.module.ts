import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';


const routes: Routes = [
  { path: '', component: AdminComponent , 
  children:[
    {
      path: 'employee',
      loadChildren: () =>
        import('./employee/employee.module').then((m) => m.EmployeeModule),
    },

  ]

  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
