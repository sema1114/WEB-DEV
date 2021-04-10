import { Component } from "@angular/core";

@Component({
  selector :'movies', //<movies></movies> eğer '.movies' olursa <div class='movies'> '#movies' olursa <div id='movies'>
  templateUrl:'movies.component.html',
  styles:[`
  h2{
    color:blue;
  }
  `]
})

export class MoviesComponent{

}
