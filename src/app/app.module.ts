import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BandsComponent } from './pages/bands/bands.component';
import { BandsDetailComponent } from './pages/bands-detail/bands-detail.component';
import { NewBandComponent } from './pages/new-band/new-band.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateBandComponent } from './pages/update-band/update-band.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReusableButtonComponent } from './components/reusable/reusable-button/reusable-button.component';
import { AuthconfigInterceptor } from './services/authconfig.interceptor';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BandsComponent,
    BandsDetailComponent,
    NewBandComponent,
    NavbarComponent,
    UpdateBandComponent,
    FooterComponent,
    ReusableButtonComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{//esto me lo traigo después de crear el componente de los interceptores
    provide: HTTP_INTERCEPTORS,
    useClass: AuthconfigInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
