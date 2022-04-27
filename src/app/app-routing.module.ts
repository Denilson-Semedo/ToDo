import { TasksComponent } from './tasks/tasks.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodayComponent } from './today/today.component';
import { ImportantComponent } from './important/important.component';

const routes: Routes = [
  { path: '', redirectTo: 'today', pathMatch: 'full' },
  { path: 'today', component: TodayComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'important', component: ImportantComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
