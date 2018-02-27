import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {TasksService} from '../services/tasks.service';
import {Task} from '../models/task';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TodoTaskComponent implements OnInit {

  taskList: Array<Task>;

  constructor(private tasksService: TasksService) {
    this.tasksService.getTaskListObs().subscribe((tasks: Array<Task>) => {
      this.taskList = tasks.filter( t => t.isDone === false);
    });
  }

  ngOnInit() {
  }
  onDone(task: Task ) {
    this.tasksService.onDone(task);
  }
  onRemove(task: Task) {
    this.tasksService.onRemove(task);
  }

  getColor(): string {
    return this.taskList.length >= 5 ? 'green' : 'red';
  }
}
