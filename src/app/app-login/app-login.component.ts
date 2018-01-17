import { Component, OnInit } from '@angular/core';
import { FormsModule,FormGroup } from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css']
})
export class AppLoginComponent implements OnInit {

  msgSuccess = true;
  msgError = true;

  constructor(private router:Router, private user:UserService, private http:HttpClient ) { }

  ngOnInit() {

  console.log("login page loaded");
  
  }

  onSubmit(formLogin:FormGroup)
  {

  	let logData = formLogin.value;

    let username = logData.username;

    let password = logData.password;

    if(username!="" && password!="")
    {

    let access = {

      username:username,
      password:password,
      component:'login'

    };

   this.http.post("http://localhost:8000/",JSON.stringify(access),{headers: new HttpHeaders()}).subscribe(
        data => {

         if(data['resp']=="success")
         {


          localStorage.setItem("userInfo", JSON.stringify(data['data']));

          this.user.setUserLoggedIn();

          this.router.navigate(['dashboard']);

          formLogin.reset();

         }else{

          
          this.msgError = false;

          formLogin.reset();

         }

        },
        err => {

          formLogin.reset();

          this.msgError = false;

          console.log("Error occured");

        });


    }else{

      this.msgError = false;

    }



    // if(username=="admin" && password=="admin")
    // {

    //   formLogin.reset();

    //   this.msgError = true;

    //   this.msgSuccess = false;

    //   this.user.setUserLoggedIn();

    //   this.router.navigate(['dashboard']);

    // }else{

    //   this.msgError = false;

    // }

  	

  }

}
