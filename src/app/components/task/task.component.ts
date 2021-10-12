import { Task } from './../../Task';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: Task = { id: -1, text: '', day: '', reminder: false };
  @Output() deleteTaskEmit = new EventEmitter();

  faTimes = faTimes;

  constructor() {
  }

  ngOnInit(): void {
  }

  deleteTask(id: number | undefined): void {
    this.deleteTaskEmit.emit(id);
  }
}
