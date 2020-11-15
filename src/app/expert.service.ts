import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExpertService {

  BASE_URL=environment.BASE_URL;
  constructor(private http: HttpClient) { }
  
  getAllClients() {
    return this.http.get(this.BASE_URL + '/expert/')
  }
  createClient(data) {
    console.log(data)
  const token = localStorage.getItem('token')
    return this.http.post(this.BASE_URL + '/expert/create', data, {headers:{
    'access_token':token
    
  }}
)
  }
  deleteClient(id) {
      const token = localStorage.getItem('token')
    return this.http.delete(this.BASE_URL + `/expert/${id}/delete`, {headers:{
    'access_token':token
  }})
  }
  updateClient(id, data) {
      const token = localStorage.getItem('token')
    return this.http.put(this.BASE_URL + `/expert/${id}/update`, {
      data
    }, {headers:{
    'access_token':token
  }})
  }
}
