import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  USER : any

  constructor() { }

  getUserInfo() {
    this.USER = JSON.parse(localStorage.getItem('userConnected'))
  }

  ngOnInit() {
    this.getUserInfo();
    console.log("USER : ", this.USER)

  }

  logout() {
    localStorage.clear();
  }

  

}
