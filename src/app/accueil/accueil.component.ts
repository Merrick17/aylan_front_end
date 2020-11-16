import { Component, OnInit } from '@angular/core'
import { ClientService } from '../client.service'
import { ExpertService } from '../expert.service'
import { TestomanialService } from '../testamoniel.service'

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
})
export class AccueilComponent implements OnInit {
  experts = []
  clients = []
  testomanials = []
  constructor(
    private expertsService: ExpertService,
    private clientServices: ClientService,
    private testomanialsService: TestomanialService,
  ) {}

  ngOnInit(): void {
    this.getAllExperts()
    //this.getAllClients()
    this.getAllTestimonails()
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
  getAllTestimonails() {
    this.testomanialsService.getAllTestomanials().subscribe((data) => {
      let result: any = data
      this.testomanials = result.result
      console.log(result)
    })
  }
}
