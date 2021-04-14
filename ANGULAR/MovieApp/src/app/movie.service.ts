import { Injectable } from '@angular/core';
import { Movie } from './movie';
import {Movies} from './movie.datasource';
import{Observable, of} from 'rxjs';
import { LoggingService } from './logging.service';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class MovieService {

private apiMoviesUrl ='api/movies';

  constructor(
    private logingService:LoggingService,
    private http:HttpClient
    ) { }



getMovie() : Observable<Movie[]>{


  this.logingService.add('MovieService: listening movies');

  return this.http.get<Movie[]>(this.apiMoviesUrl);

}

getMovieone(id):Observable<Movie>{
this.logingService.add('MovieService: get movie detail by id='+id)

return this.http.get<Movie>(this.apiMoviesUrl+'/'+id);

}

}
