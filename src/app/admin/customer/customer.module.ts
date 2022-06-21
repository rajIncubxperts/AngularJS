import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ListviewComponent } from './listview/listview.component';
import { ListviewIdComponent } from './listview-id/listview-id.component';



@NgModule({
  declarations: [
    CustomerComponent,
    AddComponent,
    EditComponent,
    ListviewComponent,
    ListviewIdComponent,
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
