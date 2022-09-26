import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from "angular-2-local-storage";
import {Router} from "@angular/router";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  constructor(private localStorage : LocalStorageService,private router:Router) { }

  ngOnInit(): void {
  }

  searchF(value: string) {

  }

  logout() {
    this.localStorage.get("token")
    this.localStorage.remove('token');
    this.localStorage.clearAll();
    this.router.navigateByUrl('/auth/login')
  }
}
