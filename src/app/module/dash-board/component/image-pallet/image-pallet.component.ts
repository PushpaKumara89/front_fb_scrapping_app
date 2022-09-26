import { Component, OnInit } from '@angular/core';
import {environment} from "../../../../../environments/environment";
import {ActivatedRoute, Router} from "@angular/router";
import {FbDetailsServiceService} from "../../core/service/fb-details-service.service";
import {LocalStorageService} from "angular-2-local-storage";
import {TokenInterceptorService} from "../../../../token-interceptor.service";

@Component({
  selector: 'app-image-pallet',
  templateUrl: './image-pallet.component.html',
  styleUrls: ['./image-pallet.component.scss']
})
export class ImagePalletComponent implements OnInit {

  title:string ='';
  images:string []=[];
  constructor(private activateRoute: ActivatedRoute,
              private service :FbDetailsServiceService,
              private localStorage : LocalStorageService,
              private router:Router
  ) {}

  ngOnInit(): void {
    if (this.localStorage.get("token")!=null){
      this.activateRoute.queryParams.subscribe((params:any)=>{
        this.service.getPostScreenShots(params['data']).subscribe(response=>{
          this.title=params['data']
          this.images=response;
          console.log(response)
        })
      })
    } else {
      this.router.navigateByUrl('/auth/login')
    }
  }
}
