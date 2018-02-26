import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  newTask: string;
  taskList: Array<string> = [];
  done: Array<string> = [];

  onAddTask(task: string) {
    this.taskList.push(task);
  }

  onDone(task: string) {
    this.done.push(task);
    this.onRemove(task);
  }

  onRemove(task: string) {
    // this.taskList.splice(index, 1);
    this.taskList = this.taskList.filter(e => e !== task);
  }

  ngOnInit(): void {
    this.taskList = ['Wash car', 'Walk dog', 'Shopping', "Call Friend"];
  }

}

