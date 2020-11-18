import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewsService {
BASE_URL=environment.BASE_URL;
  constructor(private http: HttpClient) { }

      getAllNews() {
    return this.http.get(this.BASE_URL + '/news/')
      }
  createNews(data) {
    console.log(data)
        const token = localStorage.getItem('token')
    return this.http.post(this.BASE_URL + '/news/create', 
      data,{headers:{
    'access_token':token
    
  }}
    )
  }
  deleteNews(id) {
      const token = localStorage.getItem('token')
    return this.http.delete(this.BASE_URL + `/news/${id}/delete`,{headers:{
    'access_token':token
    
  }})
  }
    updateNews(id, data) {
      const token = localStorage.getItem('token')
    return this.http.put(this.BASE_URL + `/news/${id}/update`, 
      data
    , {headers:{
    'access_token':token
  }})
  }
}
