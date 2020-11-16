import { Component, OnInit } from '@angular/core'
import { ClientService } from '../client.service'
import { ExpertService } from '../expert.service'

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
})
export class AccueilComponent implements OnInit {
  experts = []
  clients = []
  constructor(
    private expertsService: ExpertService,
    private clientServices: ClientService,
  ) {}

  ngOnInit(): void {
    //this.getAllExperts()
    this.getAllClients()
  }
  getAllExperts() {
    this.expertsService.getAllClients().subscribe((data) => {
      let result: any = data

      this.experts = result.clients
    })
  }
  getAllClients() {
    this.clientServices.getAllClients().subscribe((data) => {
      let result: any = data
      this.clients = result.clients
    })
  }
}
