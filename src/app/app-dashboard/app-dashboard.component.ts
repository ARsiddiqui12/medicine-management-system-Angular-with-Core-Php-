import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-dashboard',
  templateUrl: './app-dashboard.component.html',
  styleUrls: ['./app-dashboard.component.css']
})
export class AppDashboardComponent implements OnInit {

  Session = localStorage.getItem("userInfo");

  SessUser = "";

  isLoggedIn = false;

  constructor(private user:UserService, private router:Router) { }

  ngOnInit() {

  	let userData = JSON.parse(this.Session);

  	this.SessUser = userData.username;

  }

}
