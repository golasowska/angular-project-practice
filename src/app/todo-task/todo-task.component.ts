import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {
  @Output() removeTask = new EventEmitter<string>();
  @Output() taskDone = new EventEmitter<string>();

  @Input() taskList: Array<string>;

  constructor() { }
  ngOnInit() {
  }
  onDone(task: string) {
    this.taskDone.emit(task);
  }
  onRemove(task: string) {
    this.removeTask.emit(task);
  }
}
