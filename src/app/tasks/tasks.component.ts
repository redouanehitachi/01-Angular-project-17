import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTask } from './new-task/neew-task.model';
import { TasksService } from './tasks.service';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true}) userId!:string;
  @Input({required:true}) name?:string;
  isAddTask=false;
  constructor( private tasksService:TasksService){
      
  }
  
  get selectedUserTask(){
    return this.tasksService.getUserTasks(this.userId)
  }
  onCompleteTask(id:string){
  
  }

  onStartAddTask(){
    this.isAddTask=true;
  }
  onCancelAddTask(){
    this.isAddTask=false;
  }
  onAddTask(taskData:NewTask){
this.tasks.unshift({
  id:new Date().getTime().toString(),
  title:taskData.title,
  summary:taskData.summary,
  dueDate:taskData.date,userId:this.userId
})
this.isAddTask=false
  }
}
