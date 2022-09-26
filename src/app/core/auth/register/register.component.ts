import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";
import {catchError} from "rxjs";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm= new FormGroup({
    name:new FormControl('',[Validators.required,Validators.maxLength(65)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required]),
    confirmPassword:new FormControl('',[Validators.required])
  })

  constructor(private auth:AuthService, private router : Router) { }

  ngOnInit(): void {
  }

  register() {
    if (this.registerForm.get('password')?.value != this.registerForm.get('confirmPassword')?.value) {
      alert("password not match")
    }else {
      this.auth.register(
        this.registerForm.get('name')?.value,
        this.registerForm.get('email')?.value,
        this.registerForm.get('password')?.value).subscribe(response => {
          this.auth.addRoleToUser(this.registerForm.get('email')?.value,"ROLE_USER").subscribe(res =>{
            alert("register is success")
            this.router.navigateByUrl('/auth/login')
          })
        },(error => {
          alert("this email address is already exists")
        })
      )
    }
  }
}
