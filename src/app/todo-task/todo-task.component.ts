import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {TasksService} from '../services/tasks.service';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TodoTaskComponent implements OnInit {

  taskList: Array<string>;

  constructor(private tasksService: TasksService) {
    this.tasksService.getTaskListObs().subscribe((tasks: Array<string>) => {
      this.taskList = tasks;
    });
  }

  ngOnInit() {
  }
  onDone(task: string) {
    this.tasksService.onDone(task);
  }
  onRemove(task: string) {
    this.tasksService.onRemove(task);
  }

  getColor(): string {
    return this.taskList.length >= 5 ? 'green' : 'red';
  }
}
