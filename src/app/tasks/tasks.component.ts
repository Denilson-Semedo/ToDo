import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  title  = 'Todo List'
  list:any[] = [];

  addTask(item:string){
    this.list.push({id:this.list.length,name:item});
    console.warn(this.list);
  }

  delTask(id:number){
    this.list=this.list.filter(item=>item.id!==id);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
