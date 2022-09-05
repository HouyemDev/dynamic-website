import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from './api.service';
import { DriverModel } from './driver-dashboard.model';
@Component({
  selector: 'app-drivers-dashboard',
  templateUrl: './drivers-dashboard.component.html',
  styleUrls: ['./drivers-dashboard.component.css']
})
export class DriversDashboardComponent implements OnInit {
  formValue !: FormGroup;
  driverModelObj : DriverModel = new DriverModel();
  driverData !: any;
  showAdd !: boolean;
  showUpdate !: boolean;
  constructor(private formbuilder: FormBuilder, private api : ApiService ) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      firstName : [''],
      lastName :  [''],
      email :  [''],
      mobile : [''],
      salary :  [''],
      destination: [''],
    })
    this.getAllDriver();
  }
  clickAddDriver(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }
  postDriverDetails(){
    this.driverModelObj.id = this.formValue.value.id;
    this.driverModelObj.firstName = this.formValue.value.firstName;
    this.driverModelObj.lastName = this.formValue.value.lastName;
    this.driverModelObj.email = this.formValue.value.email;
    this.driverModelObj.mobile = this.formValue.value.mobile;
    this.driverModelObj.salary = this.formValue.value.salary;
    this.driverModelObj.destination = this.formValue.value.destination;

      this.api.postDriver(this.driverModelObj)
      .subscribe(res=>{
        console.log(res);
        alert("Driver Added Successfully")
        this.getAllDriver();
        let ref= document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
      },
      err=>{
        alert("Something went wrong");
      })
  }
getAllDriver(){
  this.api.getDriver()
  .subscribe(res=>{
    this.driverData = res;
  })
}
deleteDriver(row : any){
  this.api.deleteDriver(row.id)
  .subscribe(res=>{
    alert("Driver Deleted")
    this.getAllDriver();
  })
}
onEdit(row:any){
  this.showAdd = false;
  this.showUpdate = true;
  this.driverModelObj.id = row.id;
  this.formValue.controls['firstName'].setValue(row.firstName);
  this.formValue.controls['lastName'].setValue(row.lastName);
  this.formValue.controls['email'].setValue(row.email);
  this.formValue.controls['mobile'].setValue(row.mobile);
  this.formValue.controls['salary'].setValue(row.salary);
  this.formValue.controls['destination'].setValue(row.destination);
}
updateDriverDetails(){
  this.driverModelObj.firstName = this.formValue.value.firstName;
  this.driverModelObj.lastName = this.formValue.value.lastName;
  this.driverModelObj.email = this.formValue.value.email;
  this.driverModelObj.mobile = this.formValue.value.mobile;
  this.driverModelObj.salary = this.formValue.value.salary;
  this.driverModelObj.destination = this.formValue.value.destination;

  this.api.updateDriver(this.driverModelObj,this.driverModelObj.id)
  .subscribe(res=>{
    alert("Updated Successfully");
    let ref= document.getElementById('cancel')
    ref?.click();
    this.formValue.reset();
    this.getAllDriver();
  })

}
}
