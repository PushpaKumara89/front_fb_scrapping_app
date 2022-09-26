import { Component, OnInit } from '@angular/core';
import {environment} from "../../../../../environments/environment";
import {Router} from "@angular/router";
import {FbDetailsServiceService} from "../../core/service/fb-details-service.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  url=environment.baseUrl;
  dome:string='/downloadFile/cover_img/'

  constructor(public service: FbDetailsServiceService, private route: Router) { }
  pages:any []=[];
  notSearch:boolean =true

  ngOnInit(): void {}

  searchF(value: string) {
    this.notSearch=value.length==0
    this.service.getFbPages(value).subscribe(response=>{
      console.log(response)
      this.pages =response;
    })
  }

  navigateToImages(page_name: any) {
    console.log(page_name)
    this.route.navigate(['/dash-board/image_pallet'], {queryParams: {data: page_name}}).then(r  =>{
      console.log(r.valueOf())
    })

  }
}
