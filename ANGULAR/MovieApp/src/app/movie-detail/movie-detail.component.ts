import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

//localhost:4200/detail/2
  @Input() movie:Movie

  constructor(
    private movieService:MovieService,
    private route:ActivatedRoute
    ) { }

  ngOnInit() {
    this.getMovieone();
  }

  getMovieone():void{
  const id=+this.route.snapshot.paramMap.get('id');
  this.movieService.getMovieone(id)
  .subscribe(movie=>this.movie=movie);
  }
}
