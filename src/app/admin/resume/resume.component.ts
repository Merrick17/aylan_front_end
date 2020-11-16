import { Component, OnInit } from '@angular/core'
import { ResumeService } from 'src/app/resume.service'
declare var require: any
const FileSaver = require('file-saver')
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
  resume = []
  BASE_URL = 'http://localhost:3000/'
  secletedPf = ''

  constructor(private resumeService: ResumeService) {}

  ngOnInit(): void {
    this.getAllResume()
  }

  getAllResume() {
    this.resumeService.getAllresumes().subscribe((data) => {
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
}
