import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { UserlistComponent } from './userlist/userlist.component';

import { SearchFilterPipe } from './search-filter.pipe';
import { FormsModule }   from '@angular/forms';
import { SecurityComponent } from './security/security.component';



@NgModule({
  declarations: [
    AppComponent,
    UserloginComponent,
    UserregisterComponent,
    UserlistComponent,
    SearchFilterPipe,
    SecurityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
