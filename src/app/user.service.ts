import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
BASE_URL=environment.BASE_URL;
  constructor(private http: HttpClient) { }
  
  getAllUsers() {
    return this.http.get(this.BASE_URL + '/user/')
  }
    getAllAdminUsers() {
    return this.http.get(this.BASE_URL + '/user/admins')
    }
      getUser(id) {
    return this.http.get(this.BASE_URL + `/user/${id}`)
  }
  createUser(data) {
    return this.http.post(this.BASE_URL + '/user/create', {
      data
    })
  }
  deleteUser(id) {
    return this.http.delete(this.BASE_URL + `/user/${id}/delete`)
  }
  updateUser(id, data) {
    return this.http.put(this.BASE_URL + `/user/${id}/update`, {
      data
    })
  }
  loginUser(email,password)
  {
    return this.http.post(this.BASE_URL +'/user/login',{
      'email':email,
      'password':password
    })
  }
  registerUser(fullName, email, phoneNumber, address, isAdmin, password)
{

  return this.http.post(this.BASE_URL +'/user/register', {
    'fullName':fullName,
    'email': email,
    'password': password,
    'phoneNumber': phoneNumber,
    'address': address,
    'isAdmin': isAdmin
  })

}
}
