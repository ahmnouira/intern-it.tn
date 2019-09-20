import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})


export class LoginService {

  baseUrl = 'http://localhost:4000'

  constructor(private http: HttpClient) { }


  getLogin() {
    return this.http.get(this.baseUrl + '/login/')
  }

  postLogin(User: any) {
    return this.http.post(this.baseUrl + '/login/', User)
  }


  getAuth() {
    return this.http.get(this.baseUrl + '/auth/')
  }

  postAuth(User: any) {
    return this.http.post(this.baseUrl + '/auth/', User)

  }
  
}
