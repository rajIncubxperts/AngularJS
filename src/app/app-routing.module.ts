import { NgModule } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';



const routes: Routes = [
  {path:'form', component:FormControl},
  {path:'**', component:NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
