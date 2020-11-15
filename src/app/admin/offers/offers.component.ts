import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { OffresService } from '../../offres.service';
@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss'],
})
export class OffersComponent implements OnInit {
  title = '';
  desc = '';
  rec = '';
  salary = '';
  ref = '';
  offers=[]; 
  constructor(
    private OfferService: OffresService,
    private toaster: ToastrService
  ) {}

  ngOnInit(): void {
    this.getAllOffers(); 
  }

  submitOffer() {
    this.OfferService.createOffre({
      title: this.title,
      desc: this.desc,
      rec: this.rec,
      salary: this.salary,
      ref: this.ref,
    }).subscribe((data) => {
      let result: any = data;
      this.toaster.success(result.msg,'Success')
      console.log(result);
    });
  }
  getAllOffers()
  {
    this.OfferService.getAllOffres().subscribe(data=>{
      let result:any=data ; 
      this.offers=result.offers ; 
      console.log(result)
    })
  }
}
