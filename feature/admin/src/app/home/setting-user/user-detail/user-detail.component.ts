import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service/user-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  id: string;
  User: any;


  getById() {
    this.userService.getUser(this.id).subscribe(user => {
      console.log(user);
      this.User = user;
    })
  }

  constructor(private userService  : UserServiceService, private activedRoute: ActivatedRoute) {
    this.id = activedRoute.params['value']['id'];
    this.getById();
    
   }

  ngOnInit() {
    this.getById();
  }

}
