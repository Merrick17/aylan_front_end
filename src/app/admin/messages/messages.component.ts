import { Component, OnInit } from '@angular/core';
import {MessageService} from '../../message.service'
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  firstName = "";
  lastName = "";
  email = "";
  message = "";
  messages = []
  constructor(private messageService: MessageService,
    private toaster: ToastrService) { }

  ngOnInit(): void {
        this.getAllMessages(); 
  }
  getAllMessages()
  {
    this.messageService.getAllMessages().subscribe(data=>{
      let result:any=data ; 
      this.messages=result.messages ; 
    })
  }
  deleteMessage(id) {
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
        this.messageService.deleteMessage(id).subscribe(data => {
          const result: any = data
          this.getAllMessages()
        })
      }
    })
  }
}
