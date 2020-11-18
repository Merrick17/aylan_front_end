import { Component, OnInit } from '@angular/core'
import { ToastrService } from 'ngx-toastr'
import { ExpertService } from '../../expert.service'
import Swal from 'sweetalert2'
@Component({
  selector: 'app-experts',
  templateUrl: './experts.component.html',
  styleUrls: ['./experts.component.scss'],
})
export class ExpertsComponent implements OnInit {
  name = ''
  description = ''
  email = ''
  file: File = null
  experts = []

  expertToEdit = {
    id: "",
    name:"",
    description: "",
    email: ""
  }
  constructor(
    private expertService: ExpertService,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this.getAllExperts()
  }

  onChange(event) {
    this.file = event.target.files[0]
  }
  addExpert() {
    var formData = new FormData()
    formData.append('name', this.name)
    formData.append('email', this.email)
    formData.append('desc', this.description)
    formData.append('image', this.file)
    this.expertService.createExpert(formData).subscribe((data) => {
      let result: any = data
      this.toastr.success(result.msg, 'Success')
      this.getAllExperts()
      this.clear()
    })
  }

  readyToEdit(id, name, email, description) {
    this.expertToEdit.id = id;
    this.expertToEdit.name = name;
    this.expertToEdit.email = email;
    this.expertToEdit.description = description
  }

  updateExpert() {
    this.readyToEdit(this.expertToEdit.id, this.expertToEdit.name, this.expertToEdit.email, this.expertToEdit.description)
    let formData = new FormData()
    formData.append('name', this.expertToEdit.name)
    formData.append('email', this.expertToEdit.email)
    formData.append('desc', this.expertToEdit.description)
    if (this.file) {
      formData.append('image', this.file)
    }
    this.expertService.updateExpert(this.expertToEdit.id, formData).subscribe(data => {
      const result: any = data
      this.getAllExperts()
      this.clear()
    })
  }
  getAllExperts() {
    this.expertService.getAllExperts().subscribe((data) => {
      let result: any = data
      this.experts = result.experts
    })
  }
  deleteExpert(id) {
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
        this.expertService.deleteExpert(id).subscribe((data) => {
          this.toastr.success('Expert Deleted', 'Success')
          this.getAllExperts()
        })
      }
    })
  }
  clear() {
    this.name = ''
    this.description = ''
    this.email = ''
    this.file = null
  }
}
