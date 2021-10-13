import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { IMovieInformation } from './models/movie.model';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {} //prywatna zmienna dostepna w tym serwisie, nie mozna sie odwolac to http w template
  getMovie(movieTitle: string) {
    this.http
      .get<IMovieInformation>(environment.apiUrl, {
        params: { t: movieTitle, apiKey: environment.apiKey },
      })
      .subscribe(
        (odpowiedz) => console.log(odpowiedz),
        (nieodpowie) => console.log('no answer'),
        // () => console.log('end')
      );
    //nasza zmienna  zadresem url :)
  }
}

// $http.get(user.details_path, {
//   params: { user_id: user.id }
// });
