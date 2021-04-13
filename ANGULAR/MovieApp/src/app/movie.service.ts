import { Injectable } from '@angular/core';
import { Movie } from './movie';
import {Movies} from './movie.datasource';
import{Observable, of} from 'rxjs';
import { LoggingService } from './logging.service';



@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private logingService:LoggingService) { }



getMovie() : Observable<Movie[]>{

  this.logingService.add('MovieService: listening movies');

  return of(Movies);

}
}
