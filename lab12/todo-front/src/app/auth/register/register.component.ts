import { Component, OnInit } from '@angular/core';
import { ProviderService } from 'src/app/main/services/provider.service';
import { AuthService } from 'src/app/main/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public username: any = "";

  public password: any = "";

  constructor(
    private provider: ProviderService,
    private auth: AuthService
  ) { }

  ngOnInit() {
  }

  register() {
    console.log("asdfasdfasdf")
    if (this.username !== '' && this.password !== '') {
      this.auth.register(this.username, this.password);
    }
  }

}
