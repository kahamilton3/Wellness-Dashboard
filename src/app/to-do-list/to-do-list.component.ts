import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  tasks = [];
  finishedTasks = [];

  constructor() { }

  ngOnInit() {
  }

  addTask(newTask: string){
    if(!this.tasks.includes(newTask) && newTask !== ""){
      this.tasks.push(newTask);
   }
  }

  markComplete(completedTask: string){
    this.tasks.splice(this.tasks.indexOf(completedTask),1);
    this.finishedTasks.push(completedTask);
   }

}
