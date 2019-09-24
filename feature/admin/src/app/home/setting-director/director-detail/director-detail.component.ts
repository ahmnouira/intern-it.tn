import { Component, OnInit } from '@angular/core';
import {DirectorService} from '../director-service/service-director.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-director-detail',
  templateUrl: './director-detail.component.html',
  styleUrls: ['./director-detail.component.css']
})
export class DirectorDetailComponent implements OnInit {

  id: string;
  director;
  
  constructor(private directorService: DirectorService, private activeRoute: ActivatedRoute) {
    this.id = this.activeRoute.params['value']['id'];
    this.getByID();
   }

  getByID() {
    this.directorService.getDirector(this.id).subscribe(director => {
      console.log(director['director']);
      this.director = director['director'];
    })
  } 

  ngOnInit() {
    this.getByID();
  }

}
