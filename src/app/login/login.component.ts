import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm=this.fb.group({
    uid:[''],
    pswd:['']
  })

  constructor(private fb:FormBuilder,private router:Router,private dataService:DataService) { }

  ngOnInit(): void {
  }
  login(){
    var uid=this.loginForm.value.uid;
    var pswd=this.loginForm.value.pswd;
    const result=this.dataService.login(uid,pswd)
   var users=this.dataService.Details
    if(result){
      alert("login successful");
    //  console.log(users[uid]["remainder"])
    //  console.log(users[uid]["date"])
      this.router.navigateByUrl('todos')
    }
  }
  register(){
    this.router.navigateByUrl('register')
  }
  
}
