import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {Task} from '../models/task';
import {HttpService} from './http.service';

@Injectable() export class TasksService {

  private tasksListObs = new BehaviorSubject<Array<Task>>([]);


  constructor(private httpService: HttpService) {
    this.httpService.getTasks().subscribe( list => {
      this.tasksListObs.next(list);
    });
  }

  onAddTask(task: Array<Task>) {
    const list = this.tasksListObs.getValue().concat(task);
    this.tasksListObs.next(list);
  }

  onDone(task: Task) {
    task.end = new Date().toLocaleDateString();
    task.isDone = true;
    const list = this.tasksListObs.getValue();
    this.tasksListObs.next(list);
  }

  onRemove(task: Task) {
    const list = this.tasksListObs.getValue().filter(e => e !== task);
    this.tasksListObs.next(list);
  }

  getTaskListObs(): Observable<Array<Task>> {
    return this.tasksListObs.asObservable();
  }

  saveTasksInDb() {
    this.httpService.saveTasks(this.tasksListObs.getValue());
  }


}
