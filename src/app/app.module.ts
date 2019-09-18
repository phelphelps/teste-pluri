import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material'
import { TrendingMoviesComponent } from './trending-movies/trending-movies.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SearchMoviesComponent } from './search-movies/search-movies.component';
import { SimilarMoviesComponent } from './similar-movies/similar-movies.component'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TrendingMoviesComponent,
    MovieDetailComponent,
    HomeComponent,
    FooterComponent,
    SearchMoviesComponent,
    SimilarMoviesComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  exports: [
    NavbarComponent,
    TrendingMoviesComponent,
    MovieDetailComponent,
    HomeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

