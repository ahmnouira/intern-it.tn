import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DirectorService {

  baseUrl = 'http://localhost:4000'

  constructor(private http: HttpClient) { }

  getDirectors()  {
    return this.http.get(this.baseUrl + '/api/director/');
  }

    

  getDirector(id: string) {
    return this.http.get(this.baseUrl + '/api/director/' + id);
  }



  deleteDirector(id: string) {
    return this.http.delete(this.baseUrl + '/api/director/' + id);
  }

  addDirector(Director: any) {
    return this.http.post(this.baseUrl + '/api/director/', Director);
  }

  // update director service
  updateDirector(id: string, Director: any) {
    return this.http.put(this.baseUrl + '/api/director/' + id, Director);
  }
}
