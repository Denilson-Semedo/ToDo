import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoList';
  showFiller = false;
  menu = "menu";
  tasks = false
  today = true;
  important = false;
}
