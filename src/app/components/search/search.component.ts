import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private apiService: ApiService) { } //tworzymy zmienna przez ktora dostajemy sie do naszego serwisu aby pobrac dane z serwera-komuniikacja z API

  ngOnInit(): void {
    
  }
  onSearchInput(movieTitle: string){
    console.log(movieTitle);
this.apiService.getMovie(movieTitle);
  }

}

