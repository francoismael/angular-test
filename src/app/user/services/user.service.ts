import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly apiUrl = environment.apiUrl;
  
  constructor(private readonly http: HttpClient) { }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]> (
      `${this.apiUrl}/users?type=all`
    );
  }
}
