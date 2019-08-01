import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartStepComponent } from './component/start-step/start-step.component';
import { NavigComponent } from './component/navig/navig.component';

@NgModule({
  declarations: [
    AppComponent,
    StartStepComponent,
    NavigComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
