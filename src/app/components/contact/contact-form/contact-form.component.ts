import { Component, OnInit } from '@angular/core';

import { Client } from 'src/app/client';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  reasons = [
    'Wedding',
    'Birthday Party',
    'Sports',
    'Outdoor (Hike, etc)',
    'Other',
  ];

  model = new Client(1, '', '', '', this.reasons[0]);

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }
}
