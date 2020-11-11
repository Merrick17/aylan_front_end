import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  items = ['1', '2', '3', '4', '5', '6', '7', '8'];
  constructor() { }

  ngOnInit(): void {
  }

}
