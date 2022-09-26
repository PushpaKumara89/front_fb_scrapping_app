import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../../environments/environment";
import {LocalStorageService} from "angular-2-local-storage";

@Injectable({
  providedIn: 'root'
})
export class FbDetailsServiceService {
  private url = environment.baseUrl;
  constructor(private http: HttpClient, private localStorageService:LocalStorageService) { }

  userDetails:any =[];
  public getFbPages(txt:string):Observable<any>{
    return this.http.get(this.url+'/post/get_pages', {headers:{txt:txt}});
  }

  public getPostScreenShots(page:string):Observable<any>{
   this.userDetails = this.localStorageService.get("token")
    console.log();
    return this.http.get(this.url+'/post/get_page_img',{headers:{page:page,Authorization:[`Bearer ${this.userDetails.access_token}`]}});
  }
}
