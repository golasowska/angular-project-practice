import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  newTask: string;
  taskList: Array<string> = [];
  done: Array<string> = [];

  add() {
    this.taskList.push(this.newTask);
    this.newTask = '';
  }

  onDone(task: string) {
    this.done.push(task);
    this.onRemove(task);
  }

  onRemove(task: string) {
    // this.taskList.splice(index, 1);
    this.taskList = this.taskList.filter(e => e !== task);
  }

}
