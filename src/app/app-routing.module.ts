import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignComponent } from './sign/sign.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'fruit',component:HeaderComponent},
  {path:'about us',component:AboutusComponent},
  {path:'register',component:LoginComponent},
  {path:'signin',component:SignComponent},
  {path:'in',component:SignComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
