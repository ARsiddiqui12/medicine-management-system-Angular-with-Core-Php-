import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  
  private isUserLoggedIn;

  constructor() {

  	this.isUserLoggedIn = false;

   }

   setUserLoggedIn()
   {
   	return this.isUserLoggedIn = true;
   }

   getUserLoggedIn()
   {

    let Session = localStorage.getItem("userInfo");

    let userData = JSON.parse(Session);

    if(!userData.is_logged_in || userData.is_logged_in==false)
    {
      return false;
    }else{
      return true;
    }


   	
   }

}
