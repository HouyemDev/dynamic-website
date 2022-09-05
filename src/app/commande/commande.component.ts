import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/drivers-dashboard/api.service';
import {CommandeModel} from 'src/app/admin/deliverydetails/deliverydetails.model';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
  formVa !: FormGroup;
  CommandeModelObj : CommandeModel = new CommandeModel();
  CommandeData !: any;
  showAdd !: boolean;
  showUpdate !: boolean;
  constructor(private formbuilder : FormBuilder, private api : ApiService) { }

  ngOnInit(): void {
      this.formVa = this.formbuilder.group({
        DriverFullName : [''],
        ClientName :  [''],
        ClientAddress :  [''],
        mobile :  [''],
        pointdepart : [''],
        pointarrive: [''],
      })
      this.getAllCommande();
    }
    clickAddCommande(){
      this.formVa.reset();
      this.showAdd = true;
      this.showUpdate = false;
    }

      postCommandDetails ()
      {
        this.CommandeModelObj.DriverFullName = this.formVa.value.DriverFullName;
        this.CommandeModelObj.ClientName = this.formVa.value.ClientName;
        this.CommandeModelObj.ClientAddress = this.formVa.value.ClientAddress;
        this.CommandeModelObj.mobile = this.formVa.value.mobile;
        this.CommandeModelObj.pointdepart = this.formVa.value.pointdepart;
        this.CommandeModelObj.pointarrive = this.formVa.value.pointarrive;
    this.api.postDriver(this.CommandeModelObj)
.subscribe( 
  res=>{
    console.log(res);
    alert("Commande Added Successfully")
    let ref= document.getElementById('cancel')
    ref?.click();
    this.formVa.reset();
    this.getAllCommande();
  },
  err=>{
    alert("Something went wrong");
  })
  }
  getAllCommande(){
    this.api.getDriver()
    .subscribe(res=> {
      this.CommandeData = res;
    })

  }
  deleteCommande(row : any){
    this.api.deleteDriver(row.id)
    .subscribe(res=>{
      alert("Driver Deleted")
      this.getAllCommande();
    })
  }
  Edit (row : any){
    this.showAdd = false;
    this.showUpdate = true;
    this.CommandeModelObj.id = row.id;
    this.formVa.controls['DriverFullName'].setValue(row.DriverFullName);
    this.formVa.controls['ClientName'].setValue(row.ClientName);
    this.formVa.controls['ClientAddress'].setValue(row.ClientAddress);
    this.formVa.controls['mobile'].setValue(row.mobile);
    this.formVa.controls['pointdepart'].setValue(row.pointdepart);
    this.formVa.controls['pointarrive'].setValue(row.pointarrive);
  }

  updateDriverDetails(){
    this.CommandeModelObj.DriverFullName = this.formVa.value.DriverFullName;
    this.CommandeModelObj.ClientName = this.formVa.value.ClientName;
    this.CommandeModelObj.ClientAddress = this.formVa.value.ClientAddress;
    this.CommandeModelObj.mobile = this.formVa.value.mobile;
    this.CommandeModelObj.pointdepart = this.formVa.value.pointdepart;
    this.CommandeModelObj.pointarrive = this.formVa.value.pointarrive;

    this.api.updateDriver(this.CommandeModelObj,this.CommandeModelObj.id)
    .subscribe(res=>{
      alert("Updated Successfully");
      let ref= document.getElementById('cancel')
      ref?.click();
      this.formVa.reset();
      this.getAllCommande();
  })
     

  }
opensweetalert(){
  Swal.fire(
    'Good job!',
    'Take a rest to the next trip!',
    'success'
  )
}
  }
