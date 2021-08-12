import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from './providers/auth.service';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Aylan Consulting';
  currentRoute: string;

  constructor(public authService: AuthService, private router: Router) {
    this.router.events.subscribe(x => {
      let res: any = x;
      if (res.url) {
        this.currentRoute = res.url
      }
      console.log(res.url)
    })
  }
  verifNotAdmin() {
    if (this.currentRoute.indexOf('admin') == -1) {
      return true;
    } else {
      return false;
    }
  }
}
