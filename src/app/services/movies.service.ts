import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class MoviesService {
	api_key: string;
	url: string;
	language: string;

	constructor(private http: HttpClient) {
		this.api_key = "?api_key=ab006f3b8bed790ea372980a14e6eab4";
		this.language = "&language=pt-BR"
		this.url = "https://api.themoviedb.org/3"
	}

	getSomething(something): Promise<any> {
		/**Como as requisições são bem similares, esse método engloba a maioria delas,
		 * com isso repetimos menos o código :)
		 */
		return this.http.get(this.url + something + this.api_key + this.language).toPromise();
	}

	getMovie(id):Promise<any> {
		return this.getSomething("/movie/"+id)
	}
	getTrendingMovies(): Promise<any> {
		return this.getSomething("/trending/all/week")
	}
	searchMovies(user_input):Promise<any> {
		return this.http.get(this.url+"/search/movie"+this.api_key+this.language+"&query="+user_input).toPromise()
	}
	getSimilarMovies(movie_id):Promise<any>{
		return this.getMovie(movie_id+"/similar")
	}

}/**https://api.themoviedb.org/3/movie/299534/similar?api_key=ab006f3b8bed790ea372980a14e6eab4&language=pt_BR&page=1
 */


