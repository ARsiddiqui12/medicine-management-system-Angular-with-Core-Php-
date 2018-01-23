import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormsModule,FormGroup } from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { HttpClient, HttpHeaders  } from '@angular/common/http';



@Component({
  selector: 'app-app-dashboard',
  templateUrl: './app-dashboard.component.html',
  styleUrls: ['./app-dashboard.component.css']
})
export class AppDashboardComponent implements OnInit {

  Session = localStorage.getItem("userInfo");

  SessUser = "";

  isLoggedIn = false;

  FormView = false;

  msgError = true;

  msgSuccess = true;

  constructor(private user:UserService, private router:Router,private http:HttpClient) { }

  ngOnInit() {

  	let userData = JSON.parse(this.Session);

  	this.SessUser = userData.username;

  }

  showModal()
  {
  this.FormView = !this.FormView;
  this.msgError = true;
  this.msgSuccess = true;
  }

  onSubmit(cForm:FormGroup)
  {

    let formVal = cForm.value;

    let formData = Object.assign({component:'addcontact',session:this.Session},formVal);

    this.http.post("http://localhost:8000/",JSON.stringify(formData),{headers:new HttpHeaders()}).subscribe(data=>{

      if(data['resp']=="success")
      {

        this.msgSuccess = false;

        this.msgError = true;

        this.FormView = false;

        cForm.reset();

      }else{

        console.log("Error occured");

          this.msgError = false;

          this.msgSuccess = true;



      }

    },err=>{

      console.log("error occured");

    });

    

  }

}
