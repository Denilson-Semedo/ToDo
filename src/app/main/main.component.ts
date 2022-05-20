import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title = 'ToDoList';
  showFiller = false;
  menu = "menu";
  tasks = false
  today = true;
  important = false;
  color= "blue";

  constructor(public authService: AuthService) {}

  ngOnInit(): void {
  }

}
