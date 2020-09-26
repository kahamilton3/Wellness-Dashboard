import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MorningRoutineComponent } from './morning-routine/morning-routine.component';
import { SleepTimesComponent } from './sleep-times/sleep-times.component';
import { DailyAffirmationComponent } from './daily-affirmation/daily-affirmation.component';
import { MindMapComponent } from './mind-map/mind-map.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MorningRoutineComponent,
    SleepTimesComponent,
    DailyAffirmationComponent,
    MindMapComponent,
    ToDoListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
