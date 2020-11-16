import { Component, OnInit } from '@angular/core'
import { ToastrService } from 'ngx-toastr'
import { ExpertService } from '../expert.service'
import { OffresService } from '../offres.service'
import { ResumeService } from '../resume.service'
@Component({
  selector: 'app-experts',
  templateUrl: './experts.component.html',
  styleUrls: ['./experts.component.scss'],
})
export class ExpertsComponent implements OnInit {
  offers = []
  selectOp = []
  name = ''
  email = ''
  firstName = ''
  file: File = null
  phone = ''
  selectedOffer = ''
  constructor(
    private offersService: OffresService,
    private resumeService: ResumeService,
    private toaster: ToastrService,
  ) {}

  ngOnInit(): void {
    this.getAllOffers()
  }
  onChange(event) {
    this.file = event.target.files[0]
  }

  getAllOffers() {
    this.offersService.getAllOffres().subscribe((data) => {
      let result: any = data
      this.offers = result.offers
      this.selectOp = result.offers
      this.selectedOffer = this.selectOp[0]._id
      console.log(result)
    })
  }
  SubmitResume() {
    let formData = new FormData()
    formData.append('name', this.name)
    formData.append('firstName', this.firstName)
    formData.append('resume', this.file)
    formData.append('email', this.email)
    formData.append('offer', this.selectedOffer)
    formData.append('phone', this.phone)

    this.resumeService.createresume(formData).subscribe((data) => {
      console.log(data)
      this.toaster.success('You Resume is uploaded Succeffully', 'Success')
      this.name = ''
      this.file = null
      this.firstName = ''
      this.selectedOffer = this.selectOp[0]._id
      this.email = ''
      this.phone = ''
    })
  }
}
