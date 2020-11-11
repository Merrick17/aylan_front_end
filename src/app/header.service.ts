import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  route: string;

  constructor(location: Location, router: Router) {
    router.events.subscribe((val) => {
      if (location.path() != '') {
        this.route = location.path();
      } else {
        this.route = 'Home';
      }
    });
  }
}
