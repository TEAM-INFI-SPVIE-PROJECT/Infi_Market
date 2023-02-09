import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private route: Router) { }
  onSubmit(login:any){

    this.http.get<any>("http://localhost:8080/api/users").subscribe(res=>{

     const user = res.find((a:any)=>{
       return a.email === login.value.email && a.password === login.value.password && a.role_id === 1;
     });

     const cashier = res.find((a:any)=>{
      return a.email === login.value.email && a.password === login.value.password && a.role_id === 2;
    });

     if (user) {
      alert("BIENVENUE ADMIN");
      this.route.navigate(['dashboard'])
     } else if(cashier) {
      alert("BIENVENUE CASSIER(ERE)");
      this.route.navigate(['dashboard-cashier'])
     }else{
      alert("EMAIL OU MOT DE PASSE INCORRECT")
     }

     })
  }
}
