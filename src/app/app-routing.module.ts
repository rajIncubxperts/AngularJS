import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponentFirstComponent } from './child-component-first/child-component-first.component';
import { ChildComponentSecondComponent } from './child-component-second/child-component-second.component';

const routes: Routes = [
  {path:'child-component-first', component:ChildComponentFirstComponent},
  {path:'child-component-second', component:ChildComponentSecondComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
