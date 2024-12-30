import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   
  inputValue: string = ''; //new

  public data: any; // Variable to store API response

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Public API URL
    this.http.get(apiUrl).subscribe(
      (response) => {
        this.data = response; // Store the response
        console.log(this.data); // Log for debugging
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
