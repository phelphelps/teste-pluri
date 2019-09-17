import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MovieDetailComponent} from './movie-detail/movie-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TrendingMoviesComponent } from './trending-movies/trending-movies.component';


const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'detail/:id', component: MovieDetailComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'trendingmovies', component: TrendingMoviesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
