import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { DirectorService } from '../director-service/service-director.service';
import Swal from 'sweetalert2';

//formdata

@Component({
  selector: 'app-add-director',
  templateUrl: './add-director.component.html',
  styleUrls: ['./add-director.component.css']
})

export class AddDirectorComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;


  constructor(private directorServeice: DirectorService, private formBuilder: FormBuilder ) {
   }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
            repeatPassword: ['', Validators.required],
            secret_id: ['', Validators.required],
            repeatSecret:['', Validators.required]

        })
  }

    // convenience getter for easy access to form field
    get f() { return this.registerForm.controls; }



    

    addDirector() {


            console.log(this.registerForm.value);
            this.submitted = true;
            // stop here if form is invalid
            if (this.registerForm.invalid) {
                return;
            }

            if((this.registerForm.value.repeatPassword == this.registerForm.value.password) && (this.registerForm.value.secret_id == this.registerForm.value.repeatSecret)) {
              var director = {
                email: this.registerForm.value.email,
                password: this.registerForm.value.password,
                secret_id: this.registerForm.value.secret_id
              }

            this.directorServeice.addDirector(director).subscribe( director => {
              console.log(director);
              this.submitted = false;
              this.registerForm.reset();
            })

            Swal.fire(
              'OK!',
              'Director Has been Added',
              'success'
            )
        } else {
          this.registerForm.reset();
          Swal.fire(
              'ERROR',
              'Check Fields',
              'error'
          )
        }
        
          
      }
}
