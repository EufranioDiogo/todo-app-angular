import { Task } from './../../Task';
import { TaskService } from 'src/app/services/task.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() getTasksEmit = new EventEmitter();
  taskForm = new FormGroup({
    text: new FormControl(''),
    day: new FormControl(''),
    reminder: new FormControl(false),
  });

  constructor(private taskService: TaskService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    this.taskService.createTask(this.taskForm.value).subscribe(() => {
      this.getTasksEmit.emit();
      this.taskForm.reset();
    })
  }

}
