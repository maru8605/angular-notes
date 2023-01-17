import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgStylesComponent } from './components/ng-styles/ng-styles.component';
import { CssComponent } from './components/css/css.component';

@NgModule({
  declarations: [
    AppComponent,
    NgStylesComponent,
    CssComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
