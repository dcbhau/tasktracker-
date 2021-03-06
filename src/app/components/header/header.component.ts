import { Component, OnInit } from '@angular/core';
import {UIService} from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title:string ="Tasktracker";
  showAddTask:boolean = false
  subscription:Subscription;

  constructor(private uiService : UIService) {
    this.subscription =this.uiService.onToggle().subscribe((value) => this.showAddTask = value);
   }

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }
  ngOnInit(): void {
  }

}
