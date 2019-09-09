import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { AppService } from './app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  value = 'Creative person';
  a = 'Web Developer';
  b = 'Creative Person';
  c = 'Hustler';
  data = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

constructor(private appService: AppService){}
  ngOnInit() {



    setInterval(() => {
      if (this.value == this.a) {
        this.value = this.b
      } else if (this.value == this.b) {
        this.value = this.c
      }else {
        this.value = this.a;
      }

    }, 2500);
  }

onSubmit(f) {
    this.appService.sendEmail(this.data);
    f.submitted = false;
    this.data.email = '';
    this.data.name = '';
    this.data.message = '';
    this.data.subject = '';
  }
}
