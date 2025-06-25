import { Component, EventEmitter, output, Output } from '@angular/core';
import { FormsModule,  } from '@angular/forms';
import { NewTask } from './neew-task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output()cancel=new EventEmitter<void>();
  @Output()add=new EventEmitter<NewTask>();
  entredTitle='';
  entredSummray='';
  entredDate='';
onCancel(){
this.cancel.emit();
}
onSubmit(){
this.add.emit({
  title:this.entredTitle,
  summary:this.entredSummray,
  date:this.entredDate

})
}
}
