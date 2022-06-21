import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { CustomerModule } from './customer/customer.module';


@NgModule({
  declarations: [
    AdminComponent,
    SidebarComponent,
    ContentComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
  ],
})
export class AdminModule { }
