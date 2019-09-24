import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  User 

  constructor(private formBuilder: FormBuilder, private serviceLogin : LoginService, private router: Router) { }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      email: [''],
      password: ['']
  })

  }

   // convenience getter for easy access to form fiel
   //get f() { return this.registerForm.controls; }



  login() {
    this.submitted = true;
    // stop here if form is invalid

    console.log(this.registerForm.invalid)
    if (this.registerForm.invalid) {
        return;
   } 

   //console.log(this.registerForm.value);

    this.serviceLogin.postLogin(this.registerForm.value).subscribe(res => {
      console.log("localStorage", localStorage);
      if (!localStorage.getItem('token') && res['user']) {
      console.log(res);
      if (res['status'] === 'OK') {
        localStorage.setItem('userConnected', JSON.stringify(res['user']))
        localStorage.setItem('token', JSON.stringify(res['user']['token']))

        Swal.fire({
          position: 'top-end',
          type: 'success',
          title: 'Welcome',
          showConfirmButton: false,
          timer: 2000
        })

        this.registerForm.reset();

        this.router.navigate(['home'])
       
      }

    else {

      Swal.fire(
        'Error!',
        'Check your email or password!',
        'error'
      )
      
    }
  } else {

    Swal.fire(
      'Error!',
      "You are already logged In",
      "error",
    )

  }      
    })
  }

}
