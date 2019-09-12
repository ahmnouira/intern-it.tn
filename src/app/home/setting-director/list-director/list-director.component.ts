import { Component, OnInit } from '@angular/core';
import { DirectorService } from '../../../service-director.service'

@Component({
  selector: 'app-list-director',
  templateUrl: './list-director.component.html',
  styleUrls: ['./list-director.component.css']
})

export class ListDirectorComponent implements OnInit {

  constructor(private directorService: DirectorService) { }
  ListDirector;

  ngOnInit() {
    this.getAllDirector();

  }

  getAllDirector() {
    this.directorService.ListDirector().subscribe(res => {
      console.log(res);
      this.ListDirector = res
    })
  }

}
