import { Component, OnInit, Input } from '@angular/core';
import { Affirmation } from '../affirmation';

@Component({
  selector: 'app-daily-affirmation',
  templateUrl: './daily-affirmation.component.html',
  styleUrls: ['./daily-affirmation.component.css']
})
export class DailyAffirmationComponent implements OnInit {
  @Input() affirmations: Affirmation[];
  randomAffirmation: string;
  randomNumber: number = Math.floor(Math.random()*31)

  constructor() {
    this.randomAffirmation = "";
   }

  ngOnInit() {
  }

  pickAffirmation(){
    let random: string = this.affirmations[Math.floor(Math.random()*31)].quote;
    this.randomAffirmation = random; 
  }

}
