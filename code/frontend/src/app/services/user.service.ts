import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  private http = inject(HttpClient);

  backendUrl = 'http://localhost:4000/user';

  login(email: string, password: string) {
    return this.http.post<User>(`${this.backendUrl}/login`, { email, password });
  }

  register(user: User){
    alert(JSON.stringify(user));
    return this.http.post<Object>(`${this.backendUrl}/register`, user);
  }
}
