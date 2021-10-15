import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  appTitle: string = 'Task Tracker';
  isTaskFormShowed: boolean = false;
  innerButtonText: string = 'Add';
  @Output() showAddTaskFromEmit = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toogleAddTask(): void {
    this.isTaskFormShowed = !this.isTaskFormShowed;
    console.log(this.isTaskFormShowed)
    this.showAddTaskFromEmit.emit(this.isTaskFormShowed);
  }

  getInnerButtonText(): string {
    return this.isTaskFormShowed ? 'Close Form' : 'Add'
  }

  getColor(): string {
    return this.isTaskFormShowed ? 'red' : '#00B2FF'
  }
}
