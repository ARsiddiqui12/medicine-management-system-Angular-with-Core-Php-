import { Component } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { FormsModule,FormGroup } from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  formStatus = false;

  constructor(private http: HttpClient){

  }

  onInit()
  {

  this.formStatus = false;

  }

  onSubmit(userForm: FormGroup) //Argument Type Must be FormGroup
  {
    
    let FormData = userForm.value;
  
  	this.http.post("http://localhost:8000/api/get/users/create",JSON.stringify(FormData),{headers: new HttpHeaders()}).subscribe(
        res => {

          if(res.code==200)
          {
          
           if (userForm.valid) 
           {

            console.log('form submitted');
    
            userForm.reset();

            this.formStatus = true;

           }

          }else{

          

          }

        },
        err => {
          console.log("Error occured");
        });



  }

  




}
