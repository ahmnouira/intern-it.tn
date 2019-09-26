
// ToDO: check logic in Login for both 'user' & 'director'

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm : FormGroup;
  directorForm : FormGroup;

  constructor(private loginService : LoginService, private router: Router, private formBuilder : FormBuilder ) { 

    this.userForm  = this.formBuilder.group({
      email : ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.directorForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required],
      secret_id : ['', Validators.required]

    })

  }

  ngOnInit() {

  }


  userlogin() {
    if(this.userForm.invalid) {

      Swal.fire({
        title: 'ERROR',
        text: 'check fileds',
        type: 'warning',
      });
      return;
    }

    console.log("userLoginForm :", this.userForm.value);
    this.loginService.postLogin(this.userForm.value).subscribe(data => {
      console.log("localStorage", localStorage);
      if(! localStorage.getItem('token') && data['user']) {
        console.log('data :', data);

        if (data['status'] === 'OK') {
          localStorage.setItem('user', JSON.stringify(data['user']))
          localStorage.setItem('token',JSON.stringify(data['user']['token']))


        console.log("full_name :", JSON.parse(localStorage.getItem('user')).full_name)

          Swal.fire({
            position:'top-right',
            type: 'success',
            title : 'User',
            html : "Welcome: <b style='color: red'>" + JSON.parse(localStorage.getItem('user')).full_name +"</b>",
            showConfirmButton: false,
            timer: 5000
          })

          this.userForm.reset();
          this.router.navigate(['home'])

        } else {
          Swal.fire(
            
            'Error !',
            'Check your email or password',
            'warning'
          )
        }
      } else {
        Swal.fire(
          'Info !',
          "You are already logged In",
          'info'
        )
        
      }
    })
  }


  directorlogin() {
    if(this.directorForm.invalid) {

      Swal.fire({
        title: 'ERROR',
        text: 'check fileds',
        type: 'warning',
      });
      return;
    }

    console.log("directorForm :", this.directorForm.value);
    this.loginService.postLogin(this.directorForm.value).subscribe(data => {
      console.log("data", data);
      if(!localStorage.getItem('token') && data['user']) {
        console.log('data :', data);

        if (data['status'] == 'OK') {
          localStorage.setItem('user', JSON.stringify(data['user']))
          localStorage.setItem('token',JSON.stringify(data['user']['token']))


        //console.log("full_name :", JSON.parse(localStorage.getItem('user')).full_name)

          Swal.fire({
            position:'top-right',
            type: 'success',
            title : 'Director',
            html: "Welcome: <b style='color:red'>" + JSON.parse(localStorage.getItem('user')).email +"</b>",
            showConfirmButton: false,
            timer: 5000
          })

          this.userForm.reset();
          this.router.navigate(['home'])

        } else {
          Swal.fire(
            
            'Error !',
            'Check your Secret Key or Password',
            'warning'
          )
        }
      } else {
        Swal.fire(

          'Info !',
          "You are already logged In",
          'info'
        )
        
      }
    })
  }

}
