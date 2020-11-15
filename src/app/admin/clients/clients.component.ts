import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ClientService } from '../../../app/client.service';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit {
  clientName = '';
  file: File = null;
  clients = [] ; 
  constructor(
    private clientService: ClientService,
    private toaster: ToastrService
  ) {}

  ngOnInit(): void {
    this.getAllClients(); 
  }
  text() {
    console.log(this.clientName);
  }

  onChange(event) {
    this.file = event.target.files[0];
  }
  SubmitClient() {
    var formData = new FormData();
    formData.append('name', this.clientName);
    formData.append('image', this.file);
    console.log('Naaaaame', formData.get('name'));
    this.clientService.createClient(formData).subscribe((data) => {
      let result: any = data;
      this.toaster.success(result.msg, 'Success');
      console.log(result);
    },err=>{
      this.toaster.error('Something went wrong', 'Error');

    });
  }
  getAllClients()
  {
    this.clientService.getAllClients().subscribe(data=>{
      let result:any=data ; 
      this.clients = result.clients ; 
      //console.log(result); 
    })
  }
  deleteClient(id)
  {
    this.clientService.deleteClient(id).subscribe(data=>{
      let result:any = data ;
      this.toaster.success('Client Deleted','Success')
      this.getAllClients(); 
    })
  }
}
