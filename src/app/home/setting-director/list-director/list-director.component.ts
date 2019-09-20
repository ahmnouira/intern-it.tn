import { Component, OnInit } from '@angular/core';
import { DirectorService } from '../director-service/service-director.service';
import {FormBuilder, FormGroup } from '@angular/forms';

import Swal from 'sweetalert2';

 @Component({
  selector: 'app-list-director',
  templateUrl: './list-director.component.html',
  styleUrls: ['./list-director.component.css']
})

export class ListDirectorComponent implements OnInit {

   updateForm: FormGroup;
   Directors: any;
   submitted = false;
   id: string;

  constructor(private directorService: DirectorService, private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.getDirectors();

    this.updateForm = this.formBuilder.group({
      email: [''],
      secret_id: [''],
      repeatSecret: ['']
    })
  }

  getDirectors() {
    this.directorService.getDirectors().subscribe(directors => {
      console.log(directors);
      this.Directors = directors;
    });
  }

  deleteDirector(id: string){

    Swal.fire({
          title: 'Are you Sure ?',
          text: "You can't return !",
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#d6100f',
          cancelButtonColor: '#3dc405',
          confirmButtonText: 'Yes, Remove !',
          cancelButtonText:'Cancel'
        })
          .then((result) => {
            if (result.value) {
            this.directorService.deleteDirector(id).subscribe(directors => {
            console.log(directors);
            this.Directors = directors;
            return this.getDirectors();
                })
            }
          })
      }

  getOldDirector(id: string, email: string, secret_id: string) {
      this.id = id;
      console.log('getEmail: ', email);
      this.updateForm.get('email').setValue(email);
      this.updateForm.get('secret_id').setValue(secret_id);
    }

  updateDirector() {

    this.submitted = true;
    if(this.updateForm.invalid) {
      return
    }

    if (this.updateForm.value.secret_id === this.updateForm.value.repeatSecret) {

    this.directorService.updateDirector(this.id,this.updateForm.value).subscribe(director => {
      this.submitted = false;
      this.updateForm.reset();
      this.getDirectors();
    })
    Swal.fire(
      'OK!',
      'Offer Has been Updated',
      'success'
    )
  } else {
    Swal.fire(
      'Error!',
      'check fields',
      'error'
    )
  }

}

}
