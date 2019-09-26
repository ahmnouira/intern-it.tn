import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';



const PORTOCOL = 'http';

const PORT = 4000

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  baseURL : string;

  constructor(private http: HttpClient) { 
    this.baseURL = `${PORTOCOL}://${location.hostname}:${PORT}`;
  }

  postLogin(User : any) {
    return this.http.post(this.baseURL + '/login/', User);
  }
}
