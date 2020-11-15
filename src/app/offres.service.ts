import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OffresService {
BASE_URL=environment.BASE_URL;
  constructor(private http: HttpClient) { }
  
  getAllOffres() {
    return this.http.get(this.BASE_URL + '/offre/')
  }
  createOffre(data) {
    return this.http.post(this.BASE_URL + '/offre/create', 
      data
    )
  }
  deleteOffre(id) {
    return this.http.delete(this.BASE_URL + `/offre/${id}/delete`)
  }
  updateOffre(id, data) {
    return this.http.put(this.BASE_URL + `/offre/${id}/update`, {
      data
    })
  }
}
