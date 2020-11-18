import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { ToastrService } from 'ngx-toastr'
import { ClientService } from '../../../app/client.service'
import Swal from 'sweetalert2'
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit {
  clientName = ''
  file: File = null
  clients = []
  userToUpdate = {
    id: "",
    name: ""
  }
  constructor(
    private clientService: ClientService,
    private toaster: ToastrService,
  ) {}

  ngOnInit(): void {
    this.getAllClients()
  }
  text() {
    console.log(this.clientName)
  }

  onChange(event) {
    this.file = event.target.files[0]
  }
  SubmitClient() {
    var formData = new FormData()
    formData.append('name', this.clientName)
    formData.append('image', this.file, this.file.name)
    this.clientService.createClient(formData).subscribe(
      (data) => {
        let result: any = data
        this.toaster.success(result.msg, 'Success')
        console.log(result)
        this.getAllClients()
        this.clear()
      },
      (err) => {
        this.toaster.error('Something went wrong', 'Error')
      },
    )
  }

  readyToEdit(id, name) {
    this.userToUpdate.id = id;
    this.userToUpdate.name = name;
  }
  updateUser() {

    this.readyToEdit(this.userToUpdate.id, this.userToUpdate.name)
    var formData = new FormData()
    formData.append('name', this.userToUpdate.name)
    if (this.file) {
      formData.append('image', this.file)
    }
    this.clientService.updateClient(this.userToUpdate.id, formData).subscribe(data => {
      const result: any = data
        this.getAllClients()
        this.clear()
    })
  }
  getAllClients() {
    this.clientService.getAllClients().subscribe((data) => {
      let result: any = data
      this.clients = result.clients
    })
  }
  deleteClient(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.clientService.deleteClient(id).subscribe((data) => {
          let result: any = data
          this.toaster.success('Client Deleted', 'Success')
          this.getAllClients()
        })
      }
    })
  }
  clear() {
    this.clientName = ''
    this.file = null
  }
}
