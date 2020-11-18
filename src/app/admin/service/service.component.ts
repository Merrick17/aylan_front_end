import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from '../../service.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  title= ""
  description= ""

  serviceToEdit = {
    id: "",
    title: "",
    description: ""
  }
  services = []
  constructor(private toaster: ToastrService, private serviceService: ServiceService) {  }

  ngOnInit(): void {
    this.getAllServices(); 
  }
  getAllServices()
  {
    this.serviceService.getAllServices().subscribe(data=>{
      let result:any=data ; 
      this.services=result.services ; 
    })
  }
  submitService() {
    this.serviceService.createService({
      title: this.title,
      description: this.description
    }).subscribe((data) => {
      let result: any = data;
      this.getAllServices();
      this.toaster.success(result.msg,'Success')
    });
  }
  readyToEdit(id, title, desc) {
  this.serviceToEdit.id = id
  this.serviceToEdit.title = title;
  this.serviceToEdit.description = desc;
  }
    editService() {
    this.readyToEdit(this.serviceToEdit.id,
  this.serviceToEdit.title,
  this.serviceToEdit.description)
      this.serviceService.updateService(this.serviceToEdit.id, {
      title: this.serviceToEdit.title,
      description: this.serviceToEdit.description
    }).subscribe(data => {
      const result: any = data
      this.getAllServices()
    })
    }
  deleteService(id) {
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
        this.serviceService.deleteService(id).subscribe(data => {
          const result: any = data
          this.getAllServices()
        })
      }
    })
  }
}
