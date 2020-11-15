import { Component, OnInit } from '@angular/core';
import { OffresService } from '../offres.service';

@Component({
  selector: 'app-experts',
  templateUrl: './experts.component.html',
  styleUrls: ['./experts.component.scss'],
})
export class ExpertsComponent implements OnInit {
  offers=[] ; 
  selectOp=[]; 
  constructor(private offersService:OffresService) {}

  ngOnInit(): void {
    this.getAllOffers(); 
  }

  getAllOffers()
  {
    this.offersService.getAllOffres().subscribe(data=>{
      let result:any = data ;
      this.offers = result.offers ;  
      this.selectOp = result.offers ;  
      console.log(result);  
    })
  }
}
