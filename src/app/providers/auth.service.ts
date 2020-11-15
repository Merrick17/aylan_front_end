import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAdmin: boolean = false;
  constructor() {}
  getIsAdmin() {
    return this.isAdmin;
  }
  setIsAdmin(value: boolean) {
    this.isAdmin = value;
  }
}
