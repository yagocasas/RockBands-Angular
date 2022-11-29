import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;
  constructor(private router: Router, private http: HttpClient ) { }

  getToken(){
    return localStorage.getItem('token');//meter el checksession
  }

  isLogged(){
    let token = localStorage.getItem('token');
    if(token){
    this.checkSession().subscribe((data: any) =>{ //sacamos el checkSesion a un función
      if(data._id){
        this.isLoggedIn = true;
    
      }
    })
  }
}

checkSession(){
  return this.http.get('https://rockbands-back.vercel.app/users/checksession').pipe( //nos devuelve el observable en isLogged
    catchError(this.handleError) //maneja el error
  )
}

  logout(){
    this.isLoggedIn = false;
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  login(user: any){
    return this.http.post("https://rockbands-back.vercel.app/users/login", user);
  }
  
  register(user: any){
    return this.http.post("https://rockbands-back.vercel.app/users/postNewUser", user);
  }

  handleError(error: HttpErrorResponse){

    //this.isLoggedIn = false;
    localStorage.removeItem('token'); //removemos el token cuando el checksession no nos da un valor válido
    return throwError(error.error);
  }
  
}
