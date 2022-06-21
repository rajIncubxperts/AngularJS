import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { CustomerComponent } from './customer.component';
import { EditComponent } from './edit/edit.component';
import { ListviewIdComponent } from './listview-id/listview-id.component';
import { ListviewComponent } from './listview/listview.component';

const routes: Routes = [
  {path:'', component:CustomerComponent,
  children:[
    {path:'', component:ListviewComponent},
    {path:'add', component:AddComponent},
    {path:'edit', component:EditComponent},
    {path:'listview', component:ListviewComponent},
    {path:'listview-id', component:ListviewIdComponent},
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {}
