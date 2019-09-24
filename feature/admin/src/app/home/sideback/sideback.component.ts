import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sideback',
  templateUrl: './sideback.component.html',
  styleUrls: ['./sideback.component.css']
})
export class SidebackComponent implements OnInit {

  USER  : any

  constructor() { }


  getUserInfo() {
    this.USER = JSON.parse(localStorage.getItem('userConnected'))
  }

  ngOnInit() {
    this.getUserInfo();
    console.log("USER : ", this.USER)
  }

}
