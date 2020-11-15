import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  items = ['1', '2', '3', '4', '5', '6', '7', '8'];
  constructor(private clientService:ClientService) { }

  ngOnInit(): void {
    this.getAllClients()
  }

  getAllClients()
  {
    this.clientService.getAllClients().subscribe(data=>{
      let result :any = data ; 
      this.items = result.clients ; 
    })
  }

}
