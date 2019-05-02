import { Component, OnInit } from '@angular/core';
import { AuthService } from '../main/services/auth.service';
@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }
  logout(){
   this.auth.logout()
 }
}
