import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "http://127.0.0.1:8000";
  readonly PhotoUrl = "http://127.0.0.1:8000/media/";

  constructor(private http:HttpClient) { }

  getRolList(): Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/rol/');    
  }

  addRol(val:any){
    console.log("service", val);
    
    return this.http.post(this.APIUrl + '/rol/', val);
  }

  updateRol(val: any){
    return this.http.put(this.APIUrl + '/rol/', val);
  }

  deleteRol(val: any){
    return this.http.delete(this.APIUrl + '/rol/'+ val);
  }

  getUserList(): Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/user/');
  }

  addUser(val:any){
    console.log(val, "val servcice");
    
    return this.http.post(this.APIUrl + '/user/', val);
  }

  updateUser(val: any){
    return this.http.put(this.APIUrl + '/user/', val);
  }

  deleteUser(val: any){
    return this.http.delete(this.APIUrl + '/user/'+ val);
  }

  UploadPhoto(val: any){
    return this.http.post(this.APIUrl+ '/SaveFile', val)
  }

  getAllRolNames(): Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/rol/');
  }
}
