import {Component, Input, OnInit} from '@angular/core';
import {environment} from "../../../../../../environments/environment";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post:string= '' as string
  url=environment.baseUrl
  dome='/downloadFile/post_img/'

  constructor() { }

  ngOnInit(): void {
  }
}
