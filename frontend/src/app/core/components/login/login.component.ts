import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: FormGroup | any
  constructor(private http:HttpClient, private route:Router, private auth: AuthService) { }

  ngOnInit(): void {
    this.login=new FormGroup({
      'email':new FormControl(),
      'password':new FormControl()
    })
  }

  onSubmit(){
   this.auth.onSubmit(this.login)
  }

}
