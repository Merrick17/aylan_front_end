import { Component, OnInit } from '@angular/core';
import { ExpertService } from '../expert.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
})
export class AccueilComponent implements OnInit {
  experts = [];
  constructor(private expertsService: ExpertService) {}

  ngOnInit(): void {
    this.getAllExperts()
  }
  getAllExperts() {
    this.expertsService.getAllClients().subscribe((data) => {
      let result: any = data;
      this.experts = result.clients;
    });
  }
}
