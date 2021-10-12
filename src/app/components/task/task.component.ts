import { Task } from './../../Task';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: Task = { id: -1, text: '', day: '', reminder: false };

  constructor() {
  }

  ngOnInit(): void {
  }

}
