import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormsModule,FormGroup } from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { DataTableDirective } from 'angular-datatables';


@Component({
  selector: 'app-app-dashboard',
  templateUrl: './app-dashboard.component.html',
  styleUrls: ['./app-dashboard.component.css']
})
export class AppDashboardComponent implements OnInit {

  dtElement: DataTableDirective;


  Session = localStorage.getItem("userInfo");

  dlist = [
    {
        key:1,
        value:"MO"
    },
    {
        key:2,
        value:"FMO"
    },
    {
        key:3,
        value:"LHS"
    }
  ];

  SessUser = "";

  isLoggedIn = false;

  FormView = false;

  msgError = true;

  msgSuccess = true;

  tableData = [];

  cID=0;
  cName="";
  cDesignation="";
  cEmail="";
  cPhone="";
  cMobile="";
  cAddress="";

  constructor(private user:UserService, private router:Router,private http:HttpClient) { }

  ngOnInit() {

  	let userData = JSON.parse(this.Session);

  	this.SessUser = userData.username;

    let Datacomp = {component:"contactlist"};

    this.http.post("http://localhost:8000/",JSON.stringify(Datacomp),{headers:new HttpHeaders()}).subscribe(data=>{
      this.tableData=data['resp'];
      console.log(this.tableData);

    },err=>{

      console.log("Error Accured in data load");

    });


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

      if(data['code']==200)
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

  onEdit(id:any)
  {
    this.FormView = true;

    let Datacomp = {id:id,component:"retrievedata"};

    this.http.post("http://localhost:8000/",JSON.stringify(Datacomp),{headers:new HttpHeaders()}).subscribe(data=>{

    let val = data['resp'];

    this.cName=val.name;

    this.cDesignation = val.designation;

    this.cEmail = val.email;

    this.cPhone=val.phone;

    this.cMobile = val.mobile;

    this.cAddress = val.address;

    this.cID = 1;
      

    },err=>{

      console.log("error occured in retrieve data by id");

    });

  }

}
