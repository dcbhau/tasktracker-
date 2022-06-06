import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  text:string = '';
  day:string = '';
  reminder:boolean = false;

  @Output() addTask:EventEmitter<Task> = new EventEmitter();

  constructor() { }



  onSubmit(){
    if(this.text === '')
    {
      alert("Please add text");
      return;
    }

    const newTask = {
      text:this.text,
      day:this.day,
      reminder:this.reminder
    }
    
    this.addTask.emit(newTask);

    this.text = '';
    this.day= '';
    this.reminder = false;
  }

  ngOnInit(): void {
  }

}
