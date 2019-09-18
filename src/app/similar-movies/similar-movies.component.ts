import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-similar-movies',
  templateUrl: './similar-movies.component.html',
  styleUrls: ['./similar-movies.component.css']
})
export class SimilarMoviesComponent implements OnInit {
  similar_movies_array:any;
  constructor(private movieService:MoviesService,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.getSimilarMovies()
  }
  getSimilarMovies(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.movieService.getSimilarMovies(id).then(similar_movies=> this.similar_movies_array = similar_movies.results)
  }
}
