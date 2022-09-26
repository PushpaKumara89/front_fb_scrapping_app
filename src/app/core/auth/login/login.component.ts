import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";
import {LocalStorageService} from "angular-2-local-storage";
import {TokenInterceptorService} from "../../../token-interceptor.service";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  url =environment.baseUrl;

  loginForm = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required])
  })

  constructor(private auth :AuthService, private router : Router, private localStorage : LocalStorageService, private http:HttpClient ) { }

  ngOnInit(): void {
  }

  login() {
    const {email, password}=this.loginForm.value
    this.auth.login(email,password).subscribe((response:any) => {
      if (response != null){
        this.localStorage.add("token",response);
        this.router.navigateByUrl('/dash-board')
      }
    })
  }
}
