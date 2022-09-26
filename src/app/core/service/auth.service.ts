import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FormControl, ɵFormGroupRawValue, ɵTypedOrUntyped} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = environment.baseUrl;
  constructor(private http: HttpClient) { }



  public register(name:any, username:any, password:any):Observable<any>{
    console.log(this.url+'/user/save')
    return this.http.post(this.url+'/user/save',{
      name:name,
      username:username,
      password:password
    });
  }

  public addRoleToUser(username:any, roleName:any):Observable<any>{
    return this.http.post(this.url+'/role/addtouser',{
      username:username,
      roleName:roleName
    });
  }


  public login(username: any, password:any):Observable<any> {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    return this.http.post(this.url+'/login',formData);
  }
}
/*
public login():Observable<any>{
     const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
return this.http.post(this.url+'/login',formData);
}
*/
