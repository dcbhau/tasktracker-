import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes,faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task!:Task;
  @Output() deleteTask:EventEmitter<Task> = new EventEmitter();
  @Output() toggleReminder:EventEmitter<Task> = new EventEmitter();
  
  faTimes=faTimes
  constructor() { }
  onDelete(task:Task)
  {
    this.deleteTask.emit(task);
  }
  toggle(task:Task)
  {
    this.toggleReminder.emit(task);
  }
  ngOnInit(): void {
  }

}
