import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  baseUrl = 'http://localhost:4000'

  constructor(private http: HttpClient) { }

  ListUser() {
    return this.http.get(this.baseUrl + '/api/user')
  }

}
