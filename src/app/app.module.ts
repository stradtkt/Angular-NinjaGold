import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GoldComponent } from './components/gold/gold.component';
import { GoldService } from './services/gold.service';

@NgModule({
  declarations: [
    AppComponent,
    GoldComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GoldService],
  bootstrap: [AppComponent]
})
export class AppModule { }
