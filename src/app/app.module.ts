import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppLoginComponent } from './app-login/app-login.component';
import { RouterModule,Routes } from '@angular/router';
import { AppRegisterComponent } from './app-register/app-register.component';
import { AppDashboardComponent } from './app-dashboard/app-dashboard.component';
import { UserService } from './user.service';
import { AuthGuard } from './auth.guard';
import { AppLogoutComponent } from './app-logout/app-logout.component';
import { AppHeaderComponent } from './app-header/app-header.component';



const appRoutes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },{
     path: 'login',
     component: AppLoginComponent
  },{

      path: 'register',
      component:AppRegisterComponent
  },{

      path:'dashboard',
      canActivate:[AuthGuard],
      component:AppDashboardComponent

  },{
      path:'logout',
      component:AppLogoutComponent
  }


];


@NgModule({
  declarations: [
    AppComponent,
    AppLoginComponent,
    AppRegisterComponent,
    AppDashboardComponent,
    AppLogoutComponent,
    AppHeaderComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
     RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )

  ],
  providers: [UserService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
