import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { OffresService } from '../../offres.service';
import Swal from 'sweetalert2'
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
  offerToEdit = {
    id: "",
    title: '',
  desc: '',
  rec: '',
  salary: '',
  ref: '',
  }
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
    });
  }
  getAllOffers()
  {
    this.OfferService.getAllOffres().subscribe(data=>{
      let result:any=data ; 
      this.offers=result.offers ; 
    })
  }
  readyToEdit(id, title, desc, ref, rec, salary) {
    this.offerToEdit.id = id
  this.offerToEdit.title = title;
  this.offerToEdit.desc = desc;
  this.offerToEdit.ref = ref;
  this.offerToEdit.rec = rec;
  this.offerToEdit.salary = salary;
}

  deleteOffer(id) {
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
        this.OfferService.deleteOffre(id).subscribe(data => {
          const result: any = data
          this.getAllOffers()
        })
      }
    })
  }
  editOffer() {
    this.readyToEdit(this.offerToEdit.id,
  this.offerToEdit.title,
  this.offerToEdit.desc,
  this.offerToEdit.ref,
  this.offerToEdit.rec,
  this.offerToEdit.salary)
    this.OfferService.updateOffre(this.offerToEdit.id, this.offerToEdit).subscribe(data => {
      const result: any = data
      this.getAllOffers()
    })
  }
}
