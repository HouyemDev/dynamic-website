import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-connecte',
  templateUrl: './connecte.component.html',
  styleUrls: ['./connecte.component.css']
})
export class ConnecteComponent implements OnInit {
  public connectForm!: FormGroup

  constructor( private formBuilder : FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.connectForm = this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]  
    })
  }
  connecte(){
    this.http.get<any>("http://localhost:3000/signupUsers")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
      return a.email === this.connectForm.value.email && a.password === this.connectForm.value.password});
      if(user){
        alert("Login success");
        this.connectForm.reset();
        this.router.navigate(['Commande'])
      }
      else{
        alert("user not found");
      }
    },err=>{
      alert("something went wrong")
    })
  }

}
