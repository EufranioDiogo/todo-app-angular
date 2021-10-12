import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  appTitle: string = 'Task Tracker';
  isTaskFormShowed: boolean = false;
  innerButtonText: string = 'Add';

  constructor() { }

  ngOnInit(): void {
  }

  toogleAddTask() {
    this.isTaskFormShowed = !this.isTaskFormShowed;
  }

  getInnerButtonText(): string{
    return this.isTaskFormShowed ? 'Close Form' : 'Add'
  }

  getColor(): string {
    return this.isTaskFormShowed ? 'red' : '#00B2FF'
  }
}
