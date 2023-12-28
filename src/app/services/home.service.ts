import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpStatusCode } from '@angular/common/http';
import { User } from '../models/user.model';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private apiURL = `https://jsonplaceholder.typicode.com/`;

  constructor(private http: HttpClient ) { }

  getAllUsers()
  {
    return this.http.get<User[]>(`${this.apiURL}users`)
  }

  getAllPosts()
  {
    return this.http.get<Post[]>(`${this.apiURL}posts`)
  }
}
