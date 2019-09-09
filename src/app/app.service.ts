import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  sendEmail(data: any) {
   return this.http.post('http://portfoiliobackend-env.bp537pjs6h.us-east-2.elasticbeanstalk.com/mail', data)
   .subscribe();
  }




}
