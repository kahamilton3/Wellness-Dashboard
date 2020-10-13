import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {
  goals = [];
  metGoals = [];

  constructor() { }

  ngOnInit() {
  }

  addGoal(newGoal: string){
    if(!this.goals.includes(newGoal) && newGoal !== ""){
      this.goals.push(newGoal);
    }
  }

  markComplete(metGoal: string){
    this.goals.splice(this.goals.indexOf(metGoal),1);
    this.metGoals.push(metGoal);
  }

}
