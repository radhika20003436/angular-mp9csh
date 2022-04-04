import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MyContainerComponent } from './my-container/my-container.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent,MyContainerComponent, TopNavComponent ,HeaderComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
