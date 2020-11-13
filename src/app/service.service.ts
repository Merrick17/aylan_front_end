import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
BASE_URL=environment.BASE_URL;
  constructor(private http: HttpClient) { }
  
  getAllServices() {
    return this.http.get(this.BASE_URL + '/service/')
  }
  createService(data) {

  const token = localStorage.getItem('token')
    return this.http.post(this.BASE_URL + '/service/create', {
      data
    }, {headers:{
    'access_token':token
  }}
)
  }
  deleteService(id) {
      const token = localStorage.getItem('token')
    return this.http.delete(this.BASE_URL + `/service/${id}/delete`, {headers:{
    'access_token':token
  }})
  }
  updateService(id, data) {
      const token = localStorage.getItem('token')
    return this.http.put(this.BASE_URL + `/service/${id}/update`, {
      data
    }, {headers:{
    'access_token':token
  }})
  }
}
