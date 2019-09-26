import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderHomeComponent implements OnInit {

  Director: string

  constructor() {
          this.Director = JSON.parse(localStorage.getItem('user')).account
   }

  ngOnInit() {

  }


  logout() {
    localStorage.clear();
  }



}
