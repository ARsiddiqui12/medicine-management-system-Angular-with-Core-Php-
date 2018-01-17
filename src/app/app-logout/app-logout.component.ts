import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-logout',
  templateUrl: './app-logout.component.html',
  styleUrls: ['./app-logout.component.css']
})
export class AppLogoutComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {

  let session = {user_id:0,username:'',is_logged_in:false};

  localStorage.removeItem("userInfo");

  localStorage.setItem("userInfo", JSON.stringify(session));

  this.router.navigate(['login']);

  }

}
