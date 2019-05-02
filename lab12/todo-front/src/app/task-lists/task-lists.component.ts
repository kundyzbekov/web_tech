import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../main/services/provider.service';
import { ITaskList } from '../main/models/models';
import { Location } from '@angular/common';
import { AuthService } from '../main/services/auth.service';

@Component({
  selector: 'app-task-lists',
  templateUrl: './task-lists.component.html',
  styleUrls: ['./task-lists.component.css']
})
export class TaskListsComponent implements OnInit {

  public taskLists: ITaskList[] = [];

  public taskListName: string = ""

  constructor(
    private provider: ProviderService,
    private location: Location,
    private auth: AuthService
    ) { }

  ngOnInit() {
    if(this.auth.isAuthenticated()){
    this.provider.getTaskLists().then(res => {
      this.taskLists = res;
    })
  }
  }

  navigateBack(){
    this.location.back()
  }

  createTaskList(){
    if(this.taskListName != ''){
    this.provider.createTaskList(this.taskListName).then(res => {
      this.taskLists.push(res)
    })
  }
  }

  // sendId(id: number){
  //   this.provider.sendMessage.emit(id+"")
  // }

}
