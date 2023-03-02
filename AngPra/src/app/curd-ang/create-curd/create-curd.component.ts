import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Route } from '@angular/router';
import { CurdService } from 'src/Shared/curd.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-create-curd',
  templateUrl: './create-curd.component.html',
  styleUrls: ['./create-curd.component.css']
})
export class CreateCurdComponent {
  constructor(private service:CurdService,private datepipe:DatePipe){ }
   
  @Input() curd:any;
    id!:number;
    fullName:string="";
    dateOfBirth:any;
    emailID:string="";
    mobile!:number;
    gender:string="";                         
    typeOfWork:string="";
    password:string="";
    status:string="";
  
    ngOnInit(): void {
      this.id=this.curd.id;
      this.fullName=this.curd.fullName;
      this.dateOfBirth=this.datepipe.transform(this.curd.dateOfBirth,'yyyy-MM-dd');
      this.emailID=this.curd.emailID;
      this.mobile=this.curd.mobile;
      this.gender=this.curd.gender;
      this.typeOfWork=this.curd.typeOfWork;
      this.password=this.curd.closedate;
      this.status=this.curd.status;
    }

    addCurd(){
      var val={
      id:this.id,
      fullName:this.fullName,
      dateOfBirth:this.dateOfBirth,
      emailID:this.emailID,
      mobile:this.mobile,
      gender:this.gender,
      typeOfWork:this.typeOfWork,
      password:this.password,
      status:this.status,
      };
      this.service.addData(val).subscribe(res=>
        {
          var closeModelBtn= document.getElementById('create-curd-model-close');
          if(closeModelBtn){
            closeModelBtn.click();
          }
          var showAddSuccess=document.getElementById('add-success-alert');
          if(showAddSuccess){
            showAddSuccess.style.display="block";
          } 
          setTimeout(function(){
            if(showAddSuccess){
              showAddSuccess.style.display="none"
            }
          },4000);
        });
    }

    updateCurd()
    {
      var val={
      id:this.id,
      fullName:this.fullName,
      dateOfBirth:this.dateOfBirth,
      emailID:this.emailID,
      mobile:this.mobile,
      gender:this.gender,
      typeOfWork:this.typeOfWork,
      password:this.password,
      status:this.status,
      };
      this.service.addData(val).subscribe(res=>
        {
          var closeModelBtn= document.getElementById('create-curd-model-close');
          if(closeModelBtn){
            closeModelBtn.click();
          }
          var showAddSuccess=document.getElementById('update-success-alert');
          if(showAddSuccess){
            showAddSuccess.style.display="block";
          } 
          setTimeout(function(){
            if(showAddSuccess){
              showAddSuccess.style.display="none"
            }
          },4000);
        });
    }
}
