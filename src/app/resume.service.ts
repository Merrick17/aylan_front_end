import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root',
})
export class ResumeService {
  BASE_URL = environment.BASE_URL
  constructor(private http: HttpClient) {}

  getAllResumes() {
    return this.http.get(this.BASE_URL + '/resume/')
  }
  createResume(data) {
    return this.http.post(
      this.BASE_URL + '/resume/create',data)
  }
  deleteResume(id) {
    const token = localStorage.getItem('token')
    return this.http.delete(this.BASE_URL + `/resume/${id}/delete`, {
      headers: {
        access_token: token,
      },
    })
  }
  updateResume(id, data) {
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
