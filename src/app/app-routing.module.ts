import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthUserGuard } from './guards/auth-user.guard';
import { BandsDetailComponent } from './pages/bands-detail/bands-detail.component';
import { BandsComponent } from './pages/bands/bands.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NewBandComponent } from './pages/new-band/new-band.component';
import { RegisterComponent } from './pages/register/register.component';
import { UpdateBandComponent } from './pages/update-band/update-band.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'bands', component: BandsComponent},
  {path: 'bands/:id', component: BandsDetailComponent, canActivate: [AuthUserGuard]},
  {path: 'newBand', component: NewBandComponent, canActivate: [AuthUserGuard]},
  {path: 'updateBand/:id', component: UpdateBandComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
