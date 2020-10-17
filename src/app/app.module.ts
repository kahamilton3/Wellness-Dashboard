import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MorningRoutineComponent } from './morning-routine/morning-routine.component';
import { SleepTimesComponent } from './sleep-times/sleep-times.component';
import { DailyAffirmationComponent } from './daily-affirmation/daily-affirmation.component';
import { MindMapComponent } from './mind-map/mind-map.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { IntermittentFastingComponent } from './intermittent-fasting/intermittent-fasting.component';
import { DailyActivitiesComponent } from './daily-activities/daily-activities.component';
import { GoalsComponent } from './goals/goals.component';
import { BedtimeRoutineComponent } from './bedtime-routine/bedtime-routine.component';

@NgModule({
  declarations: [
    AppComponent,
    MorningRoutineComponent,
    SleepTimesComponent,
    DailyAffirmationComponent,
    MindMapComponent,
    ToDoListComponent,
    IntermittentFastingComponent,
    DailyActivitiesComponent,
    GoalsComponent,
    BedtimeRoutineComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
