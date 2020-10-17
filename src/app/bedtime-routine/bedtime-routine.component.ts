import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bedtime-routine',
  templateUrl: './bedtime-routine.component.html',
  styleUrls: ['./bedtime-routine.component.css']
})
export class BedtimeRoutineComponent implements OnInit {
  gratitudeList = [];
  savorList = [];

  constructor() { }

  ngOnInit() {
  }

  addGratitude(newGratitude: string){
    if(!this.gratitudeList.includes(newGratitude) && newGratitude !== ""){
      this.gratitudeList.push(newGratitude);
    }
  }

  clearGratitudeList(){
    this.gratitudeList = [];
  }

  addSavor(newSavor: string){
    if(!this.savorList.includes(newSavor) && newSavor !== ""){
      this.savorList.push(newSavor);
    }
  }

  clearSavorList(){
    this.savorList = [];
  }

}
