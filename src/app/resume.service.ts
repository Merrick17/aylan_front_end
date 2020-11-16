import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root',
})
export class ResumeService {
  BASE_URL = environment.BASE_URL
  constructor(private http: HttpClient) {}

  getAllresumes() {
    return this.http.get(this.BASE_URL + '/resume/')
  }
  createresume(data) {
    const token = localStorage.getItem('token')
    return this.http.post(
      this.BASE_URL + '/resume/create',

      data,
    )
  }
  deleteresume(id) {
    const token = localStorage.getItem('token')
    return this.http.delete(this.BASE_URL + `/resume/${id}/delete`, {
      headers: {
        access_token: token,
      },
    })
  }
  updateresume(id, data) {
    const token = localStorage.getItem('token')
    return this.http.put(
      this.BASE_URL + `/resume/${id}/update`,

      data,

      {
        headers: {
          access_token: token,
        },
      },
    )
  }
}
