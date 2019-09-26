import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const PORT = 4000;
const PROTOCOL = 'http';

@Injectable({
  providedIn: 'root'
})
export class DirectorService {

  baseURL : string

  constructor(private http: HttpClient) { 

    this.baseURL = `${PROTOCOL}://${location.hostname}:${PORT}/`;

  }

  addDirector(Director :any) {
    return this.http.post(this.baseURL + 'api/director/', Director)
  }
 }
