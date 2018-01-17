import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { FormsModule,FormGroup } from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';


@Component({
  selector: 'app-app-register',
  templateUrl: './app-register.component.html',
  styleUrls: ['./app-register.component.css']
})


export class AppRegisterComponent implements OnInit {

  msgError = true;

  msgSuccess = true;

  constructor(private http: HttpClient){

  }

   ngOnInit(){
   console.log('Registration Page Loaded.');
  }

  onSubmit(userForm: FormGroup) //Argument Type Must be FormGroup
  {
    
    let FormData = userForm.value;
  
  	this.http.post("http://localhost:8000/api/get/users/create",JSON.stringify(FormData),{headers: new HttpHeaders()}).subscribe(
        data => {

         if(data['resp']=="success")
         {

          userForm.reset();

          this.msgError= true;

          this.msgSuccess=false;

         }

        },
        err => {

          console.log("Error occured");

          this.msgError = false;

          this.msgSuccess = true;

        });



  }

}
