import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MorningRoutineComponent } from './morning-routine/morning-routine.component';
import { SleepTimesComponent } from './sleep-times/sleep-times.component';

@NgModule({
  declarations: [
    AppComponent,
    MorningRoutineComponent,
    SleepTimesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
