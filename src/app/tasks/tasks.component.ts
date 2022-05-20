import { User } from './../shared/services/user';
import { TaskService } from './../shared/services/task.service';
import { Task } from './../models/task';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { AuthService } from '../shared/services/auth.service';
import { userInfo } from 'os';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  title  = 'Todo List'
  //Task = new this.Task();
  list:any[] = [];
  tasks?: Task[];
  task = {} as Task;
  user = JSON.parse(localStorage.getItem('user')!);
  //var myListObject = [] as Array<IObject>

  constructor(private taskService: TaskService, public authService: AuthService) { }
  ngOnInit(): void {
    this.listTask();
  }

  
  addTask(item:string){
    this.task.name = item;
    this.task.importante = false;
    //this.task.user = ;
    console.log(this.user)

    console.log(">>" + this.task);

    this.list.push({id:this.list.length,name:item});
    console.warn(this.list);

    this.taskService.create(this.task).then(() => {
      console.log(this.task);
      //this.submitted = true;
    });

  }

  listTask(){
    this.taskService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.tasks = data;
    });
  }


  delTask(task:Task){
    //this.list=this.list.filter(item=>item.id!==id);
    console.warn(task.name);
    this.taskService.delete(task.name)
        .then(() => {
          this.listTask();
          console.log('The task was deleted successfully!');
        })
        .catch(err => console.log(err));
    }
  }





