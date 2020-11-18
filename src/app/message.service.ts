import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MessageService {
BASE_URL=environment.BASE_URL;
  constructor(private http: HttpClient) { }
    getAllMessages() {
    return this.http.get(this.BASE_URL + '/message/')
  }
  createMessage(data) {
    return this.http.post(this.BASE_URL + '/message/create', 
      data
    )
  }
  deleteMessage(id) {
    return this.http.delete(this.BASE_URL + `/Message/${id}/delete`)
  }

}

