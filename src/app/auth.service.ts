import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(username: string, password: string): Observable<boolean> {
    return this.httpClient.get<any>('http://localhost:4200/assets/users.json')
      .pipe(
        map(
          data => {
            const users = data.users as { username: string, password: string }[]
            return users.find(user => user.username == username && user.password === password)
              ? true : false
          }
        )
      )
  }
}
