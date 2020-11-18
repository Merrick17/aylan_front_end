import { Component, OnInit } from '@angular/core'
import { ToastrService } from 'ngx-toastr'
import { TestomanialService } from '../../testamoniel.service'
import Swal from 'sweetalert2'
@Component({
  selector: 'app-testomanial',
  templateUrl: './testomanial.component.html',
  styleUrls: ['./testomanial.component.scss'],
})
export class TestomanialComponent implements OnInit {
  testo = []
  name = ''
  description = ''

  testomanialToEdit = {
    id: "",
    description: "",
    name: ""
  }
  constructor(private testomanialService: TestomanialService, private toaster: ToastrService) {}

  ngOnInit(): void {
    this.getAllTestos()
  }

  getAllTestos() {
    this.testomanialService.getAllTestomanials().subscribe((data) => {
      let result: any = data
      this.testo = result.result
    })
  }

  addTestomanial() {
    this.testomanialService
      .createTestomanial({
        name: this.name,
        desc: this.description,
      })
      .subscribe((data) => {
        let result: any = data
        this.toaster.success(result.msg,'Success')
        console.log(data)
      })
  }
  deleteTesto(id) {
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
        this.testomanialService.deleteTestomanial(id).subscribe((data) => {
          let result: any = data
          this.getAllTestos()
        })
      }
    })
  }

  readyToEdit(id, name, description) { 
    this.testomanialToEdit.id = id;
    this.testomanialToEdit.description = description;
    this.testomanialToEdit.name = name
  }
  updateTestomanial() {
    this.readyToEdit(this.testomanialToEdit.id, this.testomanialToEdit.description, this.testomanialToEdit.name)
    this.testomanialService.updateTestomanial(this.testomanialToEdit.id, { name: this.testomanialToEdit.name, description: this.testomanialToEdit.description }).subscribe(data => {
      const result: any = data
      this.getAllTestos()
    })
  }
  clear() {
    this.name = ''
    this.description = ''
  }
}
