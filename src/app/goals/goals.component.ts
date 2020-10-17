import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {
  goals = [];
  metGoals = [];
  storedIncentives = [];
  earnedIncentives = [];
  errorIncentive = "";

  constructor() { }

  ngOnInit() {
  }

  addGoal(newGoal: string){
    if(!this.goals.includes(newGoal) && newGoal !== ""){
      this.goals.push(newGoal);
    }
  }

  markComplete(metGoal: string){
    if (this.storedIncentives.length === 0){
      this.errorIncentive = "MUST ADD MORE INCENTIVES!";
    } else {
      this.errorIncentive = "";
      this.goals.splice(this.goals.indexOf(metGoal),1);
      this.metGoals.push(metGoal);
      if (this.metGoals.length > 5) {
        this.metGoals.shift();
      }
      this.earnedIncentives.push(this.storedIncentives[0]);
      this.storedIncentives.shift();
    }
  }

  clearCompletedGoal(){
    this.metGoals = [];
  }

  addIncentive(newIncentive: string){
    if(!this.storedIncentives.includes(newIncentive) && newIncentive !== ""){
      this.storedIncentives.push(newIncentive);
    }
  }

  clearIncentives(){
    this.earnedIncentives = [];
  }
}
