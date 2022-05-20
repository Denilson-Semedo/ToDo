import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Task } from '../../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private dbPath = '/task';
  tasksRef: AngularFirestoreCollection<Task>;

  constructor(private db: AngularFirestore) {
    this.tasksRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Task> {
    return this.tasksRef;
  }

  create(task: Task): any {
    return this.tasksRef.add({ ...task });
  }

  update(name: string, data: any): Promise<void> {
    return this.tasksRef.doc(name).update(data);
  }

  delete(name: string): Promise<void> {
    return this.tasksRef.doc('task').delete();
  }

}