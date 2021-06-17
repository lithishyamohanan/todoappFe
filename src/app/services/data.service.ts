import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  Details:any = {
    1000: { uid: 1000,  username: "userone", password: "userone",ltodos:[]},
    1001: { uid: 1001, username: "usertwo", password: "usertwo",ltodos:[] },
    1002: { uid: 1002, username: "userthree", password: "userthree",ltodos:[]},
    1003: { uid: 1003,  username: "userfour", password: "userfour",ltodos:[]}
}

  constructor() { }
  login(uid:any,pswd:any){
    var users=this.Details;
    if(uid in users){
      if(pswd==users[uid]["password"]){
       
        return true;   
      }
      else{
        alert("Incorrect password");
        return false
      }
   }
    else{
      alert("Invalid account");
      console.log(users.password)
      return false;
    }
  }
  register(uid:any,uname:any,pswd:any){
    var users=this.Details
 if(uid in users){
   return false;
 }
 else{
   users[uid]={
     uid,
     username:uname,
     password:pswd,
     ltodos:[]
     
     }
     
     return true;
    
 }
  }
}
