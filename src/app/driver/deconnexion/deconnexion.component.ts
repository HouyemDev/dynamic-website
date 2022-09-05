import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-deconnexion',
  templateUrl: './deconnexion.component.html',
  styleUrls: ['./deconnexion.component.css']
})
export class DeconnexionComponent implements OnInit {
  public registerForm !: FormGroup;
  constructor(private formBuilder: FormBuilder, private http : HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.registerForm= this.formBuilder.group({
      fullname:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      mobile:['',Validators.required],

    })
  }
    register(){
      this.http.post<any>("http://localhost:3000/signupUsers", this.registerForm.value)
      .subscribe(res=>{
        alert("signup successfull");
        this.registerForm.reset();
        this.router.navigate(['connexion']);
      }, err=>{
        alert("something went wrong");
      })
  
    }
}
