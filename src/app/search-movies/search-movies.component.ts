import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.css']
})
export class SearchMoviesComponent implements OnInit {
  movies: [];
  constructor(private movieService:MoviesService) { }

  ngOnInit() { }
  getMovies(event){
    const user_input = event.target.value;
    this.movieService.searchMovies(user_input).then(movies=>this.movies = movies.results)
    
  }
}
