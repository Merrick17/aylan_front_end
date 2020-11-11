import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experts',
  templateUrl: './experts.component.html',
  styleUrls: ['./experts.component.scss'],
})
export class ExpertsComponent implements OnInit {
  items = ['1', '2', '3', '4', '5', '6', '7', '8'];
  constructor() {}

  ngOnInit(): void {}
}
