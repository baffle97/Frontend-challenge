import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss'],
})
export class ContactCardComponent implements OnInit {
  girlHeadshot: string =
    'https://defineamerican.com/wp-content/uploads/2022/02/Amina-Barnes-Headshot-Square.jpg';
  landscape: string =
    'https://media.istockphoto.com/photos/urban-landscape-of-tokyo-picture-id939578898?b=1&k=20&m=939578898&s=170667a&w=0&h=VsP8kmqrlLq9fO80-zuJPB2S6VtsI1UCcLKgmZIADis=';

  subject: string = '';
  message: string = '';
  mapImage: string =
    'https://miro.medium.com/max/1200/1*qYUvh-EtES8dtgKiBRiLsA.png';
  constructor() {}

  ngOnInit(): void {}

  onChangeTextArea(event) {
    this.message = event.target.value;
  }

  onSubmitForm() {
    let form: { subject: string; message: string } = {
      subject: this.subject,
      message: this.message,
    };
    console.log(form);
  }
}
