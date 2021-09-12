import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) { }

  getRestrictions() {
    return this.httpClient.get('http://www.mocky.io/v2/5d4aa9e93300006f000f5ea9',).pipe(map((response: any) => response));
  }
}
