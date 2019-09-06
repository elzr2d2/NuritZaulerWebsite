import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { FormDetails } from '../form-details';
import { MailSenderService } from '../mail-sender.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public fullDetails= new FormDetails();

  constructor(private _mailSender : MailSenderService) { }
  ngOnInit() {

  }
   onSubmit(f: NgForm) {
    //this._mailSender.setContactDetails(this.fullDetails);
  }
}

