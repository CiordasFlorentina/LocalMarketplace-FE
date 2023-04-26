import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: User | null = null;
  currentUser$ = new BehaviorSubject<User | null>(null);
  url = environment.url;

  constructor(private httpClient: HttpClient) {
  }

  login(email: string, password: string): Observable<User> {
    return this.httpClient.get<User>(`${this.url}/user/login/email/${email}/password/${password}`);
  }

  register(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.url}/user/register`, user);
  }

  setUser(user: User): void {
    this.currentUser = user;
    localStorage.setItem('user', JSON.stringify(user));
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem('user');
  }

  getUser(): User {
    if(!this.currentUser && localStorage.getItem('user')) {
      this.currentUser = JSON.parse(localStorage.getItem('user') as string);
    }
    this.currentUser$.next(this.currentUser);
    return this.currentUser as User;
  }


}
