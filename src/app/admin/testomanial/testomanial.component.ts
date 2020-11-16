import { Component, OnInit } from '@angular/core'
import { TestomanialService } from '../../testamoniel.service'
@Component({
  selector: 'app-testomanial',
  templateUrl: './testomanial.component.html',
  styleUrls: ['./testomanial.component.scss'],
})
export class TestomanialComponent implements OnInit {
  testo = []
  name = ''
  description = ''
  constructor(private testomanial: TestomanialService) {}

  ngOnInit(): void {
    this.getAllTestos()
  }

  getAllTestos() {
    this.testomanial.getAllTestomanials().subscribe((data) => {
      let result: any = data
      this.testo = result.result
    })
  }

  addTestomanial() {
    this.testomanial
      .createTestomanial({
        name: this.name,
        desc: this.description,
      })
      .subscribe((data) => {
        let result: any = data
        console.log(data)
      })
  }
  deleteTesto(id) {
    this.testomanial.deleteTestomanial(id).subscribe((data) => {
      let result: any
    })
  }
  clear() {
    this.name = ''
    this.description = ''
  }
}
