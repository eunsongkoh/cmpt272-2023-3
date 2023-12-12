import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'httpMod';
  // the current date time
  // could be used as a unique identifier
  i = new Date().getTime();
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http
      .get(
        'https://272.selfip.net/apps/your_app_ID/collections/people/documents/'
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
  // post, sends it to the collection and creates a new collection
  add() {
    this.http
      .post(
        // don't forget API key
        'https://272.selfip.net/apps/your_app_ID/collections/people/documents/',
        {
          // the data you want to send in
          key: this.i.toString(),
          data: 'bobby',
        }
      )
      .subscribe((data: any) => {
        console.log(data);
      });
  }
  delete() {
    // ...
  }
}
