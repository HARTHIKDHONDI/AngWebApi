import { Component ,OnInit} from '@angular/core';
import { CurdService } from 'src/Shared/curd.service';
@Component({
  selector: 'app-curd-ang',
  templateUrl: './curd-ang.component.html',
  styleUrls: ['./curd-ang.component.css']
})
export class CurdAngComponent implements OnInit {
  constructor(private service:CurdService){

  }
 
  curdList:any=[];
  ActiveCurd:boolean=false;
  curd:any;
  ngOnInit():void{
    this.getCurd();
  }
  getCurd(){
    this.service.getData().subscribe(data=>
    {
      this.curdList=data;
    })
  }
  addClick(){
    this.curd={
      id: 0,
    fullName: "",
    dateOfBirth: "",
    emailID: "",
    mobile: 0,
    gender: "",
    typeOfWork: "",
    password: "",
    status: ""

    }
    this.ActiveCurd=true;
  }
  editClick(item:any){
    this.curd=item;
    this.ActiveCurd=true;
  }
  deleteClick(item:any){
    if(confirm('Are you sure??')){
      this.service.deleteData(item.id).subscribe(
        data=>{
          var closeModelBtn= document.getElementById('create-curd-model-close');
        if(closeModelBtn){
          closeModelBtn.click();
        }
        var showAddSuccess=document.getElementById('delete-success-alert');
        if(showAddSuccess){
          showAddSuccess.style.display="block";
        } 
        setTimeout(function(){
          if(showAddSuccess){
            showAddSuccess.style.display="none"
          }
        },4000);
          this.getCurd();
        }
        

      )
    }
  }
  closeClick(){
    this.ActiveCurd=false;
    this.getCurd(); 
  }
}
