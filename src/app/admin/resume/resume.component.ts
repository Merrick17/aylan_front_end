import { Component, OnInit } from '@angular/core'
import { ResumeService } from 'src/app/resume.service'
import { ToastrService } from 'ngx-toastr'
import Swal from 'sweetalert2'
declare var require: any
const FileSaver = require('file-saver')
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
  resume = []
  BASE_URL = 'https://aylan-consulting.com/api/'
  secletedPf = ''

  constructor(private resumeService: ResumeService, private toaster: ToastrService) { }

  ngOnInit(): void {
    this.getAllResume()
  }

  getAllResume() {
    this.resumeService.getAllResumes().subscribe((data) => {
      console.log(data)
      let resulet: any = data
      this.resume = resulet.Resumes
    })
  }
  openPDf(link) {
    this.secletedPf = this.BASE_URL + link
  }
  downloadPdf(pdfUrl: string, pdfName: string) {
    //const pdfUrl = './assets/sample.pdf';
    //const pdfName = 'your_pdf_file';
    FileSaver.saveAs(pdfUrl, pdfName)
  }

  openDoc(pdfUrl: string, startPage: number) {
    window.open(pdfUrl + '#page=' + startPage, '_blank', '', true)
  }
  deleteResume(id) {
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
        this.resumeService.deleteResume(id).subscribe((data) => {
          let result: any = data
          this.toaster.success('Resume Deleted', 'Success')
          this.getAllResume()
        })
      }
    })
  }
}
