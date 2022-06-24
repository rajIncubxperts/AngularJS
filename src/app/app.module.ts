import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponentFirstComponent } from './child-component-first/child-component-first.component';
import { ChildComponentSecondComponent } from './child-component-second/child-component-second.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponentFirstComponent,
    ChildComponentSecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
