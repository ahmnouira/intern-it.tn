import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service/user-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})

export class ListUserComponent implements OnInit {
  constructor(private userService: UserServiceService, private formBuilder: FormBuilder) { }

  updateForm: FormGroup;
  Users: any;
  id: string;
  submitted: boolean = false;

  ngOnInit() {

    this.getUsers();

    this.updateForm =  this.formBuilder.group({
      first_name: [''],
      last_name: [''],
      email: [''],
      tel: ['']
    })
  }

    getUsers() {
      this.userService.getUsers().subscribe(users => {
      console.log(users);
      this.Users = users;
    });

   }

   deleteUser(id: string) {
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
                 this.userService.deleteUser(id).subscribe(users => {
                   this.Users = users;
                   console.log(users);
                   return this.getUsers();
                 });
               }
             })

   }

  getOldUser(id: string, first_name: string, last_name: string, email: string, tel:string ) {
    this.id = id;
    this.updateForm.get('first_name').setValue(first_name);
    this.updateForm.get('last_name').setValue(last_name);
    this.updateForm.get('email').setValue(email);
    this.updateForm.get('tel').setValue(tel);
  }

  updateUser() {

    this.submitted = true;
    if(this.updateForm.invalid) {
      return
    }

    this.userService.updateUser(this.id, this.updateForm.value).subscribe(user => {
      this.submitted = false;
      this.updateForm.reset();
      this.getUsers();
    })
    
    Swal.fire(
      'OK!',
      'User Has been Updated',
      'success'
    )
  }

}
