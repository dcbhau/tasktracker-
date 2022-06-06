import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';
import { UIService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  showAddTask: boolean =false; 
  subscription:Subscription;

  constructor(private taskService : TaskService,private uiService:UIService) {
    this.subscription =this.uiService.onToggle().subscribe((value) => this.showAddTask = value);
   }
  tasks:Task[] = [];

  ngOnInit(): void {
    this.getTasks();
  }

  //fetch tasks
  getTasks():void {
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks)
  }

  //delete Task
  deleteTask(task:Task){
    this.taskService.deleteTask(task).subscribe(() => (this.tasks = this.tasks.filter((t)=> 
        t.id !== task.id 
    )) )
  }   

  //reminder toggler
  toggleReminder(task:Task) {
      task.reminder = !task.reminder;
      this.taskService.updateReminder(task).subscribe();
  }

  //add task
  addTask(task:Task) {
    this.taskService.addTask(task).subscribe((task) => this.tasks.push(task));
  }
}
