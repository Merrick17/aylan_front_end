import { Component, OnInit } from '@angular/core'
import { ToastrService } from 'ngx-toastr'
import { ExpertService } from '../../expert.service'
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
    let formData = new FormData()
    formData.append('name', this.name)
    formData.append('email', this.email)
    formData.append('desc', this.description)
    formData.append('image', this.file)
    this.expertService.createClient(formData).subscribe((data) => {
      let result: any = data
      this.toastr.success(result.msg, 'Success')
      this.getAllExperts()
      console.log(data)
      this.clear()
    })
  }
  getAllExperts() {
    this.expertService.getAllClients().subscribe((data) => {
      let result: any = data
      this.experts = result.clients
      console.log(result)
    })
  }
  deleteExpert(id) {
    this.expertService.deleteClient(id).subscribe((data) => {
      this.toastr.success('Expert Deleted', 'Success')
    })
  }
  clear() {
    this.name = ''
    this.description = ''
    this.email = ''
    this.file = null
  }
}
