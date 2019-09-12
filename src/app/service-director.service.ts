import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DirectorService {


  baseUrl = 'http://localhost:4000'

  constructor(private http: HttpClient) { }

  ListDirector() {
    return this.http.get(this.baseUrl + '/api/director/')
  }

}
