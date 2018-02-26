import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

@Injectable() export class TasksService {

  private taskList: Array<string> = [];
  private done: Array<string> = [];

  private tasksListObs = new BehaviorSubject<Array<string>>(this.taskList);
  private tasksDoneObs = new BehaviorSubject<Array<string>>(this.done);

  constructor() {
    this.taskList = ['Wash car', 'Walk dog', 'Shopping', 'Call Friend'];
    this.tasksListObs.next(this.taskList);
  }

  onAddTask(task: string) {
    this.taskList.push(task);
    this.tasksListObs.next(this.taskList);
  }

  onDone(task: string) {
    this.done.push(task);
    this.onRemove(task);
    this.tasksDoneObs.next(this.done);
  }

  onRemove(task: string) {
    // this.taskList.splice(index, 1);
    this.taskList = this.taskList.filter(e => e !== task);
    this.tasksListObs.next(this.taskList);
  }

  getTaskListObs(): Observable<Array<string>> {
    return this.tasksListObs.asObservable();
  }

  getTaskDoneObs(): Observable<Array<string>> {
    return this.tasksDoneObs.asObservable();
  }

}
