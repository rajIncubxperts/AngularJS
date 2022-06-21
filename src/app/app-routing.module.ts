import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
    {path:'', redirectTo:'admin', pathMatch:'full'},
   {
          path:'admin',
          loadChildren:()=> import('./admin/admin.module').then(a=>a.AdminModule)
        }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
