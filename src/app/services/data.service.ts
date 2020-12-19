import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getCategories(){
    var result = this.http.get('https://api.publicapis.org/categories')
    return result;
  }
}
