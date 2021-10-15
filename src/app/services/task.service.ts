import { Injectable } from '@angular/core';
import { Task } from './../Task';
// import { TASKS } from './../mock-tasks';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return  this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(id: number): Observable<Task> {
    return  this.http.delete<Task>(this.apiUrl + `/${id}`);
  }

  updateTaskReminder(task: Task): Observable<Task> {
    task.reminder = !task.reminder;
    return this.http.put<Task>(this.apiUrl + `/${task.id}`, task);
  }
}
