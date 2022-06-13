import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WrapperComponent } from './components/shared/wrapper/wrapper.component';
import { FormsModule } from '@angular/forms';
import { TableModule } from './table-module/table-module.module';

@NgModule({
  declarations: [AppComponent, WrapperComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, TableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
