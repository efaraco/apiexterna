import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userUrl : string = 'https://peticiones.online/api/users/'
  constructor( private httpClient: HttpClient) { }

  getAll (pPagNumber: number = 1): Promise<any>{
    return lastValueFrom (this.httpClient.get<any>(`${this.userUrl}?page=${pPagNumber}`))
  }

}
