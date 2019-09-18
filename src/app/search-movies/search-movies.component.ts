import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { isEmptyExpression } from '@angular/compiler';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.css']
})
export class SearchMoviesComponent implements OnInit {
  movies: [];
  constructor(private movieService: MoviesService) { }

  ngOnInit() { }

  clearmovies() {
    this.movies = []
  }
  getMovies(event) {
    const user_input = event.target.value;
    if (user_input) {
      this.movieService.searchMovies(user_input).then(movies => this.movies = movies.results)
    } else {
      this.clearmovies()
    }
  }
  isEmpty() {
    if (this.movies == []) {
      return true
    }

  }
}
