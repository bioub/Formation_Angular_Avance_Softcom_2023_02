import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { delay } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { User } from '../shared/models/user';
import { UserServiceInterface } from './user-service.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService implements UserServiceInterface {
  events = new Subject<string>();

  users$!: ReplaySubject<User[]>;

  constructor(private http: HttpClient) {}

  getList$(): Observable<User[]> {
    if (!this.users$) {
      this.users$ = new ReplaySubject<User[]>(1);
      this.http.get<User[]>(`${environment.apiBaseUrl}/users`).subscribe(this.users$);
    }

    return this.users$;
  }

  create$(user: User): Observable<User> {
    return this.http.post<User>(`${environment.apiBaseUrl}/users`, user);
  }

  getById$(id: number): Observable<User> {
    const req$ = this.http.get<User>(`${environment.apiBaseUrl}/users/${id}`);

    if (Number(id) === 4) {
      return req$.pipe(
        delay(3000),
      )
    }

    return req$;
  }
}
