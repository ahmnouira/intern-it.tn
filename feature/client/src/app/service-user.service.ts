import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const PROTOCOL = "http";
const PORT = 4000;


@Injectable({
  providedIn: 'root'
})
export class ServiceUserService {


  baseUrl : string 
  constructor(private http: HttpClient) { 

    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }

  addUser(User:any) {
   return  this.http.post(this.baseUrl + 'api/user/', User)
  }


}
