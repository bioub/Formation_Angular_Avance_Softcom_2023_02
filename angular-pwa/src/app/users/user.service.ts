import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { User } from '../shared/models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  events = new EventEmitter<string>();

  constructor(private http: HttpClient) {}

  getList$(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiBaseUrl}/users`);
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
