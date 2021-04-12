import { Component } from "@angular/core";
import { Movie } from "../movie";
import {Movies} from '../movie.datasource'

@Component({
  selector :'movies', //<movies></movies> eğer '.movies' olursa <div class='movies'> '#movies' olursa <div id='movies'>
  templateUrl:'movies.component.html'

})

export class MoviesComponent{

  title='Movie List';

  movies=Movies;
  selectedMovie:Movie;

 onSelect(movie:Movie):void{
this.selectedMovie=movie;
 }

}
