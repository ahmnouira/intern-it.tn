import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../user-service/user-service.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  //fileToUpload = Array<File>;
  image: any;

  constructor(private userService: UserServiceService, private formBuilder: FormBuilder ) { }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({

      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['',Validators.required],
      repeatPassword: ['', Validators.required],
      tel: ['']
  })

  }

      // convenience getter for easy access to form fiel
      get f() { return this.registerForm.controls }

      addUser() {

              console.log(this.registerForm.value);
              this.submitted = true;
              // stop here if form is invalid
            /*  if (this.registerForm.invalid) {
                console.log(this.registerForm.invalid);
                  return;

              }*/

              if(this.registerForm.value.password == this.registerForm.value.repeatPassword) {

                var user = {
                  first_name: this.registerForm.value.first_name,
                  last_name: this.registerForm.value.last_name,
                  email: this.registerForm.value.email,
                  password: this.registerForm.value.password,
                  tel: this.registerForm.value.tel
                }

              console.log("user :", user);

              this.userService.addUser(user).subscribe(user => {
                console.log(user);
                this.submitted = false;
                this.registerForm.reset();
              })

              Swal.fire(
                'OK!',
                'User Has been Added',
                'success'
              )
           } else {
            Swal.fire(
              'ERROR!',
              'Check Password filed',
              'error'
            )
          }
        }

  /*  getFileName2(file:any) {
      this.fileToUpload = file.target.files as Array<File>;
      this.image = file.target.files[0].name;
    }


     getFileName(file: any) {
       this.fileToUpload=<Array<File>>file.target.files;
       this.image = this.fileToUpload[0]["name"]
     }   */

    }
