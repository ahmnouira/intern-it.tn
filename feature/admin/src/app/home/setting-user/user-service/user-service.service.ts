import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  fileToUpload: any;
  baseUrl = 'http://localhost:4000'

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.baseUrl + '/api/user/')
  }

  getUser(id) {
    return this.http.get(this.baseUrl + '/api/user/' + id)
  }

  deleteUser(id: string) {
    return this.http.delete(this.baseUrl + '/api/user/' + id);
  }

  addUser(User :any) {
    return this.http.post(this.baseUrl + '/api/user/', User)
  }

  updateUser(id: string, User:any) {
    return this.http.put(this.baseUrl + '/api/user/' + id, User)
  }



// parm : you can add file Object as paramater
/*
  addUserImgae(User) {

    console.log(User);
    console.log("fileTopload : ", fileToUpload[0]);
    let formData = new FormData();
    formData.append('nom', '' + User.nom);
    formData.append('image', fileToUpload[0])
    return this.http.post(this.baseUrl + '/user', formData)

  } */





}
