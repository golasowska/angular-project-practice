import {Component, OnInit} from '@angular/core';
import {TasksService} from '../services/tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  newTask: string;

  constructor(private taskService: TasksService) { }

  ngOnInit() {
  }

  add() {
    this.taskService.onAddTask(this.newTask);
    this.newTask = '';
  }

}
