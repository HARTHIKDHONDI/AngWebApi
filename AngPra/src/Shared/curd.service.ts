import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurdService {

  constructor(private http:HttpClient) { }
  readonly ApiURL="https://localhost:7134/api/CurdPrac";
  getData():Observable<any[]>{
    return this.http.get<any>(this.ApiURL+"/GetAllData")
  }
  addData(val:any){
    return this.http.post(this.ApiURL+"/Insert",val);
  }
  editData(val:any){
    return this.http.put(this.ApiURL+"/Update",val);
  }
  deleteData(val:any){
    return this.http.delete(this.ApiURL+"/Delete?Id="+val);
  }

}
