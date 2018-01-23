import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  Session = localStorage.getItem("userInfo");

  SessUser = "";

  constructor() { }

  ngOnInit() {

  	let userData = JSON.parse(this.Session);

  	this.SessUser = userData.username;

  }

}
