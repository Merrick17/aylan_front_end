import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  messageToSubmit = {
    firstName: "",
    lastName: "",
    email: "",
    message: ""
 }
  constructor(private messageService : MessageService, private toaster: ToastrService) { }

  ngOnInit(): void {
  }
  submitMessage() {
  this.messageService.createMessage(this.messageToSubmit).subscribe((data) => {
    let result: any = data;
    this.clear()
    this.toaster.success(result.msg,'Success')
    });
  }
    clear() {
    this.messageToSubmit.firstName = ""
      this.messageToSubmit.lastName = ""
      this.messageToSubmit.email = ""
      this.messageToSubmit.message = ""
  }
}
