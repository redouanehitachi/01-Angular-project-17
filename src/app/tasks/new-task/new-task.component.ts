import { Component, EventEmitter, inject, Input, output, Output } from '@angular/core';
import { FormsModule,  } from '@angular/forms';
import { NewTask } from './neew-task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required:true})userId!:string;
  @Output()close=new EventEmitter<void>();
 
  entredTitle='';
  entredSummray='';
  entredDate='';
  private tasksService=inject(TasksService)
onCancel(){
this.close.emit();
}
onSubmit(){
this.tasksService.addTasks({
  title: this.entredTitle,
  summary:this.entredSummray,
  date:this.entredDate
}, this.userId);
this.close.emit()
}
}
