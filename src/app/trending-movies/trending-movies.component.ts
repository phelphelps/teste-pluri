import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
@Component({
  selector: 'app-trending-movies',
  templateUrl: './trending-movies.component.html',
  styleUrls: ['./trending-movies.component.css']
})
export class TrendingMoviesComponent implements OnInit {
  movies:any;
  constructor(private movieService:MoviesService) {
    
  }
  
  ngOnInit() {
    this.getTrendingMovies()
  }
  getTrendingMovies():void{
    this.movieService.getTrendingMovies().then(trending=> this.movies = trending.results);

}
}
