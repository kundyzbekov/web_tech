import { Component, OnInit } from '@angular/core';
import { ITaskList } from '../main/models/models';
import { ProviderService } from '../main/services/provider.service';
import { Location } from '@angular/common';
import { identifierModuleUrl } from '@angular/compiler';
import { ActivatedRoute } from '@angular/router';
import { empty } from 'rxjs';
import { AuthService } from '../main/services/auth.service';

@Component({
  selector: 'app-task-list-detail',
  templateUrl: './task-list-detail.component.html',
  styleUrls: ['./task-list-detail.component.css']
})
export class TaskListDetailComponent implements OnInit {

  public id: number = 0;

  public taskList: any = {}

  constructor(
    private provider: ProviderService,
    private router: ActivatedRoute,
    private location: Location,
    private auth: AuthService
  ) { }

  ngOnInit() {

    // this.provider.sendMessage.subscribe(res => {
    //   this.id = parseInt(res)
    // })
    if(this.auth.isAuthenticated){
    this.id = parseInt(this.router.snapshot.paramMap.get('id'))

    if(this.id){
      this.provider.getTaskListDetail(this.id).then(res => {
        this.taskList = res
      })
    }
  }
  }

  navigateBack(){
    this.location.back()
  }

  updateTaskList(){
    this.provider.updateTaskList(this.taskList).then(res => {
      this.taskList = res
    })
  }

  deleteTaskList(){
    this.provider.deleteTaskList(this.taskList.id).then(() => {
      this.location.back()
    })
  }

}
