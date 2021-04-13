import { Component } from "@angular/core";
import { Movie } from "../movie";
import {MovieService} from '../movie.service';

@Component({
  selector :'movies', //<movies></movies> eğer '.movies' olursa <div class='movies'> '#movies' olursa <div id='movies'>
  templateUrl:'movies.component.html'

})

export class MoviesComponent{

  title='Movie List';

  movies:Movie[];

  constructor( private movieService:MovieService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
   this.getMovies();
  }

  selectedMovie:Movie;

 onSelect(movie:Movie):void{
this.selectedMovie=movie;
 }

 getMovies() :void{
   this.movieService.getMovie()
                  .subscribe(movies=>{
                    this.movies=movies;
                  })
                  ;
 }

}
