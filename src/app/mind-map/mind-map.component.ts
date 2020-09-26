import { Component, OnInit, Input } from '@angular/core';
import { Mood } from '../mood';

@Component({
  selector: 'app-mind-map',
  templateUrl: './mind-map.component.html',
  styleUrls: ['./mind-map.component.css']
})
export class MindMapComponent implements OnInit {
  @Input() moods: Mood[];


  constructor() { }

  ngOnInit() {
  }

  getData(e) {
    e.preventDefault();
}

}
