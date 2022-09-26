import { Injectable } from '@angular/core';
import {LocalStorageService} from "angular-2-local-storage";

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {
  static accessToken:any = null;
  tem:any =[]
  constructor(private localStorage : LocalStorageService) {
    this.tem= this.localStorage.get('token');
    TokenInterceptorService.accessToken = this.tem.access_token
  }
}
