import { Component, OnInit } from '@angular/core';
import { ServiceUserService } from '../service-user.service';
import { DirectorService } from '../director.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userForm : FormGroup;
  directorForm : FormGroup;

  constructor(private serviceUser: ServiceUserService, private serviceDirector: DirectorService, private formBuilder: FormBuilder, private router: Router) {

   }

  ngOnInit() {

    this.userForm = this.formBuilder.group({

      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['',Validators.required],
      repeatPassword: ['', Validators.required],
      tel: ['']

    });

    this.directorForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required],
      secret_id: ['', Validators.required],
      repeatSecret: ['', Validators.required]
  });
}

  
  addUser() {

    console.log(this.userForm.value);
    
    // stop here if form is invalid
    if (this.userForm.invalid) {
      console.log(this.userForm.invalid);

      Swal.fire(
        'ERROR!',
        'Form Invalid',
        'error'
      )
        return;
    }

    if(this.userForm.value.password == this.userForm.value.repeatPassword) {

      var user = {
        first_name: this.userForm.value.first_name,
        last_name: this.userForm.value.last_name,
        email: this.userForm.value.email,
        password: this.userForm.value.password,
        tel: this.userForm.value.tel
      }

    console.log("user :", user);

    this.serviceUser.addUser(user).subscribe(user => {
      console.log(user);
      this.userForm.reset();
    })

    Swal.fire({
      position: 'top-end',
      type: 'success',
      title: 'User Has Been Registered',
      showConfirmButton: false,
      timer: 2000
    })

    this.router.navigate(['log-in'])

 } else {
  Swal.fire(
    'ERROR!',
    'Check Password field',
    'error'
  )
}
} // end of addUser

addDirector() {

  
  console.log(this.directorForm.value);
  //this.submitted = true;
  // stop here if form is invalid
  if (this.directorForm.invalid) {

    Swal.fire(
      'ERROR!',
      'Form Invalid',
      'error'
    )

      return;
  }

  if((this.directorForm.value.repeatPassword == this.directorForm.value.password) && (this.directorForm.value.secret_id == this.directorForm.value.repeatSecret)) {
    var director = {
      email: this.directorForm.value.email,
      password: this.directorForm.value.password,
      secret_id: this.directorForm.value.secret_id
    }

  this.serviceDirector.addDirector(director).subscribe( director => {
    console.log(director);
    //this.submitted = false;
    this.directorForm.reset();
  })

  Swal.fire({
    position: 'top-end',
    type: 'success',
    title: 'Director Has Been Registered',
    showConfirmButton: false,
    timer: 2000
  })

  this.router.navigate(['log-in'])

} else {


Swal.fire(
    'ERROR',
    'Check Fields',
    'error'
)
}
} // end of addDirector

}
