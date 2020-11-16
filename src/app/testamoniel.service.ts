import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TestomanialService {
BASE_URL=environment.BASE_URL;
  constructor(private http: HttpClient) { }

  getAllTestomanials() {
    return this.http.get(this.BASE_URL + '/testomanial/')
  }
  createTestomanial(data) {

  const token = localStorage.getItem('token')
    return this.http.post(this.BASE_URL + '/testomanial/create',
      data
    , {headers:{
    'access_token':token
  }}
)
  }
  deleteTestomanial(id) {
      const token = localStorage.getItem('token')
    return this.http.delete(this.BASE_URL + `/testomanial/${id}/delete`, {headers:{
    'access_token':token
  }})
  }
  updateTestomanial(id, data) {
      const token = localStorage.getItem('token')
    return this.http.put(this.BASE_URL + `/testomanial/${id}/update`, {
      data
    }, {headers:{
    'access_token':token
  }})
  }
}
