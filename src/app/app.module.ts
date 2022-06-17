import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadderComponent } from './headder/headder.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SectionContentComponent } from './section-content/section-content.component';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    HeadderComponent,
    SidebarComponent,
    SectionContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
