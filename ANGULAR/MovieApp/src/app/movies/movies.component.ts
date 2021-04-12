import { Component } from "@angular/core";
import { Movie } from "../movie";

@Component({
  selector :'movies', //<movies></movies> eğer '.movies' olursa <div class='movies'> '#movies' olursa <div id='movies'>
  templateUrl:'movies.component.html'

})

export class MoviesComponent{

  title='Movie List'

  movie : Movie={
    id:1,
    name:'Movie Name'
  }

  getTitle(){
    return this.title;
  }
}
