import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ImportAsClassComponent } from './import-as-class/import-as-class.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ImportAsClassComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
