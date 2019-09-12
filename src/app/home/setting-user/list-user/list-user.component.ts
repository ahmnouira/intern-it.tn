import { Component, OnInit } from '@angular/core';
import {UserServiceService } from '../../../user-service.service'
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  constructor(private userService: UserServiceService) { }
  User;

  ngOnInit() {
    this.getAllUser();
  }
    getAllUser()
   {
      this.userService.ListUser().subscribe(res => {
      console.log(res);
      this.User = res;
    });
   }
}
