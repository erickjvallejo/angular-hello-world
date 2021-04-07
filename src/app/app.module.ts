import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {HelloWorldComponent} from './hello-world/hello-world.component';
import {UserItemComponent} from './user-item/user-item.component';
import {UserListComponent} from './user-list/user-list.component';

@NgModule({
  declarations: [
    /* We need to declare any component before to use them in html templates*/
    AppComponent,
    HelloWorldComponent,
    UserItemComponent,
    UserListComponent
  ],
  imports: [
    /* We need to import here when we need to use for my templates*/
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [/* Services available in my entire application*/],
  bootstrap: [/* Point of entry*/AppComponent]
})
export class AppModule {
}
