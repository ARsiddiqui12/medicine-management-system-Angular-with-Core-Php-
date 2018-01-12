import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  

  constructor(private http: HttpClient){

  }

  onSubmit(userForm: FormGroup) //Argument Type Must be FormGroup
  {
    

    const headers = new Headers();
        
    headers.append('Content-Type', 'application/json');

  	this.http.post("http://localhost:8000/",JSON.stringify(userForm.value),headers).subscribe(
        res => {

          console.log(res);

          userForm.reset();

        },
        err => {
          console.log("Error occured");
        });



  }

  




}
