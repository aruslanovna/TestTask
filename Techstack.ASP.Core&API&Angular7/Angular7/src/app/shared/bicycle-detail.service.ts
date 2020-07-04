import { BicycleDetail } from './bicycle-detail.model';
import { Injectable } from '@angular/core';


import { Observable, of } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {catchError,map,tap} from 'rxjs/operators';

import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BicycleDetailService {
  private urlProject = 'http://localhost:59035/api/Bicycle' ;


  formData: BicycleDetail;
  readonly rootURL = 'http://localhost:59035/api';
  list : BicycleDetail[];

  constructor(private http: HttpClient) { }

  postBicycleDetail() {
    return this.http.post(this.rootURL + '/Bicycle/', this.formData);
  }
  putBicycleDetail() {
    return this.http.put(this.rootURL + '/Bicycle/'+ this.formData.Id, this.formData);
  }
  rentBicycleDetail(formData) {
    formData.controls['Status'].setValue("rented")
    return this.http.put(this.rootURL + '/Bicycle/'+ formData.Id, formData);
  }
  deleteBicycleDetail(id) {
    return this.http.delete(this.rootURL + '/Bicycle/'+ id);
  }
  
  refreshList(){
    this.http.get(this.rootURL + '/Bicycle')
    .toPromise()
    .then(res => this.list = res as BicycleDetail[]);
  }




  getProjects(){
    return  this.http.get(this.rootURL + '/Bicycle')
    .toPromise()
    .then(res => this.list = res as BicycleDetail[]);
    


  }
}